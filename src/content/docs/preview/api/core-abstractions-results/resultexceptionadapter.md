---
title: "ResultExceptionAdapter"
description: "The framework's default adapter for its own Result carrier: a field read, no boxing, no reflection."
sidebar:
  label: "ResultExceptionAdapter"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/preview/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The framework's default adapter for its own [`Result`](/ergosfare.docs/preview/api/core-abstractions/result) carrier: a field read,
no boxing, no reflection. Bound automatically — never registered by hand.

```csharp
public sealed class ResultExceptionAdapter : IResultAdapter<Result>, IResultMaterializer<Result>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Results/ResultExceptionAdapter.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IResultAdapter<Result>`, `IResultMaterializer<Result>`

## Fields

### `Instance`

```csharp
public static readonly ResultExceptionAdapter Instance
```

The shared instance; the adapter is stateless.

**Returns**

[`ResultExceptionAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter)

## Methods

### `Materialize(Exception)`

```csharp
public Result Materialize(Exception exception)
```

Builds the failed carrier representing `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. |

**Returns**

[`Result`](/ergosfare.docs/preview/api/core-abstractions/result) — A failed [`Result`](/ergosfare.docs/preview/api/core-abstractions/result) carrying `exception`.

### `TryGetException(in Result, out Exception?)`

```csharp
public bool TryGetException(in Result result, out Exception? exception)
```

Attempts to extract a failure from `result` without throwing.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | [`Result`](/ergosfare.docs/preview/api/core-abstractions/result) | The pipeline result to inspect. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The carried failure, when present. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when a failure was extracted; otherwise `false`.
