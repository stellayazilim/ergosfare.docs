---
title: "ResultAdapterService"
description: "Implementation of IResultAdapterService that manages a collection of IResultAdapter instances and provides exception lookup functionality."
sidebar:
  label: "ResultAdapterService"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core`](/ergosfare.docs/preview/api/core)  
**Assembly:** `Stella.Ergosfare.Core.dll`

Implementation of [`IResultAdapterService`](/ergosfare.docs/preview/api/core-abstractions/iresultadapterservice) that manages a collection
of [`IResultAdapter`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter) instances and provides exception lookup functionality.

```csharp
public sealed class ResultAdapterService : IResultAdapterService
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core/ResultAdapterService.cs#L17)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IResultAdapterService`](/ergosfare.docs/preview/api/core-abstractions/iresultadapterservice)

## Remarks

This service allows the pipeline to remain agnostic of the result type while still
extracting exceptions when necessary. Multiple adapters can be registered to handle
different result styles (e.g., plain values, FluentResults, OneOf types, or custom wrappers).
The adapters are evaluated in the order they were added, and the first adapter capable
of adapting the result will be used to extract an exception.

## Methods

### `AddAdapter(IResultAdapter)`

```csharp
public void AddAdapter(IResultAdapter adapter)
```

Registers a new result adapter.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapter` | [`IResultAdapter`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter) | The adapter instance to register. Must not be null. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | Thrown if `adapter` is null. |

### `GetAdapters()`

```csharp
public IEnumerable<IResultAdapter> GetAdapters()
```

**Returns**

`IEnumerable<IResultAdapter>`

### `LookupException(object?)`

```csharp
public Exception? LookupException(object? result)
```

Iterates over the registered adapters to find the first one that can handle
the given `result` and extract an exception.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result object to examine. Can be null. |

**Returns**

[`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) — The extracted [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) if found by any adapter; otherwise `null`.
