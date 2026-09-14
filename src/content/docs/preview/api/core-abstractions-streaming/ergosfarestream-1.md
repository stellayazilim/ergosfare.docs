---
title: "ErgosfareStream<TChunk>"
description: "A message whose payload arrives in chunks instead of all at once."
sidebar:
  label: "ErgosfareStream<TChunk>"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/preview/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A message whose payload arrives in chunks instead of all at once.

```csharp
public abstract class ErgosfareStream<TChunk> : ErgosfareStream, IMessage, IAsyncEnumerable<TChunk>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Streaming/ErgosfareStream%5BTChunk%5D.cs#L30)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | The chunk type the message carries. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream)

**Implements:** [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage), `IAsyncEnumerable<TChunk>`

**Derived:** [`ErgosfareCommandStream<TChunk, TMeta>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/ergosfarecommandstream-2), [`ErgosfareCommandStream<TChunk, TMeta, TResult>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/ergosfarecommandstream-3), [`ErgosfareQueryStream<TChunk, TMeta, TResult>`](/ergosfare.docs/preview/api/queries-abstractions-streaming/ergosfarequerystream-3)

## Remarks

The message is the stream: what makes a dispatch streaming is the message's own type,
not the verb it is sent with and not the module it belongs to. A command and a query
stream the same way, and nothing on the dispatch surface changes — a handler takes this
message like any other and pulls the chunks out of it.

The channel is bounded, so a producer faster than the handler waits rather than filling
memory: back-pressure is the point, and a four-gigabyte upload never exists as one value.
It is also single-pass. Nothing here can be replayed, which is why a stream message has
no retry and no resume: the handler runs once for the whole sequence, so when it stops
there is nobody left to produce the rest.

Whoever creates the stream owns its writing end and completes it. A stream nobody
consumes — no handler matched, a stage refused — is faulted by the dispatch rather than
left open, so the next write fails instead of blocking forever.

## Fields

### `DefaultCapacity`

```csharp
public const int DefaultCapacity = 4
```

How many chunks a bounded channel holds before a writer has to wait.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)

Small on purpose. The buffer exists to keep the handler fed across a scheduling gap,
not to hold the payload — a larger window buys throughput only when the producer is
bursty, and costs memory proportional to the chunk size.

## Constructors

### `ErgosfareStream(IAsyncEnumerable<TChunk>)`

```csharp
protected ErgosfareStream(IAsyncEnumerable<TChunk> source)
```

Creates a stream over a source that already exists.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TChunk>` | The sequence to hand to the handler. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `source` is `null`. |

The adopting form: a request body, a file, the output of an earlier dispatch. Nobody
pumps it, so the caller can await the dispatch directly — the deadlock the writing
form has to avoid cannot arise here.

### `ErgosfareStream(int)`

```csharp
protected ErgosfareStream(int capacity = 4)
```

Creates a stream the caller writes into.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `capacity` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | How many chunks may be buffered before a write waits; defaults to [`ErgosfareStream<TChunk>.DefaultCapacity`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream-1#defaultcapacity). |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentOutOfRangeException`](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception) | `capacity` is not positive. |

## Properties

### `Info`

```csharp
public StreamInfo Info { get; }
```

What this stream has carried so far, and how it ended if it has.

**Returns**

[`StreamInfo`](/ergosfare.docs/preview/api/core-abstractions-streaming/streaminfo)

One value rather than three loose members, because this is what the stages are handed:
they see what the stream did, never what it carried.

### `IsAdopted`

```csharp
public bool IsAdopted { get; }
```

Whether this stream was created over an existing source rather than to be written to.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### `Complete()`

```csharp
public void Complete()
```

Says no more chunks are coming.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | The stream adopted an existing source. |

The handler's enumeration ends here. Without it the handler waits for a chunk that
never arrives, which is the one hazard of the writing form.

### `Fault(Exception)`

```csharp
public void Fault(Exception exception)
```

Ends the stream with a failure, which surfaces at the handler's next read.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to end it with. |

Used by the producer when its own source broke, and by the dispatch when nothing will
consume the stream. Either way the sequence is over: a faulted stream is not resumed.

### `GetAsyncEnumerator(CancellationToken)`

```csharp
public IAsyncEnumerator<TChunk> GetAsyncEnumerator(CancellationToken cancellationToken = default)
```

Reads the chunks. The handler's side of the message, and it may be taken once.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels the enumeration. |

**Returns**

`IAsyncEnumerator<TChunk>` — An enumerator over the chunks, in the order they were written.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | The chunks were already taken. |

The message is the sequence, so a handler writes `await foreach (var chunk in
command)` and nothing stands between it and the payload. Single-pass is the
contract, not an implementation detail: a network-backed sequence cannot be
enumerated twice, and a second reader would silently take chunks the first one needs.
The guard is here rather than in the iterator so that it fires when the enumerator is
asked for, not at the first move.

### `TryWrite(TChunk)`

```csharp
public bool TryWrite(TChunk chunk)
```

Writes a chunk if the buffer has room, and reports rather than waits when it does not.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `chunk` | `TChunk` | The chunk to write. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the chunk was taken.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | The stream adopted an existing source. |

For producers that cannot wait — live capture, telemetry — where dropping is better
than stalling. The decision belongs to the caller, which is why this returns instead
of dropping silently.

### `WriteAsync(TChunk, CancellationToken)`

```csharp
public ValueTask WriteAsync(TChunk chunk, CancellationToken cancellationToken = default)
```

Writes a chunk, waiting while the buffer is full.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `chunk` | `TChunk` | The chunk to write. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels the wait. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | The stream adopted an existing source. |

Waiting is the back-pressure: it suspends nothing when the buffer has room, and when
it does not, the producer slowing down is the correct behaviour.
