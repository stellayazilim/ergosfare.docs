---
title: "IQueryPreInterceptor<TQuery>"
description: "Represents a type-safe pre-interceptor for query messages."
sidebar:
  label: "IQueryPreInterceptor<TQuery>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe pre-interceptor for query messages. It runs before the query
handler and returns the query that continues through the pipeline — the original, or a
rewritten one.

```csharp
public interface IQueryPreInterceptor<TQuery> : IQuery, IMessage, IAsyncPreInterceptor<TQuery>, IPreInterceptor where TQuery : IQuery
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/PreInterceptors/IQueryPreInterceptor%5BTQuery%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type of query to be intercepted. Must implement [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery). |

## Remarks

A pre-interceptor carries no result, so the single-parameter form returns the query type
directly rather than [`object`](https://learn.microsoft.com/dotnet/api/system.object). Use the non-generic
[`IQueryPreInterceptor`](/ergosfare.docs/api/queries-abstractions/iquerypreinterceptor) to intercept any query, or
[`IQueryPreInterceptor<TQuery, TModifiedQuery>`](/ergosfare.docs/api/queries-abstractions/iquerypreinterceptor-2) to return a different, derived
query type. `TQuery` is invariant because it is returned.

## Methods

### `HandleAsync(TQuery, ErgosfareContext)`

```csharp
ValueTask<TQuery> HandleAsync(TQuery query, ErgosfareContext context)
```

Handles the query before its handler runs and returns the query that continues through
the pipeline (the original, or a rewritten instance).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to intercept. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<TQuery>`
