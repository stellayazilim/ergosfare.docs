---
title: "IQueryHandler<TQuery, TResult>"
description: "Handles queries of type TQuery and returns the TResult they declare."
sidebar:
  label: "IQueryHandler<TQuery, TResult>"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Handles queries of type `TQuery` and returns the
`TResult` they declare.

```csharp
public interface IQueryHandler<in TQuery, TResult> : IQuery, IMessage, IAsyncHandler<TQuery, TResult>, IHandler where TQuery : IQuery<TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/Handlers/IQueryHandler%5BTQuery%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this handler accepts. |
| `TResult` | The result type the query declares. |

## Remarks

A query is served by exactly one handler, so registering two for the same query type
fails the dispatch. Registration finds this handler through the contract itself — there
is nothing to wire up by hand.
