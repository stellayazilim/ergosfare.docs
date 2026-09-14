---
title: "IQueryExceptionInterceptorFor<TQuery, TResult, TException>"
description: "Handles failures of type TException raised while dispatching a TQuery, and supplies the result the caller receives instead."
sidebar:
  label: "IQueryExceptionInterceptorFor<TQuery, TResult, TException>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Handles failures of type `TException` raised while dispatching a
`TQuery`, and supplies the result the caller receives instead.

```csharp
public interface IQueryExceptionInterceptorFor<in TQuery, TResult, TException> : IQuery, IMessage, IAsyncExceptionInterceptor<TQuery, TResult>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TQuery : IQuery<TResult> where TResult : notnull where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptorFor%5BTQuery%2CTResult%2CTException%5D.cs#L22)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this interceptor accepts. |
| `TResult` | The result type the query declares. |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

The failure arrives already typed, so no type test is needed in the body. Filtering
changes nothing about order: the interceptors that accept a failure run in the stage's
usual order, by descending weight and then type name, threading the result through each.
A failure no interceptor accepts reaches the caller with its original stack.

## Methods

### `HandleAsync(TQuery, TResult?, TException, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TQuery query, TResult? result, TException exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query whose dispatch failed. |
| `result` | `TResult` | The result produced before the failure, which is the result type's default when the handler itself failed. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TResult>` — The result the caller receives.

Running this method is what marks the failure handled, and a handled failure has to
leave a result behind. To leave a failure for the caller, narrow
`TException` so this interceptor never accepts it.
