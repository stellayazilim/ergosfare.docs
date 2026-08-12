---
title: "IStreamQuery<TResult>"
description: "Represents a stream query message that produces multiple results of type TResult over time."
sidebar:
  label: "IStreamQuery<TResult>"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a stream query message that produces multiple results of type `TResult` over time.

```csharp
public interface IStreamQuery<out TResult> : IQuery, IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/IStreamQuery%5BTResult%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of results produced by the stream query. |

## Remarks

This interface extends [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery) and is intended for reactive or streaming scenarios,
where the query yields multiple results asynchronously instead of a single value.

Implementing [`IStreamQuery<TResult>`](/ergosfare.docs/api/queries-abstractions/istreamquery-1) allows the query to be registered within
the query module and handled by [`IStreamQueryHandler<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/istreamqueryhandler-2) implementations.
