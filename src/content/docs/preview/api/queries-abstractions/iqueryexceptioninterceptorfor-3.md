---
title: "IQueryExceptionInterceptorFor<TQuery, TResult, TException>"
description: "A type-safe exception interceptor for queries with a strongly-typed result that runs only for exceptions of type TException."
sidebar:
  label: "IQueryExceptionInterceptorFor<TQuery, TResult, TException>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

A type-safe exception interceptor for queries with a strongly-typed result that runs
only for exceptions of type `TException`. The exception arrives
already typed — no `is` check in the interceptor body.

```csharp
public interface IQueryExceptionInterceptorFor<in TQuery, TResult, TException> : IQuery, IMessage, IAsyncExceptionInterceptor<TQuery, TResult>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TQuery : IQuery<TResult> where TResult : notnull where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptorFor%5BTQuery%2CTResult%2CTException%5D.cs#L28)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type being intercepted. Must implement [`IQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquery-1). |
| `TResult` | The result type of the query. Also the type returned by the interceptor — an interceptor that declines to replace the result returns `null`. |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

Filtering does not reorder anything: matching interceptors run in the pipeline's
existing order (weight descending, then type name), and the result threads through them
exactly as it does through the unfiltered
[`IQueryExceptionInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptor-2). When no interceptor accepts
the thrown exception, it leaves the pipeline unwrapped with its original stack.

## Methods

### `HandleAsync(TQuery, TResult?, TException, ErgosfareContext)`

```csharp
ValueTask<TResult?> HandleAsync(TQuery query, TResult? result, TException exception, ErgosfareContext context)
```

Handles the exception asynchronously, potentially modifying the query result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query being processed when the exception occurred. |
| `result` | `TResult` | The result produced before the exception occurred, if any. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the (possibly modified) result that continues through the pipeline.
