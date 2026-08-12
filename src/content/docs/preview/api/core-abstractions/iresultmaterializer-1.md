---
title: "IResultMaterializer<TResult>"
description: "The inverse of IResultAdapter<TResult>: builds a failed TResult out of an exception."
sidebar:
  label: "IResultMaterializer<TResult>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The inverse of [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1): builds a failed
`TResult` out of an exception. An adapter that also implements
this contract declares its carrier type fully value-based — a real throw inside the
pipeline is caught and materialized into a failed carrier instead of reaching the
caller, and an unhandled carried failure flows out as the result rather than being
rethrown. The framework's own Results.Result/Results.Result&lt;TValue>
adapters implement it; a foreign carrier's adapter may opt in when the carrier can
represent an arbitrary exception.

```csharp
public interface IResultMaterializer<out TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/IResultMaterializer.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The closed pipeline result type the materializer produces. |

## Remarks

Deliberately separate from [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1): every carrier can
surface a failure, but not every carrier can absorb one (a union type without an
exception arm extracts fine yet cannot materialize). Pipelines probe for this contract
once, next to the adapter binding — a carrier without it keeps the classic semantics:
an unhandled exception is rethrown to the caller.

## Methods

### `Materialize(Exception)`

```csharp
TResult Materialize(Exception exception)
```

Builds the failed carrier representing `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. |

**Returns**

`TResult` — A failed `TResult` carrying `exception`.
