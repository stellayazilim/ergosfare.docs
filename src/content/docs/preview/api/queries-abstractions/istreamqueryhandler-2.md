---
title: "IStreamQueryHandler<TQuery, TResult>"
description: "Represents a type-safe asynchronous handler for a stream query of type TQuery, producing a stream of results of type TResult."
sidebar:
  label: "IStreamQueryHandler<TQuery, TResult>"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a type-safe asynchronous handler for a stream query of type `TQuery`,
producing a stream of results of type `TResult`.

```csharp
public interface IStreamQueryHandler<in TQuery, out TResult> : IQuery, IMessage, IStreamHandler<TQuery, TResult>, IHandler<TQuery, IAsyncEnumerable<TResult>>, IHandler where TQuery : IStreamQuery<out TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/Handlers/IStreamQueryHandler%5BTQuery%2CTResult%5D.cs#L21)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type of the stream query being handled. Must implement [`IStreamQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/istreamquery-1). |
| `TResult` | The type of results produced by the stream query. |

## Remarks

Implementing this interface allows a handler to process a stream query asynchronously
and yield multiple results over time, as part of a reactive query mediation pipeline.

Handlers implementing this interface are automatically recognized and invoked
by the query mediator when the corresponding stream query type is dispatched.
