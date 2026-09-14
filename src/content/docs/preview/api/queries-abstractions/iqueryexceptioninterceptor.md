---
title: "IQueryExceptionInterceptor"
description: "Handles failures raised while dispatching any query, whatever its type."
sidebar:
  label: "IQueryExceptionInterceptor"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Handles failures raised while dispatching any query, whatever its type.

```csharp
public interface IQueryExceptionInterceptor : IQuery, IMessage, IAsyncExceptionInterceptor<IQuery>, IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptor.cs#L15)

## Remarks

Because it accepts every query, this contract sees the query as [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) and
its result as [`object`](https://learn.microsoft.com/dotnet/api/system.object). Running is what marks the failure handled, so an
interceptor this broad handles everything it is registered for — use
[`IQueryExceptionInterceptorFor<TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-1) to narrow it by failure type, or
[`IQueryExceptionInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptor-2) for a typed result.
