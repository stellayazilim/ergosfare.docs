---
title: "IQueryPostInterceptor"
description: "Represents a non-generic post-interceptor for queries, allowing custom logic to execute after any query handlers have been invoked."
sidebar:
  label: "IQueryPostInterceptor"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a non-generic post-interceptor for queries, allowing custom logic
to execute after any query handlers have been invoked.

```csharp
public interface IQueryPostInterceptor : IQuery, IMessage, IAsyncPostInterceptor<IQuery>, IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/PostInterceptors/IQueryPostInterceptor.cs#L23)

## Remarks

This interface is a non-generic counterpart of [`IQueryPostInterceptor<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/iquerypostinterceptor-2),
applying to all queries implementing [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery).

It inherits from [`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpostinterceptor-1), enabling asynchronous
post-processing after query execution.

Query handlers and queries implementing [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery) will automatically
recognize this interceptor in the query mediation pipeline.
