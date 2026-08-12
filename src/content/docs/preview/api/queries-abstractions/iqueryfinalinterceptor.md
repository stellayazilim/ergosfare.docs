---
title: "IQueryFinalInterceptor"
description: "Represents a non-generic final interceptor for queries, allowing custom logic to execute after all query handlers and other interceptors have completed."
sidebar:
  label: "IQueryFinalInterceptor"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a non-generic final interceptor for queries, allowing custom logic
to execute after all query handlers and other interceptors have completed.

```csharp
public interface IQueryFinalInterceptor : IQuery, IMessage, IAsyncFinalInterceptor<IQuery>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/FinalInterceptors/IQueryFinalInterceptor.cs#L23)

## Remarks

This interface applies to all queries implementing [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery).

It inherits from the result-agnostic [`IAsyncFinalInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncfinalinterceptor-1),
enabling asynchronous final processing of queries after they are dispatched to their
handlers. The result-agnostic base is deliberate: a result-typed base (the previous
`IAsyncFinalInterceptor<IQuery, object>`) is invisible to the pipeline's
pattern match whenever the query result is a value type, so the final stage failed
with [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) for such queries the moment it ran.
For a strongly-typed result use [`IQueryFinalInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryfinalinterceptor-2).
