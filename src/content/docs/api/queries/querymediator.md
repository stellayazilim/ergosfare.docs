---
title: "QueryMediator"
description: "The query mediator an application resolves: it holds the scope it was resolved from and hands every query and stream to the container's dispatch engine."
sidebar:
  label: "QueryMediator"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries`](/ergosfare.docs/api/queries)  
**Assembly:** `Stella.Ergosfare.Queries.dll`

The query mediator an application resolves: it holds the scope it was resolved from and
hands every query and stream to the container's dispatch engine.

```csharp
public class QueryMediator : IQueryMediator, IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries/QueryMediator.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IQueryMediator`](/ergosfare.docs/api/queries-abstractions/iquerymediator), [`IMessage`](/ergosfare.docs/api/core-abstractions/imessage)

## Remarks

The engine is shared across the process and this facade is the only object built per
resolution.

## Methods

### `QueryAsync<TQuery, TResult>(TQuery, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, CancellationToken cancellationToken = default) where TQuery : IQuery<TResult>
```

Executes `query` through its default pipeline, naming both types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query's own type. |
| `TResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to execute. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `QueryAsync<TQuery, TResult>(TQuery, ErgosfareContext, GroupSet?)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, ErgosfareContext context, GroupSet? groups = null) where TQuery : IQuery<TResult>
```

Executes `query` under a caller-owned context, naming both types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query's own type. |
| `TResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to execute. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `QueryAsync<TQuery, TResult>(TQuery, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, GroupSet groups, CancellationToken cancellationToken = default) where TQuery : IQuery<TResult>
```

Executes `query` naming both its own type and its result, so the
pipeline is found through a static generic field rather than a lookup on the query's
runtime type.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query's own type. |
| `TResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to execute. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `QueryAsync<TResult>(IQuery<TResult>, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, CancellationToken cancellationToken = default)
```

Executes `query` through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` | The query to execute. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

The conveniences are declared on this class as well as on the interface. A call made
through the concrete type does not find a default interface method, so declaring them
only on the interface would leave those calls without an overload to bind to.

### `QueryAsync<TResult>(IQuery<TResult>, ErgosfareContext, GroupSet?)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, ErgosfareContext context, GroupSet? groups = null)
```

Executes `query` under an execution context supplied by the caller —
the shape a nested query uses.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` | The query to execute. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under, typically a child opened with `using var scope = context.CreateScope();` and passed as `scope.Context`. The caller owns its lifetime, and cancellation comes from it. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `QueryAsync<TResult>(IQuery<TResult>, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Executes `query` and returns its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` | The query to execute. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. Reusing a [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) lets the cached pipeline be matched by reference. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `StreamAsync<TResult>(IStreamQuery<TResult>, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, CancellationToken cancellationToken = default)
```

Streams the results of `query` through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of each streamed item. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` | The query to stream. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token for the enumeration. |

**Returns**

`IAsyncEnumerable<TResult>` — The streamed results.

### `StreamAsync<TResult>(IStreamQuery<TResult>, ErgosfareContext, GroupSet?)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, ErgosfareContext context, GroupSet? groups = null)
```

Streams the results of `query` under a caller-owned execution
context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` | The query to stream. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`IAsyncEnumerable<TResult>` — The streamed results.

### `StreamAsync<TResult>(IStreamQuery<TResult>, GroupSet, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Streams the results of `query`.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` | The query to stream. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token for the enumeration. |

**Returns**

`IAsyncEnumerable<TResult>` — The streamed results.

The handler produces items as the caller enumerates them, so the pipeline runs while
the caller pulls rather than before this method returns.
