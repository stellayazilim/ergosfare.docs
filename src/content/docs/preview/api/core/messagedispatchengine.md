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

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core/MessageDispatchEngine.cs#L21)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Construction is internal: the engine only makes sense wired to the process-wide
`PipelineExecutorCache` and dependencies factory that the DI registration
supplies. Dispatch behavior matches [`IMessageMediator`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator)'s executor overloads
exactly — the mediator delegates here, passing its own captured provider.

## Methods

### `DispatchAsync(object, IExecutionContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public ValueTask DispatchAsync(object message, IExecutionContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null)
```

Dispatches a void message under a caller-owned execution context (typically a
scope's child): the caller controls the context's lifetime, so nothing is rented or
returned here.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message to dispatch. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The externally owned execution context. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The scope provider handlers resolve against. |
| `groups` | `IEnumerable<string>` | Optional group filters applied to the pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchAsync(object, IServiceProvider, IDictionary<object, object?>?, CancellationToken, IEnumerable<string>?)`

```csharp
public ValueTask DispatchAsync(object message, IServiceProvider serviceProvider, IDictionary<object, object?>? items = null, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Dispatches a void message through its cached pipeline executor, resolving handlers
against `serviceProvider` — the caller's scope.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message to dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The scope provider handlers resolve against. |
| `items` | `IDictionary<object, object>` | Optional contextual items exposed to the pipeline. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the dispatch. |
| `groups` | `IEnumerable<string>` | Optional group filters applied to the pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchAsync<TResult>(object, IExecutionContext, IServiceProvider, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> DispatchAsync<TResult>(object message, IExecutionContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups = null)
```

Result-producing counterpart of
[`MessageDispatchEngine.DispatchAsync(object, IExecutionContext, IServiceProvider, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core/messagedispatchengine#dispatchasyncobject-iexecutioncontext-iserviceprovider-ienumerablestring).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the message. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `DispatchAsync<TResult>(object, IServiceProvider, IDictionary<object, object?>?, CancellationToken, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> DispatchAsync<TResult>(object message, IServiceProvider serviceProvider, IDictionary<object, object?>? items = null, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Result-producing counterpart of
[`MessageDispatchEngine.DispatchAsync(object, IServiceProvider, IDictionary<object, object?>?, CancellationToken, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core/messagedispatchengine#dispatchasyncobject-iserviceprovider-idictionaryobject-object-cancellationtoken-ienumerablestring).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the message. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `items` | `IDictionary<object, object>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`
