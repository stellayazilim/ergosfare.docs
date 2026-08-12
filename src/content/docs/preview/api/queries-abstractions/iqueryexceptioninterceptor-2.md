---
title: "IQueryExceptionInterceptor<TQuery, TResult>"
description: "Represents a type-safe exception interceptor for queries with a strongly-typed result."
sidebar:
  label: "IQueryExceptionInterceptor<TQuery, TResult>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe exception interceptor for queries with a strongly-typed result.
The interceptor can inspect the exception and modify or replace the query result.

```csharp
public interface IQueryExceptionInterceptor<in TQuery, TResult> : IQuery, IMessage, IAsyncExceptionInterceptor<TQuery, TResult>, IExceptionInterceptor where TQuery : IQuery<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptor%5BTQuery%2CTResult%5D.cs#L22)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type being intercepted. Must implement [`IQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquery-1). |
| `TResult` | The result type of the query. Also the type returned by the interceptor — for a narrower return type there is no third parameter anymore; return the base result type. |

## Remarks

`TQuery` is contravariant, matching the core
[`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-2) contract the typed dispatch
matches against. `TResult` must stay invariant: the typed member
returns it.

## Methods

### `HandleAsync(TQuery, TResult?, Exception, ErgosfareContext)`

```csharp
ValueTask<TResult?> HandleAsync(TQuery query, TResult? result, Exception exception, ErgosfareContext context)
```

Handles the exception asynchronously, potentially modifying the query result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query being processed when the exception occurred. |
| `result` | `TResult` | The result produced before the exception occurred, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the (possibly modified) result that continues through the pipeline.
