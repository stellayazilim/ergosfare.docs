---
title: "IQueryFinalInterceptor"
description: "Runs once the pipeline of any query has settled, whatever its type."
sidebar:
  label: "IQueryFinalInterceptor"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Runs once the pipeline of any query has settled, whatever its type.

```csharp
public interface IQueryFinalInterceptor : IQuery, IMessage, IAsyncFinalInterceptor<IQuery>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/FinalInterceptors/IQueryFinalInterceptor.cs#L14)

## Remarks

Use this for work that applies across query types — logging, metrics, cleanup. It
observes the outcome and cannot change it, and a pipeline stopped by
`context.Abort()` runs no final interceptors. For a typed query and result,
implement [`IQueryFinalInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryfinalinterceptor-2).
