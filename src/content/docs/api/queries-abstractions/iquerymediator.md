---
title: "IQueryMediator"
description: "Executes queries against their handlers."
sidebar:
  label: "IQueryMediator"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Executes queries against their handlers.

```csharp
public interface IQueryMediator : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/IQueryMediator.cs#L13)

## Remarks

Everything a dispatch needs is passed as an argument. Only the three overloads taking
`IEnumerable<string>` groups or an [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) are
abstract; the rest are conveniences implemented in terms of those, so an implementation
writes those and inherits the others.

## Methods

### `QueryAsync<TQuery, TQueryResult>(TQuery, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, CancellationToken cancellationToken = default) where TQuery : IQuery<TQueryResult>
```

Executes `query` through its default pipeline, naming both types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query's own type. |
| `TQueryResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to execute. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TQueryResult>` — The result the handler produced.

### `QueryAsync<TQuery, TQueryResult>(TQuery, ErgosfareContext, GroupSet?)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, ErgosfareContext context, GroupSet? groups = null) where TQuery : IQuery<TQueryResult>
```

Executes `query` under a caller-owned context, naming both types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query's own type. |
| `TQueryResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to execute. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TQueryResult>` — The result the handler produced.

### `QueryAsync<TQuery, TQueryResult>(TQuery, GroupSet, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, GroupSet groups, CancellationToken cancellationToken = default) where TQuery : IQuery<TQueryResult>
```

Executes `query` naming its own type alongside its result, so the
pipeline is reached through a pair of compile-time constants instead of the query's
type being read back at run time.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query's own type. |
| `TQueryResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to execute. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TQueryResult>` — The result the handler produced.

Both type arguments have to be named: `TQueryResult` must be a
type parameter for the return type, and C# will not infer type arguments through a
constraint. That is why these overloads are additions rather than replacements —
`QueryAsync<TQueryResult>(IQuery<TQueryResult>)` stays the short
form, and a query read off a queue genuinely does not know its type until run time.

The default implementation simply forwards to the untyped call, so an existing
implementation keeps working; the benefit comes from overriding it, as
`QueryMediator` does.

The streaming members have no typed counterpart on purpose: their shape is being
reworked, and adding surface to something already scheduled to change would only have
to be undone.

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, CancellationToken cancellationToken = default)
```

Executes `query` through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` | The query to execute. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TQueryResult>` — The result the handler produced.

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, ErgosfareContext, GroupSet?)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, ErgosfareContext context, GroupSet? groups = null)
```

Executes `query` under an execution context supplied by the caller —
the shape a nested query uses.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` | The query to execute. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under, typically a child opened with `using var scope = context.CreateScope();` and passed as `scope.Context`. The caller owns its lifetime, and cancellation comes from it. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TQueryResult>` — The result the handler produced.

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, GroupSet, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Executes `query` and returns its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The result type the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` | The query to execute. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. Reusing a [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) lets the cached pipeline be matched by reference. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TQueryResult>` — The result the handler produced.

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, CancellationToken cancellationToken = default)
```

Streams the results of `query` through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The type of each streamed item. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` | The query to stream. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token for the enumeration. |

**Returns**

`IAsyncEnumerable<TQueryResult>` — The streamed results.

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, ErgosfareContext, GroupSet?)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, ErgosfareContext context, GroupSet? groups = null)
```

Streams the results of `query` under a caller-owned execution
context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The type of each streamed item. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` | The query to stream. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`IAsyncEnumerable<TQueryResult>` — The streamed results.

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, GroupSet, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Streams the results of `query`.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The type of each streamed item. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` | The query to stream. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token for the enumeration. |

**Returns**

`IAsyncEnumerable<TQueryResult>` — The streamed results.

The handler produces items as the caller enumerates them, so the pipeline runs while
the caller pulls rather than before this method returns.
