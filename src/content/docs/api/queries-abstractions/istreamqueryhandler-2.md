---
title: "IStreamQueryHandler<TQuery, TResult>"
description: "Handles queries of type TQuery by streaming TResult items back to the caller."
sidebar:
  label: "IStreamQueryHandler<TQuery, TResult>"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Handles queries of type `TQuery` by streaming
`TResult` items back to the caller.

```csharp
public interface IStreamQueryHandler<in TQuery, out TResult> : IQuery, IMessage, IStreamHandler<TQuery, TResult>, IHandler<TQuery, IAsyncEnumerable<TResult>>, IHandler where TQuery : IStreamQuery<out TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/Handlers/IStreamQueryHandler%5BTQuery%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The stream query type this handler accepts. |
| `TResult` | The type of each streamed item. |

## Remarks

Items are produced as the caller enumerates, so the handler body runs after the dispatch
call itself has returned. A stream query is served by exactly one handler.
