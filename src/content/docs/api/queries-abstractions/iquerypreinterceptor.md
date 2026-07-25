---
title: "IQueryPreInterceptor"
description: "Represents a non-generic pre-interceptor for queries in the Stella.Ergosfare pipeline."
sidebar:
  label: "IQueryPreInterceptor"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a non-generic pre-interceptor for queries in the Stella.Ergosfare pipeline.

```csharp
public interface IQueryPreInterceptor : IQuery, IMessage, IAsyncPreInterceptor<IQuery>, IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/PreInterceptors/IQueryPreInterceptor.cs#L20)

## Remarks

Pre-interceptors run before the main query handler is invoked. They can:

- Inspect or modify the incoming query.
- Perform validation, logging, or enrichment of the query.
- Support asynchronous operations via [`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpreinterceptor-1).

Use this interface when you do not need a strong typed modified query,
and the interceptor should work with any [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery).
