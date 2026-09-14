---
title: "ResultExceptionAdapter<TValue>"
description: "Reads and builds the framework's Result<TValue> carrier; the payload counterpart of ResultExceptionAdapter."
sidebar:
  label: "ResultExceptionAdapter<TValue>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/preview/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Reads and builds the framework's [`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/result-1) carrier; the payload
counterpart of [`ResultExceptionAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter).

```csharp
public sealed class ResultExceptionAdapter<TValue> : IResultAdapter<Result<TValue>>, IResultMaterializer<Result<TValue>>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Results/ResultExceptionAdapter.cs#L42)

**Type parameters**

| Name | Description |
| --- | --- |
| `TValue` | The carrier's payload type. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IResultAdapter<Result<TValue>>`, `IResultMaterializer<Result<TValue>>`

## Fields

### `Instance`

```csharp
public static readonly ResultExceptionAdapter<TValue> Instance
```

The shared instance; the adapter holds no state.

**Returns**

[`ResultExceptionAdapter<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter-1)

## Methods

### `Materialize(Exception)`

```csharp
public Result<TValue> Materialize(Exception exception)
```

Builds the failed result carrying `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. |

**Returns**

`Result<TValue>` — The failed result.

### `TryGetException(in Result<TValue>, out Exception?)`

```csharp
public bool TryGetException(in Result<TValue> result, out Exception? exception)
```

Reads the failure carried by `result`, if there is one.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | `Result<TValue>` | The result to inspect. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The carried failure, or `null` on success. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the result carries a failure.
