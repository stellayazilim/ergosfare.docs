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

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries/QueryMediator.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator), [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage)

## Constructors

### `QueryMediator(MessageDispatchEngine, IServiceProvider)`

```csharp
public QueryMediator(MessageDispatchEngine engine, IServiceProvider serviceProvider)
```

Queries go straight to the process-wide engine with
`serviceProvider` as the handler-resolution scope, making the
facade the only object built per resolution.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `engine` | [`MessageDispatchEngine`](/ergosfare.docs/preview/api/core/messagedispatchengine) | The singleton dispatch engine. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this facade serves. |

## Methods

### `QueryAsync<TQuery, TResult>(TQuery, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, CancellationToken cancellationToken = default) where TQuery : IQuery<TResult>
```

Typed query through the default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `QueryAsync<TQuery, TResult>(TQuery, ErgosfareContext, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, ErgosfareContext context, IEnumerable<string>? groups = null) where TQuery : IQuery<TResult>
```

Typed counterpart of the context query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `QueryAsync<TQuery, TResult>(TQuery, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, GroupSet groups, CancellationToken cancellationToken = default) where TQuery : IQuery<TResult>
```

Typed counterpart of the canonical group-filter query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `QueryAsync<TQuery, TResult>(TQuery, IEnumerable<string>?, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, IEnumerable<string>? groups, CancellationToken cancellationToken) where TQuery : IQuery<TResult>
```

Typed query: both the query's own type and its result reach the engine as type
arguments, so the executor is a static generic field read instead of a lookup keyed
by the query's run-time type.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

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

### `QueryAsync<TQuery, TResult>(TQuery, string[], CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TQuery, TResult>(TQuery query, string[] groups, CancellationToken cancellationToken = default) where TQuery : IQuery<TResult>
```

Typed counterpart of the array group-filter query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `QueryAsync<TResult>(IQuery<TResult>, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, CancellationToken cancellationToken = default)
```

Executes a query through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

The conveniences are declared here as well as on the interface. They used to be
extension methods, which a concrete-typed receiver finds; a default interface method is
not, so carrying them only on the interface would have broken every call made through
this class.

### `QueryAsync<TResult>(IQuery<TResult>, ErgosfareContext, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Executes under an externally owned execution context — the nested-dispatch path: a
handler opens a scope on its own context (`using var scope = context.CreateScope();`)
and passes `scope.Context` here. The caller owns the context's lifetime;
cancellation flows from the context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `QueryAsync<TResult>(IQuery<TResult>, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Executes under a canonical group filter; an empty set routes to the group-less lane.

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

### `QueryAsync<TResult>(IQuery<TResult>, IEnumerable<string>?, CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Executes a query and returns its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` | The query to execute. |
| `groups` | `IEnumerable<string>` | The group filter, or `null` for the default pipeline. A reused [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) matches the cached pipeline on a single reference check. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

`ValueTask<TResult>`

### `QueryAsync<TResult>(IQuery<TResult>, string[], CancellationToken)`

```csharp
public ValueTask<TResult> QueryAsync<TResult>(IQuery<TResult> query, string[] groups, CancellationToken cancellationToken = default)
```

Executes under a group filter given as a plain array.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IQuery<TResult>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `StreamAsync<TResult>(IStreamQuery<TResult>, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, CancellationToken cancellationToken = default)
```

Streams a query through its default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TResult>`

### `StreamAsync<TResult>(IStreamQuery<TResult>, ErgosfareContext, IEnumerable<string>?)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Streams under a caller-owned context, the way items reach and leave a stream.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`IAsyncEnumerable<TResult>`

### `StreamAsync<TResult>(IStreamQuery<TResult>, GroupSet, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, GroupSet groups, CancellationToken cancellationToken = default)
```

Streams under a canonical group filter.

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

### `StreamAsync<TResult>(IStreamQuery<TResult>, IEnumerable<string>?, CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Streams the results of a query.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TResult>`

The sequence is produced by the handler and enumerated by the caller, so the pipeline
runs as the caller pulls rather than before this call returns.

### `StreamAsync<TResult>(IStreamQuery<TResult>, string[], CancellationToken)`

```csharp
[Obsolete("Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands.")]
public IAsyncEnumerable<TResult> StreamAsync<TResult>(IStreamQuery<TResult> query, string[] groups, CancellationToken cancellationToken = default)
```

Streams under a group filter given as a plain array.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `IStreamQuery<TResult>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TResult>`
