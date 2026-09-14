---
title: "ResultExceptionAdapter"
description: "Reads and builds the framework's Result carrier."
sidebar:
  label: "ResultExceptionAdapter"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Reads and builds the framework's [`Result`](/ergosfare.docs/api/core-abstractions-results/result) carrier. Bound automatically —
never registered by hand.

```csharp
public sealed class ResultExceptionAdapter : IResultAdapter<Result>, IResultMaterializer<Result>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Results/ResultExceptionAdapter.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IResultAdapter<Result>`, `IResultMaterializer<Result>`

## Fields

### `Instance`

```csharp
public static readonly ResultExceptionAdapter Instance
```

The shared instance; the adapter holds no state.

**Returns**

[`ResultExceptionAdapter`](/ergosfare.docs/api/core-abstractions-results/resultexceptionadapter)

## Methods

### `Materialize(Exception)`

```csharp
public Result Materialize(Exception exception)
```

Builds the failed result carrying `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. |

**Returns**

[`Result`](/ergosfare.docs/api/core-abstractions-results/result) — The failed result.

### `TryGetException(in Result, out Exception?)`

```csharp
public bool TryGetException(in Result result, out Exception? exception)
```

Reads the failure carried by `result`, if there is one.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | [`Result`](/ergosfare.docs/api/core-abstractions-results/result) | The result to inspect. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The carried failure, or `null` on success. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the result carries a failure.
