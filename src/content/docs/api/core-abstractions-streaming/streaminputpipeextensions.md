---
title: "StreamInputPipeExtensions"
description: "Byte-specific convenience overloads, preserving the concrete message type."
sidebar:
  label: "StreamInputPipeExtensions"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Byte-specific convenience overloads, preserving the concrete message type.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public static class StreamInputPipeExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Streaming/PipeConverters.cs#L56)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `Pipe<TSelf>(StreamInput<byte, TSelf>, Stream, CancellationToken)`

```csharp
public static TSelf Pipe<TSelf>(this StreamInput<byte, TSelf> input, Stream source, CancellationToken cancellationToken = default) where TSelf : StreamInput<byte, TSelf>
```

Starts reading individual bytes from a caller-owned stream.

**Type parameters**

| Name | Description |
| --- | --- |
| `TSelf` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `input` | `StreamInput<byte, TSelf>` |  |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`

### `Pipe<TSelf>(StreamInput<ReadOnlyMemory<byte>, TSelf>, Stream, int, CancellationToken)`

```csharp
public static TSelf Pipe<TSelf>(this StreamInput<ReadOnlyMemory<byte>, TSelf> input, Stream source, int chunkSize = 65536, CancellationToken cancellationToken = default) where TSelf : StreamInput<ReadOnlyMemory<byte>, TSelf>
```

Starts reading owned byte blocks from a caller-owned stream.

**Type parameters**

| Name | Description |
| --- | --- |
| `TSelf` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `input` | `StreamInput<ReadOnlyMemory<byte>, TSelf>` |  |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) |  |
| `chunkSize` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`TSelf`
