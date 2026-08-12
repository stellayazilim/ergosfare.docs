---
title: "IQueryPostInterceptor<TQuery>"
description: "Represents a result-agnostic post-interceptor for a specific query type in the Stella.Ergosfare pipeline."
sidebar:
  label: "IQueryPostInterceptor<TQuery>"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a result-agnostic post-interceptor for a specific query type in the
Stella.Ergosfare pipeline.

```csharp
public interface IQueryPostInterceptor<in TQuery> : IQuery, IMessage, IAsyncPostInterceptor<TQuery>, IPostInterceptor where TQuery : IQuery
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/PostInterceptors/IQueryPostInterceptor%5BTQuery%5D.cs#L23)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |

## Remarks

Post-interceptors run after the main query handler has executed. They can:

- Inspect or modify the result of the query.
- Perform logging, metrics collection, or additional side-effects.
- Support asynchronous operations via [`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-1).

Use this interface when you do not need a strongly-typed result but want the
interceptor scoped to `TQuery`. The base previously closed over
[`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) instead of `TQuery`, which registered the
interceptor for every query in the application rather than the targeted one. Use the
non-generic [`IQueryPostInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor) to intercept all queries.
