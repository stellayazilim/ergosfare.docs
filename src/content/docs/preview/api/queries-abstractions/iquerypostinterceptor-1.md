---
title: "IQueryPostInterceptor<TQuery>"
description: "Represents a non-generic post-interceptor for queries in the Stella.Ergosfare pipeline."
sidebar:
  label: "IQueryPostInterceptor<TQuery>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a non-generic post-interceptor for queries in the Stella.Ergosfare pipeline.

```csharp
public interface IQueryPostInterceptor<in TQuery> : IQuery, IMessage, IAsyncPostInterceptor<IQuery>, IPostInterceptor where TQuery : IQuery
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/PostInterceptors/IQueryPostInterceptor%5BTQuery%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |

## Remarks

Post-interceptors run after the main query handler has executed. They can:

- Inspect or modify the result of the query.
- Perform logging, metrics collection, or additional side-effects.
- Support asynchronous operations via [`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-1).

Use this interface when you do not need a strongly-typed modified result,
and the interceptor should work with any [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery).
