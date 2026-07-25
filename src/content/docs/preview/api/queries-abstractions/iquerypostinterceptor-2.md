---
title: "IQueryPostInterceptor<TQuery, TResult>"
description: "Represents a type-safe post-interceptor for queries with a strongly-typed result."
sidebar:
  label: "IQueryPostInterceptor<TQuery, TResult>"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe post-interceptor for queries with a strongly-typed result.
Executes after the main query handler has completed and can modify the result before
it propagates further through the pipeline.

```csharp
public interface IQueryPostInterceptor<in TQuery, TResult> : IQuery, IMessage, IAsyncPostInterceptor<TQuery, TResult>, IPostInterceptor where TQuery : IQuery<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/PostInterceptors/IQueryPostInterceptor%5BTQuery%2CTResult%5D.cs#L22)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type being intercepted. Must implement [`IQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquery-1). |
| `TResult` | The result type of the query. Also the type returned by the interceptor — for a narrower return type there is no third parameter anymore; return the base result type. |

## Remarks

`TQuery` is contravariant, matching the core
[`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-2) contract the typed dispatch
matches against. `TResult` must stay invariant: the typed member
returns it.

## Methods

### `HandleAsync(TQuery, TResult, IExecutionContext)`

```csharp
ValueTask<TResult> HandleAsync(TQuery query, TResult queryResult, IExecutionContext context)
```

Handles the post-processing of a query asynchronously.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query that was executed. |
| `queryResult` | `TResult` | The result produced by the query handler. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the (possibly modified) result that continues through the pipeline.
