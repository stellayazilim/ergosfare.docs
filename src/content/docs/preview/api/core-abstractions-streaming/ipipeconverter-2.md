---
title: "IPipeConverter<TSource, T>"
description: "Converts one source item into one destination item."
sidebar:
  label: "IPipeConverter<TSource, T>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/preview/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Converts one source item into one destination item.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public interface IPipeConverter<in TSource, out T>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Streaming/IPipeConverter.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TSource` | The source item type. |
| `T` | The destination item type. |

## Methods

### `Convert(TSource)`

```csharp
T Convert(TSource chunk)
```

Converts a single item. Failures terminate the pipe.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `chunk` | `TSource` | The source item. |

**Returns**

`T` — The converted item.
