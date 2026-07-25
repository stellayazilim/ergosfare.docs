---
title: "IResultAdapterService"
description: "Provides a central service to manage multiple IResultAdapter instances and to extract exceptions from arbitrary result objects."
sidebar:
  label: "IResultAdapterService"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Provides a central service to manage multiple [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) instances
and to extract exceptions from arbitrary result objects.

```csharp
public interface IResultAdapterService
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IResultAdapterService.cs#L8)

## Methods

### `AddAdapter(IResultAdapter)`

```csharp
void AddAdapter(IResultAdapter adapter)
```

Registers a new [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) to the service.
Adapters are evaluated in the order they are added when looking up exceptions.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapter` | [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) | The adapter instance to register. Must not be null. |

### `GetAdapters()`

```csharp
IEnumerable<IResultAdapter> GetAdapters()
```

**Returns**

`IEnumerable<IResultAdapter>`

### `LookupException(object?)`

```csharp
Exception? LookupException(object? result)
```

Attempts to find an exception inside the given `result` object
using the registered adapters.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result object to examine. Can be any type, including null. |

**Returns**

[`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) — The extracted [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) if one is found by any adapter; otherwise, `null`.
