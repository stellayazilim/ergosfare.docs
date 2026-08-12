---
title: "ResultExceptionAdapter<TValue>"
description: "The framework's default adapter for Result<TValue>; see ResultExceptionAdapter."
sidebar:
  label: "ResultExceptionAdapter<TValue>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/preview/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The framework's default adapter for [`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions/result-1); see
[`ResultExceptionAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter).

```csharp
public sealed class ResultExceptionAdapter<TValue> : IResultAdapter<Result<TValue>>, IResultMaterializer<Result<TValue>>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Results/ResultExceptionAdapter.cs#L31)

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

The shared instance; the adapter is stateless.

**Returns**

[`ResultExceptionAdapter<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter-1)

## Methods

### `Materialize(Exception)`

```csharp
public Result<TValue> Materialize(Exception exception)
```

Builds the failed carrier representing `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. |

**Returns**

`Result<TValue>` — A failed `Result` carrying `exception`.

### `TryGetException(in Result<TValue>, out Exception?)`

```csharp
public bool TryGetException(in Result<TValue> result, out Exception? exception)
```

Attempts to extract a failure from `result` without throwing.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | `Result<TValue>` | The pipeline result to inspect. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The carried failure, when present. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when a failure was extracted; otherwise `false`.
