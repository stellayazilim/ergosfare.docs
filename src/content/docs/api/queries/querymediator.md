---
title: "QueryMediator"
description: "The default implementation of IQueryMediator."
sidebar:
  label: "QueryMediator"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries`](/ergosfare.docs/api/queries)  
**Assembly:** `Stella.Ergosfare.Queries.dll`

The default implementation of [`IQueryMediator`](/ergosfare.docs/api/queries-abstractions/iquerymediator).
Handles both standard queries and streaming queries using the internal message mediation pipeline,
supporting pre/post/final interceptors and result adapters.

```csharp
public class QueryMediator : IQueryMediator, IMessage
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Queries/QueryMediator.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IQueryMediator`](/ergosfare.docs/api/queries-abstractions/iquerymediator), [`IMessage`](/ergosfare.docs/api/core-abstractions/imessage)

## Constructors

### `QueryMediator(ActualTypeOrFirstAssignableTypeMessageResolveStrategy, IMessageMediator)`

```csharp
public QueryMediator(ActualTypeOrFirstAssignableTypeMessageResolveStrategy messageResolveStrategy, IMessageMediator messageMediator)
```

The default implementation of [`IQueryMediator`](/ergosfare.docs/api/queries-abstractions/iquerymediator).
Handles both standard queries and streaming queries using the internal message mediation pipeline,
supporting pre/post/final interceptors and result adapters.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageResolveStrategy` | [`ActualTypeOrFirstAssignableTypeMessageResolveStrategy`](/ergosfare.docs/api/core-abstractions-strategies/actualtypeorfirstassignabletypemessageresolvestrategy) |  |
| `messageMediator` | [`IMessageMediator`](/ergosfare.docs/api/core-abstractions/imessagemediator) |  |

## Methods

### `QueryAsync<TResult>(IQuery<TResult>, IExecutionContext, QueryMediationSettings?)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, IExecutionContext context, QueryMediationSettings? queryMediationSettings = null)
```

Executes a query under an externally owned execution context — the nested-dispatch
path: a handler opens a scope on its own context and passes the child here. The
caller owns the context's lifetime; cancellation flows from the context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` |  |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) |  |
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/api/queries-abstractions/querymediationsettings) |  |

**Returns**

`ValueTask<TResult>`

### `QueryAsync<TResult>(IQuery<TResult>, QueryMediationSettings?, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, QueryMediationSettings? queryMediationSettings = null, CancellationToken cancellationToken = default)
```

Executes a query and returns a single result of type `TResult`.
The query is processed through the mediation pipeline, including pre/post/final interceptors.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` | The query message to process. |
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/api/queries-abstractions/querymediationsettings) | Optional settings to influence pipeline execution, such as filters and custom items. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | A cancellation token for async execution. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous execution of the query.

### `StreamAsync<TResult>(IStreamQuery<TResult>, QueryMediationSettings?, CancellationToken)`

```csharp
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, QueryMediationSettings? queryMediationSettings = null, CancellationToken cancellationToken = default)
```

Executes a streaming query and returns an asynchronous enumerable of results.
The query is processed through the streaming pipeline, supporting interceptors and result adapters.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of elements produced by the stream query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` | The streaming query to execute. |
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/api/queries-abstractions/querymediationsettings) | Optional settings to influence pipeline execution, such as filters and custom items. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | A cancellation token for async streaming. |

**Returns**

`IAsyncEnumerable<TResult>` — An [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) representing the results of the streaming query.
