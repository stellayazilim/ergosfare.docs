---
title: "IQueryFinalInterceptor"
description: "Represents a non-generic final interceptor for queries, allowing custom logic to execute after all query handlers and other interceptors have completed."
sidebar:
  label: "IQueryFinalInterceptor"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a non-generic final interceptor for queries, allowing custom logic
to execute after all query handlers and other interceptors have completed.

```csharp
public interface IQueryFinalInterceptor : IQuery, IMessage, IAsyncFinalInterceptor<IQuery, object>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/FinalInterceptors/IQueryFinalInterceptor.cs#L23)

## Remarks

This interface is a non-generic version of IQueryFinalInterceptor&lt;TQuery>,
applying to all queries implementing [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery).

It inherits from [`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncfinalinterceptor-2), enabling
asynchronous final processing of queries after they are dispatched to their handlers.

Query handlers and messages that implement [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) will recognize
this interceptor automatically in the query mediation pipeline.
