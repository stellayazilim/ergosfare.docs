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
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public abstract class ErgosfareStream<TChunk> : ErgosfareStream, IMessage, IAsyncDisposable, IAsyncEnumerable<TChunk>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Streaming/ErgosfareStream%5BTChunk%5D.cs#L30)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | The chunk type the message carries. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream)

**Implements:** [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage), [`IAsyncDisposable`](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable), `IAsyncEnumerable<TChunk>`

**Derived:** [`ErgosfareCommandStream<TChunk, TMeta>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/ergosfarecommandstream-2), [`ErgosfareCommandStream<TChunk, TMeta, TResult>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/ergosfarecommandstream-3), [`StreamInput<TChunk, TSelf>`](/ergosfare.docs/preview/api/core-abstractions-streaming/streaminput-2), [`ErgosfareQueryStream<TChunk, TMeta, TResult>`](/ergosfare.docs/preview/api/queries-abstractions-streaming/ergosfarequerystream-3)

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
| `capacity` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | How many chunks may be buffered before a write waits; defaults to `DefaultCapacity`. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentOutOfRangeException`](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception) | `capacity` is not positive. |

## Methods

### `ClaimSource()`

```csharp
protected void ClaimSource()
```

Claims the writing end for one source, before any manual writes.

### `CompleteFromSource()`

```csharp
protected void CompleteFromSource()
```

Completes the writing end owned by the bound source.

### `WriteFromSourceAsync(TChunk, CancellationToken)`

```csharp
protected ValueTask WriteFromSourceAsync(TChunk chunk, CancellationToken cancellationToken)
```

Writes from the single bound source without claiming the manual writer.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `chunk` | `TChunk` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
