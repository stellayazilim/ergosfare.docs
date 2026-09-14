---
title: "IQueryExceptionInterceptorFor<TException>"
description: "Handles failures of type TException raised while dispatching any query — the shape a module-wide error policy takes."
sidebar:
  label: "IQueryExceptionInterceptorFor<TException>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Handles failures of type `TException` raised while dispatching any
query — the shape a module-wide error policy takes.

```csharp
public interface IQueryExceptionInterceptorFor<TException> : IQuery, IMessage, IAsyncExceptionInterceptor<IQuery>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptorFor%5BTException%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

Accepting every query means joining the exception stage of every query pipeline in the
module; the filter is what keeps it from handling failures it was not written for. The
failure arrives already typed, so no type test is needed in the body.

## Methods

### `HandleAsync(IQuery, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(IQuery query, object? messageResult, TException exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) | The query whose dispatch failed. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the failure, if any. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result the rest of the pipeline receives, which must be of the pipeline's result type.
