---
title: "StreamInput<TChunk, TSelf>"
description: "A bounded stream message whose public properties carry its metadata."
sidebar:
  label: "StreamInput<TChunk, TSelf>"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/preview/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A bounded stream message whose public properties carry its metadata.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public abstract class StreamInput<TChunk, TSelf> : ErgosfareStream<TChunk>, IMessage, IAsyncDisposable, IAsyncEnumerable<TChunk>, IBufferWriter<TChunk> where TSelf : StreamInput<TChunk, TSelf>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Streaming/StreamInput.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | One buffered item; capacity is an item count, not a byte budget. |
| `TSelf` | The concrete message type returned by fluent operations. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream), `ErgosfareStream<TChunk>`

**Implements:** [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage), [`IAsyncDisposable`](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable), `IAsyncEnumerable<TChunk>`, `IBufferWriter<TChunk>`

**Derived:** [`CommandStream<TChunk, TSelf>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/commandstream-2), [`QueryStream<TChunk, TSelf>`](/ergosfare.docs/preview/api/queries-abstractions-streaming/querystream-2)

## Remarks

Pipe starts producing immediately. It waits when the channel is full; dispatch
    may start consuming later. Dispose the input if no dispatch will consume it.
    IBufferWriter provides manual staging; call FlushAsync to publish staged items.
    Staging grows to honor sizeHint independently of the bounded queue. Capacity does not
    limit staging memory or the memory reachable through reference-type items.
    Manual writing and Pipe are mutually exclusive. Concurrent buffer-writing operations
    are not supported; IAsyncEnumerable permits exactly one consumer.

## Constructors

### `StreamInput(int)`

```csharp
protected StreamInput(int capacity = 24)
```

Creates a message with room for the given number of queued items.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `capacity` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | Maximum queued items; growable staging and an in-flight item are additional. |

## Methods

### `Pipe(IAsyncEnumerable<TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(IAsyncEnumerable<TChunk> source, CancellationToken cancellationToken = default)
```

Starts copying items into this message and returns the same concrete message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TChunk>` | The single source to consume. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels production even before dispatch starts. |

**Returns**

`TSelf` — This message.

### `Pipe(IAsyncEnumerable<TChunk>, Func<TChunk, TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(IAsyncEnumerable<TChunk> source, Func<TChunk, TChunk> transform, CancellationToken cancellationToken = default)
```

Starts copying items through a synchronous per-item transform.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TChunk>` | The source. |
| `transform` | `Func<TChunk, TChunk>` | The transformation applied once per item. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels production. |

**Returns**

`TSelf` — This message.

### `Pipe(IAsyncEnumerable<TChunk>, Func<TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(IAsyncEnumerable<TChunk> source, Func<TChunk> converter, CancellationToken cancellationToken = default)
```

Produces one item per source item, without passing its value to the factory.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TChunk>` |  |
| `converter` | `Func<TChunk>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`

### `Pipe(IAsyncEnumerable<TChunk>, IPipeConverter<TChunk, TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(IAsyncEnumerable<TChunk> source, IPipeConverter<TChunk, TChunk> converter, CancellationToken cancellationToken = default)
```

Converts each source item using a reusable converter.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TChunk>` |  |
| `converter` | `IPipeConverter<TChunk, TChunk>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`

### `Pipe(Stream, Func<byte, TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(Stream source, Func<byte, TChunk> converter, CancellationToken cancellationToken = default)
```

Converts each byte independently. Use IPipeConverter for stateful text decoding.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) |  |
| `converter` | `Func<byte, TChunk>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`

### `Pipe(Stream, Func<TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(Stream source, Func<TChunk> converter, CancellationToken cancellationToken = default)
```

Produces one item for each byte read, without passing the byte to the factory.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) |  |
| `converter` | `Func<TChunk>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`

### `Pipe(Stream, IPipeConverter<byte, TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(Stream source, IPipeConverter<byte, TChunk> converter, CancellationToken cancellationToken = default)
```

Converts individual bytes using a reusable chunk converter.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) |  |
| `converter` | `IPipeConverter<byte, TChunk>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`

### `Pipe(Stream, IPipeConverter<TChunk>, CancellationToken)`

```csharp
public TSelf Pipe(Stream source, IPipeConverter<TChunk> converter, CancellationToken cancellationToken = default)
```

Starts a caller-provided converter over a byte stream; leaves the source open.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) | The caller-owned byte source. |
| `converter` | `IPipeConverter<TChunk>` | The format and item-boundary converter. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels production. |

**Returns**

`TSelf` — This message.

### `TransformPipe<TSource>(IAsyncEnumerable<TSource>, Func<TChunk>, CancellationToken)`

```csharp
public TSelf TransformPipe<TSource>(IAsyncEnumerable<TSource> source, Func<TChunk> converter, CancellationToken cancellationToken = default)
```

Produces one output per source item using a parameterless factory.

**Type parameters**

| Name | Description |
| --- | --- |
| `TSource` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TSource>` |  |
| `converter` | `Func<TChunk>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`

### `TransformPipe<TSource>(IAsyncEnumerable<TSource>, Func<TSource, TChunk>, CancellationToken)`

```csharp
public TSelf TransformPipe<TSource>(IAsyncEnumerable<TSource> source, Func<TSource, TChunk> transform, CancellationToken cancellationToken = default)
```

Starts converting source items into this message's chunk type.

**Type parameters**

| Name | Description |
| --- | --- |
| `TSource` | The source item type. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TSource>` | The source. |
| `transform` | `Func<TSource, TChunk>` | The item conversion. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels production. |

**Returns**

`TSelf` — This message.

### `TransformPipe<TSource>(IAsyncEnumerable<TSource>, IPipeConverter<TSource, TChunk>, CancellationToken)`

```csharp
public TSelf TransformPipe<TSource>(IAsyncEnumerable<TSource> source, IPipeConverter<TSource, TChunk> converter, CancellationToken cancellationToken = default)
```

Converts source items using a reusable converter.

**Type parameters**

| Name | Description |
| --- | --- |
| `TSource` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<TSource>` |  |
| `converter` | `IPipeConverter<TSource, TChunk>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`
