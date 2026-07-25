---
title: "IQueryHandler<TQuery, TResult>"
description: "Represents a type-safe asynchronous handler for a query of type TQuery, producing a result of type TResult."
sidebar:
  label: "IQueryHandler<TQuery, TResult>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe asynchronous handler for a query of type `TQuery`,
producing a result of type `TResult`.

```csharp
public interface IQueryHandler<in TQuery, TResult> : IQuery, IMessage, IAsyncHandler<TQuery, TResult>, IHandler where TQuery : IQuery<TResult>
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/Handlers/IQueryHandler%5BTQuery%2CTResult%5D.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type of query being handled. Must implement [`IQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquery-1). |
| `TResult` | The type of result returned by the query. |

## Remarks

Implementing this interface allows a handler to process a query asynchronously
within the query mediation pipeline and return a strongly-typed result.

Handlers implementing this interface are automatically recognized and invoked
by the query mediator when the corresponding query type is dispatched.
