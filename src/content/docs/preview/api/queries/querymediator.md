---
title: "QueryMediator"
description: "The default implementation of IQueryMediator."
sidebar:
  label: "QueryMediator"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries`](/ergosfare.docs/preview/api/queries)  
**Assembly:** `Stella.Ergosfare.Queries.dll`

The default implementation of [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator).
Handles both standard queries and streaming queries using the internal message mediation pipeline,
supporting pre/post/final interceptors and result adapters.

```csharp
public class QueryMediator : IQueryMediator, IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries/QueryMediator.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator), [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage)

## Constructors

### `QueryMediator(ActualTypeOrFirstAssignableTypeMessageResolveStrategy, IMessageMediator)`

```csharp
public QueryMediator(ActualTypeOrFirstAssignableTypeMessageResolveStrategy messageResolveStrategy, IMessageMediator messageMediator)
```

Wraps an existing [`IMessageMediator`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator) — the original construction shape,
kept for direct construction and foreign mediator implementations.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageResolveStrategy` | [`ActualTypeOrFirstAssignableTypeMessageResolveStrategy`](/ergosfare.docs/preview/api/core-abstractions-strategies/actualtypeorfirstassignabletypemessageresolvestrategy) |  |
| `messageMediator` | [`IMessageMediator`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator) |  |

### `QueryMediator(MessageDispatchEngine, IServiceProvider, ActualTypeOrFirstAssignableTypeMessageResolveStrategy)`

```csharp
public QueryMediator(MessageDispatchEngine engine, IServiceProvider serviceProvider, ActualTypeOrFirstAssignableTypeMessageResolveStrategy messageResolveStrategy)
```

Engine-backed construction: queries go straight to the process-wide engine with
`serviceProvider` as the handler-resolution scope, making the
facade the only object built per resolution.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `engine` | [`MessageDispatchEngine`](/ergosfare.docs/preview/api/core/messagedispatchengine) | The singleton dispatch engine. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this facade serves. |
| `messageResolveStrategy` | [`ActualTypeOrFirstAssignableTypeMessageResolveStrategy`](/ergosfare.docs/preview/api/core-abstractions-strategies/actualtypeorfirstassignabletypemessageresolvestrategy) | Resolve strategy used by the streaming path. |

## Methods

### `QueryAsync<TResult>(IQuery<TResult>, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Executes a query under a canonical group filter — no settings object, and with a
reused [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) the grouped executor lookup matches on a single
reference check. An empty set routes to the group-less fast lane.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

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
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) |  |
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/preview/api/queries-abstractions/querymediationsettings) |  |

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
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/preview/api/queries-abstractions/querymediationsettings) | Optional settings to influence pipeline execution, such as filters and custom items. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | A cancellation token for async execution. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous execution of the query.

### `StreamAsync<TResult>(IStreamQuery<TResult>, GroupSet, CancellationToken)`

```csharp
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Streaming counterpart of
[`QueryMediator.QueryAsync<TResult>(IQuery<TResult>, GroupSet, CancellationToken)`](/ergosfare.docs/preview/api/queries/querymediator#queryasynctresultiquerytresult-groupset-cancellationtoken):
the group filter flows into the invoker's plan slot directly, with no settings
object on the way.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TResult>`

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
| `queryMediationSettings` | [`QueryMediationSettings`](/ergosfare.docs/preview/api/queries-abstractions/querymediationsettings) | Optional settings to influence pipeline execution, such as filters and custom items. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | A cancellation token for async streaming. |

**Returns**

`IAsyncEnumerable<TResult>` — An [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) representing the results of the streaming query.
