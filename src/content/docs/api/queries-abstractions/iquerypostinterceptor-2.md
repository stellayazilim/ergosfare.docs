---
title: "IQueryPostInterceptor<TQuery, TResult>"
description: "Runs after the handler of a TQuery and decides what result the caller receives."
sidebar:
  label: "IQueryPostInterceptor<TQuery, TResult>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Runs after the handler of a `TQuery` and decides what result the
caller receives.

```csharp
public interface IQueryPostInterceptor<in TQuery, TResult> : IQuery, IMessage, IAsyncPostInterceptor<TQuery, TResult>, IPostInterceptor where TQuery : IQuery<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/PostInterceptors/IQueryPostInterceptor%5BTQuery%2CTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this interceptor accepts. |
| `TResult` | The result type the query declares. |

## Remarks

`TQuery` is contravariant, so an interceptor written against a base
query type also runs for the queries derived from it, while
`TResult` stays invariant because it is returned.

## Methods

### `HandleAsync(TQuery, TResult, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TQuery query, TResult queryResult, ErgosfareContext context)
```

Processes the result of handling `query`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query that was handled. |
| `queryResult` | `TResult` | The result as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TResult>` — The result the rest of the pipeline receives — either the one passed in or a replacement.
