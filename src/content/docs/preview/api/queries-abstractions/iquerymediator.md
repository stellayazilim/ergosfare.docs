---
title: "IQueryMediator"
description: "Represents the mediator interface for executing queries within the application."
sidebar:
  label: "IQueryMediator"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents the mediator interface for executing queries within the application.

```csharp
public interface IQueryMediator : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/IQueryMediator.cs#L14)

## Remarks

Everything a dispatch can be told is a parameter. A settings object used to carry the
same two things, and carrying them that way meant allocating one per dispatch and
reading it at dispatch time — a shape nothing can be compiled from. The conveniences
below are default implementations over the full calls, so an implementation writes
four methods and inherits the rest.

## Methods

### `QueryAsync<TQuery, TQueryResult>(TQuery, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, CancellationToken cancellationToken = default) where TQuery : IQuery<TQueryResult>
```

Typed query through the default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQuery, TQueryResult>(TQuery, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, ErgosfareContext context, IEnumerable<string>? groups = null) where TQuery : IQuery<TQueryResult>
```

Typed counterpart of the context query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQuery, TQueryResult>(TQuery, GroupSet, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, GroupSet groups, CancellationToken cancellationToken = default) where TQuery : IQuery<TQueryResult>
```

Typed counterpart of the canonical group-filter query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQuery, TQueryResult>(TQuery, IEnumerable<string>?, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, IEnumerable<string>? groups, CancellationToken cancellationToken) where TQuery : IQuery<TQueryResult>
```

Executes a query whose own type is named alongside its result, so the dispatch
reaches its pipeline through a compile-time constant pair rather than reading the
query's type back at run time.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query's own type. |
| `TQueryResult` | The result the query declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TQueryResult>`

Every other lane already takes the message as its type argument; this one could
    not, because `TQueryResult` has to be a type parameter for
    the return type and C# does not infer type arguments through constraints. Naming
    both is the price, and it is why these are additions rather than replacements:
    `QueryAsync<TQueryResult>(IQuery<TQueryResult>)` stays the terse
    form, and executing a query read off a queue is a legitimate shape whose
    concrete type genuinely is a run-time fact.

    Default implementations over the untyped calls, so an existing implementation
    keeps compiling and simply forwards. What is gained is gained by overriding
    them — `QueryMediator` does.

    The streaming members are deliberately left untyped: their shape is under
    revision, and adding a surface to something scheduled to change is work that
    has to be undone.

### `QueryAsync<TQuery, TQueryResult>(TQuery, string[], CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQuery, TQueryResult>(TQuery query, string[] groups, CancellationToken cancellationToken = default) where TQuery : IQuery<TQueryResult>
```

Typed counterpart of the array group-filter query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, CancellationToken cancellationToken = default)
```

Executes a query through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Executes under an externally owned execution context — the nested-dispatch path: a
handler opens a scope on its own context (`using var scope = context.CreateScope();`)
and passes `scope.Context` here. The caller owns the context's lifetime;
cancellation flows from the context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, GroupSet, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Executes under a canonical group filter. Define the set once, statically, and the
cached pipeline matches it on a single reference check; [`GroupSet.Empty`](/ergosfare.docs/preview/api/core-abstractions/groupset#empty)
dispatches the default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, IEnumerable<string>?, CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Executes a query and returns its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` | The type of the result returned by the query. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` | The query to execute. |
| `groups` | `IEnumerable<string>` | The group filter, or `null` for the default pipeline. A reused [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) matches the cached pipeline on a single reference check. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

`ValueTask<TQueryResult>`

### `QueryAsync<TQueryResult>(IQuery<TQueryResult>, string[], CancellationToken)`

```csharp
ValueTask<TQueryResult> QueryAsync<TQueryResult>(IQuery<TQueryResult> query, string[] groups, CancellationToken cancellationToken = default)
```

Executes under a group filter given as a plain array.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TQueryResult>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TQueryResult>`

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, CancellationToken cancellationToken = default)
```

Streams a query through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TQueryResult>`

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, ErgosfareContext, IEnumerable<string>?)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Streams under a caller-owned context, the way items reach and leave a stream.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`IAsyncEnumerable<TQueryResult>`

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, GroupSet, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Streams under a canonical group filter.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TQueryResult>`

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, IEnumerable<string>?, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Streams the results of a query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TQueryResult>`

The sequence is produced by the handler and enumerated by the caller, so the pipeline
runs as the caller pulls rather than before this call returns.

### `StreamAsync<TQueryResult>(IStreamQuery<TQueryResult>, string[], CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
IAsyncEnumerable<TQueryResult> StreamAsync<TQueryResult>(IStreamQuery<TQueryResult> query, string[] groups, CancellationToken cancellationToken = default)
```

Streams under a group filter given as a plain array.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQueryResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TQueryResult>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TQueryResult>`
