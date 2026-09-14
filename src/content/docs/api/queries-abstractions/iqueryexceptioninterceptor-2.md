---
title: "IQueryExceptionInterceptor<TQuery, TResult>"
description: "Handles failures raised while dispatching a TQuery and supplies the result the caller receives instead."
sidebar:
  label: "IQueryExceptionInterceptor<TQuery, TResult>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Handles failures raised while dispatching a `TQuery` and supplies
the result the caller receives instead.

```csharp
public interface IQueryExceptionInterceptor<in TQuery, TResult> : IQuery, IMessage, IAsyncExceptionInterceptor<TQuery, TResult>, IExceptionInterceptor where TQuery : IQuery<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptor%5BTQuery%2CTResult%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this interceptor accepts. |
| `TResult` | The result type the query declares. |

## Remarks

`TQuery` is contravariant, so an interceptor written against a base
query type also runs for the queries derived from it; `TResult`
stays invariant because it is returned. Implement
[`IQueryExceptionInterceptorFor<TQuery, TResult, TException>`](/ergosfare.docs/api/queries-abstractions/iqueryexceptioninterceptorfor-3) to accept only
certain failures.

## Methods

### `HandleAsync(TQuery, TResult?, Exception, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TQuery query, TResult? result, Exception exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query whose dispatch failed. |
| `result` | `TResult` | The result produced before the failure, which is the result type's default when the handler itself failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure being handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TResult>` — The result the caller receives.

Running this method is what marks the failure handled, and a handled failure has to
leave a result behind: the call site locked the result type when it dispatched. To
leave a failure for the caller, do not accept it — a failure no interceptor accepts
reaches the caller unchanged.
