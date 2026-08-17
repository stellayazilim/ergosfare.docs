---
title: "MessageDispatchEngine"
description: "The scope-free dispatch engine behind every mediator facade: the pipeline-executor lookup, pooled execution context, and completion handling of the IMessageM…"
sidebar:
  label: "MessageDispatchEngine"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core`](/ergosfare.docs/preview/api/core)  
**Assembly:** `Stella.Ergosfare.Core.dll`

The scope-free dispatch engine behind every mediator facade: the pipeline-executor
lookup, pooled execution context, and completion handling of the
[`IMessageMediator`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator) executor path, with the calling scope's provider supplied
per call instead of being captured per instance. One process-wide singleton serves every
scope, so resolving an engine-backed facade builds exactly one object per resolution.

```csharp
public sealed class MessageDispatchEngine
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core/MessageDispatchEngine.cs#L20)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Construction is internal: the engine only makes sense wired to the process-wide
`PipelineExecutorCache` and dependencies factory that the DI registration
supplies. Dispatch behavior matches [`IMessageMediator`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator)'s executor overloads
exactly — the mediator delegates here, passing its own captured provider.

## Methods

### `BroadcastAsync(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public ValueTask BroadcastAsync(object message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null)
```

Broadcasts under an externally owned context — the nested-publish path. The caller owns
the context's lifetime, so nothing is rented and nothing is returned.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `BroadcastAsync(object, IServiceProvider, CancellationToken, IEnumerable<string>?)`

```csharp
public ValueTask BroadcastAsync(object message, IServiceProvider serviceProvider, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Broadcasts a message to every handler of its pipeline, renting a pooled context for
the delivery. The publishing counterpart of [`MessageDispatchEngine.DispatchAsync(object, IServiceProvider, CancellationToken, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core/messagedispatchengine#dispatchasyncobject-iserviceprovider-cancellationtoken-ienumerablestring),
and the same shape: find this container's pipeline for the type, run it, return the
context inline when the delivery completed synchronously.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message to broadcast. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The scope provider handlers resolve against. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the delivery. |
| `groups` | `IEnumerable<string>` | Optional group filters applied to the pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `BroadcastAsync<TMessage>(TMessage, IServiceProvider, CancellationToken, IEnumerable<string>?)`

```csharp
public ValueTask BroadcastAsync<TMessage>(TMessage message, IServiceProvider serviceProvider, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null) where TMessage : notnull
```

Typed broadcast: when the compile-time `TMessage` is the message's
runtime type (the overwhelmingly common concrete-typed publish), the pipeline comes
from a static-generic slot instead of the type-keyed dictionary. A base-typed generic
call falls back to resolving by the runtime type.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchAsync(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public ValueTask DispatchAsync(object message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null)
```

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchAsync(object, IServiceProvider, CancellationToken, IEnumerable<string>?)`

```csharp
public ValueTask DispatchAsync(object message, IServiceProvider serviceProvider, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Dispatches a void message through its cached pipeline executor, resolving handlers
against `serviceProvider` — the caller's scope.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message to dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The scope provider handlers resolve against. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the dispatch. |
| `groups` | `IEnumerable<string>` | Optional group filters applied to the pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchAsync<TMessage, TResult>(TMessage, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> DispatchAsync<TMessage, TResult>(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null) where TMessage : IMessage
```

Typed counterpart of the context result dispatch. The caller owns the context, so
nothing is rented and nothing is returned.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `DispatchAsync<TMessage, TResult>(TMessage, IServiceProvider, CancellationToken, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> DispatchAsync<TMessage, TResult>(TMessage message, IServiceProvider serviceProvider, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null) where TMessage : IMessage
```

Typed result dispatch: the message is the type argument, not an `object` whose
type is read back per call. What that removes is the whole lookup — the
`GetType()`, the `(message, result)` tuple hash, the slot refresh, and the
root-table walk behind them — leaving a static generic field read the JIT and Native
AOT both resolve to a direct static access.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The compile-time message type. |
| `TResult` | The expected result type of the message. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

Safe to overload rather than name apart, unlike [`MessageDispatchEngine.DispatchVoidAsync<TMessage>(TMessage, IServiceProvider, CancellationToken)`](/ergosfare.docs/preview/api/core/messagedispatchengine#dispatchvoidasynctmessagetmessage-iserviceprovider-cancellationtoken):
`TResult` appears only in the constraint the callers apply, so it
cannot be inferred and this member never joins a candidate set the caller did not ask
for by naming both arguments.

The runtime-type guard stays for the same reason the void lane keeps one: naming a
base type as `TMessage` is legal, and the pipeline that runs is
the runtime type's.

### `DispatchAsync<TResult>(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> DispatchAsync<TResult>(object message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null)
```

Result-producing counterpart of
[`MessageDispatchEngine.DispatchAsync(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core/messagedispatchengine#dispatchasyncobject-ergosfarecontext-iserviceprovider-ienumerablestring).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the message. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `DispatchAsync<TResult>(object, IServiceProvider, CancellationToken, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> DispatchAsync<TResult>(object message, IServiceProvider serviceProvider, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Result-producing counterpart of
[`MessageDispatchEngine.DispatchAsync(object, IServiceProvider, CancellationToken, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core/messagedispatchengine#dispatchasyncobject-iserviceprovider-cancellationtoken-ienumerablestring).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the message. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `DispatchVoidAsync<TMessage>(TMessage, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public ValueTask DispatchVoidAsync<TMessage>(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null) where TMessage : IMessage
```

Dispatches a void message under a caller-owned execution context (typically a
scope's child): the caller controls the context's lifetime, so nothing is rented or
returned here.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to dispatch. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The externally owned execution context. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The scope provider handlers resolve against. |
| `groups` | `IEnumerable<string>` | Optional group filters applied to the pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchVoidAsync<TMessage>(TMessage, IServiceProvider, CancellationToken)`

```csharp
public ValueTask DispatchVoidAsync<TMessage>(TMessage message, IServiceProvider serviceProvider, CancellationToken cancellationToken = default) where TMessage : IMessage
```

Typed void dispatch: when the compile-time `TMessage` is the
message's runtime type (the overwhelmingly common concrete-typed call), the
executor comes from a static-generic holder instead of the type-keyed dictionary —
the last lookup on the group-less hot path. A base-typed generic call falls back to
resolving by the runtime type, so dispatch semantics are identical to
[`MessageDispatchEngine.DispatchAsync(object, IServiceProvider, CancellationToken, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core/messagedispatchengine#dispatchasyncobject-iserviceprovider-cancellationtoken-ienumerablestring);
group-filtered dispatches stay on that overload.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The compile-time message type. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The scope provider handlers resolve against. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the dispatch. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

Deliberately NOT a `DispatchAsync` overload: a same-name generic would join
the candidate set of every explicit `DispatchAsync<T>(msg, ...)` call, and
whenever the message expression is convertible to the type argument (an echo-typed
result dispatch — legal since `ICommand<TResult> : ICommand : IMessage`) the
identity conversion would out-rank the result overload's `object` parameter,
silently rerouting a result dispatch through the void pipeline or breaking the
caller with a return-type mismatch. The distinct name keeps the typed fast path
out of that candidate set entirely.

### `StreamAsync<TResult>(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public IAsyncEnumerable<TResult> StreamAsync<TResult>(object query, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null)
```

Streams under a caller-owned context — the shape that lets a caller read back what the
pipeline wrote. A streaming context is never pooled either way.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`IAsyncEnumerable<TResult>`

### `StreamAsync<TResult>(object, IServiceProvider, CancellationToken, IEnumerable<string>?)`

```csharp
public IAsyncEnumerable<TResult> StreamAsync<TResult>(object query, IServiceProvider serviceProvider, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Streams a query through this container's pipeline for it. The context is fresh and
unpooled: enumeration happens after this call returns, so its completion is not
observable here and the context cannot go back to the pool.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`IAsyncEnumerable<TResult>`
