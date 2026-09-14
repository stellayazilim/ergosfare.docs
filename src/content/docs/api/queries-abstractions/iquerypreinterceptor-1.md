---
title: "IQueryPreInterceptor<TQuery>"
description: "Runs before the handler of a TQuery and decides which query the rest of the pipeline sees."
sidebar:
  label: "IQueryPreInterceptor<TQuery>"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Runs before the handler of a `TQuery` and decides which query the
rest of the pipeline sees.

```csharp
public interface IQueryPreInterceptor<TQuery> : IQuery, IMessage, IAsyncPreInterceptor<TQuery>, IPreInterceptor where TQuery : IQuery
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/PreInterceptors/IQueryPreInterceptor%5BTQuery%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this interceptor accepts. |

## Remarks

A pre-interceptor produces no result, so this form returns the query type itself rather
than [`object`](https://learn.microsoft.com/dotnet/api/system.object) — which is why `TQuery` is invariant here.
Returning a derived query is allowed and needs nothing extra: it is still a
`TQuery`. Use [`IQueryPreInterceptor`](/ergosfare.docs/api/queries-abstractions/iquerypreinterceptor) to accept any query
instead.

## Methods

### `HandleAsync(TQuery, ErgosfareContext)`

```csharp
ValueTask<TQuery> HandleAsync(TQuery query, ErgosfareContext context)
```

Processes `query` before its handler runs.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TQuery>` — The query the rest of the pipeline receives — either the one passed in or a replacement.
