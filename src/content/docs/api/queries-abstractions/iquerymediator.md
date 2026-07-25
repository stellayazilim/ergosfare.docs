---
title: "IQueryMediator"
description: "Interface Stella.Ergosfare.Queries.Abstractions.IQueryMediator in the Ergosfare API reference."
sidebar:
  label: "IQueryMediator"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

```csharp
public interface IQueryMediator : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/IQueryMediator.cs#L4)

## Methods

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, IExecutionContext, QueryMediationSettings?)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, IExecutionContext context, QueryMediationSettings? queryMediationSettings = null)
```

Executes a query under an externally owned execution context — the
nested-dispatch path: a handler opens a scope on its own context
(`using var scope = context.CreateScope();`) and passes
`scope.Context` here. The caller owns the context's lifetime;
cancellation flows from the context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The type of the result returned by the query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` | The query to be executed. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The externally owned execution context to dispatch under. |
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/api/queries-abstractions/querymediationsettings) | Optional mediation settings (groups etc.). |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, QueryMediationSettings?, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, QueryMediationSettings? queryMediationSettings = null, CancellationToken cancellationToken = default)
```

Asynchronously executes a query and returns the result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The type of the result returned by the query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` | The query to be executed. |
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/api/queries-abstractions/querymediationsettings) | Optional settings for query mediation that control aspects such as handler filtering. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation that can be used to cancel the query processing. |

**Returns**

`ValueTask<TQueryResult>` — A task representing the asynchronous operation with a result of type `TQueryResult`.

This method is used for queries that produce a single result of type `TQueryResult`.
The query is routed to its appropriate handler based on its type, and the query handling pipeline
is executed, including pre-handlers, the main handler, post-handlers, and error handlers if exceptions occur.
The result produced by the handler is returned to the caller.

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, QueryMediationSettings?, CancellationToken)`

```csharp
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, QueryMediationSettings? queryMediationSettings = null, CancellationToken cancellationToken = default)
```

Asynchronously streams the results of a query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The type of the results returned by the stream query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` | The stream query to be executed. |
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/api/queries-abstractions/querymediationsettings) | Optional settings for query mediation that control aspects such as handler filtering. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation that can be used to cancel the query processing. |

**Returns**

`IAsyncEnumerable<TQueryResult>` — An async enumerable of results of type `TQueryResult`.

This method is used for stream queries that produce a sequence of results of type
`TQueryResult`.
Stream queries are particularly useful for retrieving large datasets, implementing pagination,
or handling real-time data streams.
The query is routed to its appropriate handler based on its type, and the query handling pipeline
is executed, including pre-handlers, the main handler, post-handlers, and error handlers if exceptions occur.
The sequence of results produced by the handler is returned to the caller as an [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1),
allowing for asynchronous enumeration of the results.
