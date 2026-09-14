---
title: "IQueryFinalInterceptor<TQuery, TResult>"
description: "Runs once the pipeline of a TQuery has settled, reading its result as a TResult."
sidebar:
  label: "IQueryFinalInterceptor<TQuery, TResult>"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Runs once the pipeline of a `TQuery` has settled, reading its
result as a `TResult`.

```csharp
public interface IQueryFinalInterceptor<in TQuery, in TResult> : IQuery, IMessage, IAsyncFinalInterceptor<TQuery, TResult>, IFinalInterceptor where TQuery : IQuery<in TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/FinalInterceptors/IQueryFinalInterceptor%5BTQuery%2CTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this interceptor accepts. |
| `TResult` | The result type the query declares. |

## Remarks

It runs after the pre-, post- and exception stages and sees the query, the result and
any failure, but cannot change the outcome. A pipeline stopped by `context.Abort()`
runs no final interceptors.
