---
title: "QueryMediatorExtensions"
description: "Provides extension methods for IQueryMediator to simplify dispatching queries and stream queries with optional group filtering."
sidebar:
  label: "QueryMediatorExtensions"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Provides extension methods for [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) to simplify dispatching
queries and stream queries with optional group filtering.

```csharp
public static class QueryMediatorExtensions
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/QueryMediatorExtensions.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `QueryAsync<TResult>(IQueryMediator, IQuery<TResult>, CancellationToken)`

```csharp
public static ValueTask<TResult> QueryAsync<TResult>(this IQueryMediator queryMediator, IQuery<TResult> query, CancellationToken cancellationToken = default)
```

Dispatches a query asynchronously and returns its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of result returned by the query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `queryMediator` | [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) | The query mediator used to handle the query. |
| `query` | `IQuery<TResult>` | The query to be dispatched. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous operation.

### `QueryAsync<TResult>(IQueryMediator, IQuery<TResult>, string[], CancellationToken)`

```csharp
public static ValueTask<TResult> QueryAsync<TResult>(this IQueryMediator queryMediator, IQuery<TResult> query, string[] groups, CancellationToken cancellationToken = default)
```

Dispatches a query asynchronously and returns its result, with optional group filtering.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of result returned by the query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `queryMediator` | [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) | The query mediator used to handle the query. |
| `query` | `IQuery<TResult>` | The query to be dispatched. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | An array of groups to filter which handlers are invoked. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous operation.

### `StreamAsync<TResult>(IQueryMediator, IStreamQuery<TResult>, CancellationToken)`

```csharp
public static IAsyncEnumerable<TResult> StreamAsync<TResult>(this IQueryMediator queryMediator, IStreamQuery<TResult> query, CancellationToken cancellationToken = default)
```

Dispatches a stream query asynchronously and returns an async enumerable of results.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of results produced by the stream query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `queryMediator` | [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) | The query mediator used to handle the stream query. |
| `query` | `IStreamQuery<TResult>` | The stream query to be dispatched. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

`IAsyncEnumerable<TResult>` — An [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) producing results asynchronously.

### `StreamAsync<TResult>(IQueryMediator, IStreamQuery<TResult>, string[], CancellationToken)`

```csharp
public static IAsyncEnumerable<TResult> StreamAsync<TResult>(this IQueryMediator queryMediator, IStreamQuery<TResult> query, string[] groups, CancellationToken cancellationToken = default)
```

Dispatches a stream query asynchronously and returns an async enumerable of results,
with optional group filtering.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of results produced by the stream query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `queryMediator` | [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) | The query mediator used to handle the stream query. |
| `query` | `IStreamQuery<TResult>` | The stream query to be dispatched. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | An array of groups to filter which handlers are invoked. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

`IAsyncEnumerable<TResult>` — An [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) producing results asynchronously.
