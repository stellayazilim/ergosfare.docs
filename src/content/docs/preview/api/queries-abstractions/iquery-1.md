---
title: "IQuery<TResult>"
description: "Represents a type-safe query message that produces a result of type TResult."
sidebar:
  label: "IQuery<TResult>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe query message that produces a result of type `TResult`.

```csharp
public interface IQuery<TResult> : IQuery, IMessage
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/IQuery%5BTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of result returned by the query. |

## Remarks

This interface extends [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) and is intended for queries that return
a specific result type when handled by a query handler.

Implementing [`IQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquery-1) allows the query to be registered within
the query module and processed by type-safe query handlers and interceptors.
