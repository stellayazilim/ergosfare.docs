---
title: "IPipeConverter<T>"
description: "Reads a byte source as typed items, preserving decoding state between reads."
sidebar:
  label: "IPipeConverter<T>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Reads a byte source as typed items, preserving decoding state between reads.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public interface IPipeConverter<out T>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Streaming/IPipeConverter.cs#L6)

**Type parameters**

| Name | Description |
| --- | --- |
| `T` | The items produced by the converter. |

## Remarks

The converter owns its temporary buffers, but must leave the source open.
    Published items must remain valid after subsequent reads.

## Methods

### `ConvertAsync(Stream, CancellationToken)`

```csharp
IAsyncEnumerable<out T> ConvertAsync(Stream source, CancellationToken cancellationToken = default)
```

Reads until EOF or cancellation; failures propagate to the input consumer.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `source` | [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream) | The caller-owned byte stream. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancels reads and converter work. |

**Returns**

`IAsyncEnumerable<T>` — The converted items.
