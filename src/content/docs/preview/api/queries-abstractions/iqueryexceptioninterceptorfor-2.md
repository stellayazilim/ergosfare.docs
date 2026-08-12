---
title: "IQueryExceptionInterceptorFor<TQuery, TException>"
description: "A result-agnostic exception interceptor for a specific query type that runs only for exceptions of type TException."
sidebar:
  label: "IQueryExceptionInterceptorFor<TQuery, TException>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

A result-agnostic exception interceptor for a specific query type that runs only for
exceptions of type `TException`. The exception arrives already
typed — no `is` check in the interceptor body.

```csharp
public interface IQueryExceptionInterceptorFor<in TQuery, TException> : IQuery, IMessage, IAsyncExceptionInterceptor<TQuery>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TQuery : IQuery where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptorFor%5BTQuery%2CTException%5D.cs#L22)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type of query being intercepted. Must implement [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery). |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

The result-agnostic base keeps the interceptor visible to the pipeline's pattern match
whatever the query's result type is, including value-typed results. For a strongly-typed
result use [`IQueryExceptionInterceptorFor<TQuery, TResult, TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-3).

## Methods

### `HandleAsync(TQuery, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TQuery query, object? messageResult, TException exception, ErgosfareContext context)
```

Handles the exception asynchronously, potentially replacing the pipeline result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query being processed when the exception occurred. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the exception occurred, if any. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the result that continues through the pipeline.
