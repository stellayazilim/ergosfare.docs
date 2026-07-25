---
title: "IQueryFinalInterceptor<TQuery, TResult>"
description: "Represents a type-safe final interceptor for queries, allowing custom logic to execute after all query handlers and other interceptors have completed."
sidebar:
  label: "IQueryFinalInterceptor<TQuery, TResult>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe final interceptor for queries, allowing custom logic
to execute after all query handlers and other interceptors have completed.

```csharp
public interface IQueryFinalInterceptor<in TQuery, in TResult> : IQuery, IMessage, IAsyncFinalInterceptor<TQuery, TResult>, IFinalInterceptor where TQuery : IQuery<in TResult>
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/FinalInterceptors/IQueryFinalInterceptor%5BTQuery%2CTResult%5D.cs#L23)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type of query being intercepted. Must implement [`IQuery<TResult>`](/ergosfare.docs/api/queries-abstractions/iquery-1). |
| `TResult` | The result type returned by the query. |

## Remarks

Implementing this interface allows final processing logic to run after the query
has been handled by all handlers and interceptors in the mediation pipeline.

This interface inherits from [`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-2),
enabling asynchronous post-processing of query results.
