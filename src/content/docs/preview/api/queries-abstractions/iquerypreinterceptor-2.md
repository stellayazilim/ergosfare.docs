---
title: "IQueryPreInterceptor<TQuery, TModifiedQuery>"
description: "Represents a type-safe pre-interceptor for queries in the Stella.Ergosfare pipeline."
sidebar:
  label: "IQueryPreInterceptor<TQuery, TModifiedQuery>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe pre-interceptor for queries in the Stella.Ergosfare pipeline.

```csharp
public interface IQueryPreInterceptor<in TQuery, TModifiedQuery> : IQuery, IMessage, IAsyncPreInterceptor<TQuery>, IPreInterceptor where TQuery : IQuery where TModifiedQuery : TQuery
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/PreInterceptors/IQueryPreInterceptor%5BTQuery%2CTQuery%5D.cs#L27)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type of query to intercept. Must implement [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery). |
| `TModifiedQuery` | The type of query that may be returned after interception. Must derive from `TQuery`. |

## Remarks

Pre-interceptors run before the main query handler is invoked. They can:

- Modify the incoming query and return a new instance of `TModifiedQuery`.
- Perform validation, logging, or enrichment of the query.
- Support asynchronous operations via [`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpreinterceptor-1).

Use this generic version if you want strong typing for the returned modified query,
avoiding casts from [`object`](https://learn.microsoft.com/dotnet/api/system.object).

## Methods

### `HandleAsync(TQuery, IExecutionContext)`

```csharp
ValueTask<TModifiedQuery?> HandleAsync(TQuery query, IExecutionContext executionContext)
```

Intercepts the specified query before it reaches the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The incoming query to intercept. |
| `executionContext` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The current execution context for the pipeline. |

**Returns**

`ValueTask<TModifiedQuery>` — A task returning a modified query of type `TModifiedQuery`. May return `null` if no modification is made.
