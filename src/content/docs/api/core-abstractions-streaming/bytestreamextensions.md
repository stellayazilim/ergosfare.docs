---
title: "ByteStreamExtensions"
description: "Bridges between a chunk sequence and Stream, in both directions."
sidebar:
  label: "ByteStreamExtensions"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Bridges between a chunk sequence and [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream), in both directions.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public static class ByteStreamExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Streaming/ByteStreamExtensions.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Written against [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) rather than against
[`ErgosfareStream<TChunk>`](/ergosfare.docs/api/core-abstractions-streaming/ergosfarestream-1): a stream message is a sequence, so these apply to
it, and they apply equally to any other source. They are extensions rather than members
because they only make sense over bytes — a sequence of frames or of order lines has no
[`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) to be, and its message should not carry a method that says otherwise.

## Fields

### `DefaultChunkSize`

```csharp
public const int DefaultChunkSize = 65536
```

How much of a [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) is read into one chunk by default.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### `AsStream(IAsyncEnumerable<ReadOnlyMemory<byte>>)`

```csharp
public static Stream AsStream(this IAsyncEnumerable<ReadOnlyMemory<byte>> source)
```

Presents a chunk sequence as a read-only [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | `IAsyncEnumerable<ReadOnlyMemory<byte>>` | The chunks to serve. |

**Returns**

[`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) — A forward-only stream over them.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `source` is `null`. |

For handing the payload to something that speaks [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) — a file, an
image decoder, a serializer. Reading it consumes the sequence, so it inherits the
single-pass contract of whatever it wraps.

### `Chunked(Stream, int, CancellationToken)`

```csharp
public static IAsyncEnumerable<ReadOnlyMemory<byte>> Chunked(this Stream source, int chunkSize = 65536, CancellationToken cancellationToken = default)
```

Reads a [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) as a chunk sequence.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) | The stream to read. |
| `chunkSize` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | How much to read into one chunk. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels the reads. |

**Returns**

`IAsyncEnumerable<ReadOnlyMemory<byte>>` — The chunks, in order, ending when the stream does.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `source` is `null`. |
| [`ArgumentOutOfRangeException`](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception) | `chunkSize` is not positive. |

The adopting direction: a request body or a file becomes the source a stream message
hands to its handler, without the caller pumping anything.

Each chunk owns its bytes. Reading into one rented buffer and handing out slices of it
would be cheaper by an allocation per chunk, and would make every chunk a window onto
memory the next read overwrites — a handler that keeps one would find its contents
changed underneath. A chunk is an item; what to do with it, including keeping it, is
the handler's business.
