---
title: "IQueryExceptionInterceptor"
description: "Represents a query exception interceptor that can handle multiple query types in a non-generic, non-type-safe manner."
sidebar:
  label: "IQueryExceptionInterceptor"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a query exception interceptor that can handle multiple query types in a non-generic, non-type-safe manner.

```csharp
public interface IQueryExceptionInterceptor : IQuery, IMessage, IAsyncExceptionInterceptor<IQuery>, IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptor.cs#L17)

## Remarks

This interceptor is useful when you want a single exception interceptor to run for multiple query types
without defining separate generic implementations.

Implementations will receive queries as [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery) and results as [`object`](https://learn.microsoft.com/dotnet/api/system.object).
For scenarios requiring type-safe handling of a specific query type and result type,
consider using [`IQueryExceptionInterceptor<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/iqueryexceptioninterceptor-2) instead.
