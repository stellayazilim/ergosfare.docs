---
title: "IResultMaterializer<TResult>"
description: "Builds a failed result value from an exception — the inverse of IResultAdapter<TResult>."
sidebar:
  label: "IResultMaterializer<TResult>"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Builds a failed result value from an exception — the inverse of
[`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1).

```csharp
public interface IResultMaterializer<out TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IResultMaterializer.cs#L22)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The closed result type this materializer produces. |

## Remarks

Implementing this alongside [`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1) changes how the
pipeline settles for that result type: an exception thrown inside the pipeline is
caught and turned into a failed result instead of reaching the caller, and a carried
failure that no interceptor handled flows out as the returned result rather than being
rethrown.

It is a separate contract because not every carrier can absorb an arbitrary exception.
A result type whose adapter does not implement this keeps the default behavior: an
unhandled failure is thrown to the caller. The built-in
[`Result`](/ergosfare.docs/api/core-abstractions-results/result) and [`Result<TValue>`](/ergosfare.docs/api/core-abstractions-results/result-1) adapters implement it.

## Methods

### `Materialize(Exception)`

```csharp
TResult Materialize(Exception exception)
```

Builds the failed result carrying `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. |

**Returns**

`TResult` — A failed `TResult` carrying `exception`.
