---
title: "IMessageMediator"
description: "Defines a mediator responsible for dispatching messages to their corresponding handlers and returning results from the mediation process."
sidebar:
  label: "IMessageMediator"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Defines a mediator responsible for dispatching messages to their corresponding handlers
and returning results from the mediation process.

```csharp
public interface IMessageMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/IMessageMediator.cs#L8)

## Methods

### `DispatchAsync(object, IDictionary<object, object?>?, CancellationToken, IEnumerable<string>?)`

```csharp
ValueTask DispatchAsync(object message, IDictionary<object, object?>? items = null, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Dispatches `message` through the cached pipeline executor closed over
its runtime type and the requested group set. The handler is invoked through its typed
member — no object-typed bridge.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance to dispatch. |
| `items` | `IDictionary<object, object>` | Optional items exposed on the execution context. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token exposed on the execution context. |
| `groups` | `IEnumerable<string>` | Pipeline groups to dispatch under; `null` selects the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchAsync(object, IExecutionContext, IEnumerable<string>?)`

```csharp
ValueTask DispatchAsync(object message, IExecutionContext context, IEnumerable<string>? groups = null)
```

Dispatches `message` under an externally owned execution context —
the nested-dispatch path: a handler opens a scope on its own context and passes the
child here. The caller owns the context's lifetime.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance to dispatch. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The externally owned execution context to dispatch under. |
| `groups` | `IEnumerable<string>` | Pipeline groups to dispatch under; `null` selects the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `DispatchAsync<TResult>(object, IDictionary<object, object?>?, CancellationToken, IEnumerable<string>?)`

```csharp
ValueTask<TResult> DispatchAsync<TResult>(object message, IDictionary<object, object?>? items = null, CancellationToken cancellationToken = default, IEnumerable<string>? groups = null)
```

Dispatches `message` through the cached result-producing pipeline
executor closed over its runtime type and the requested group set; see
[`IMessageMediator.DispatchAsync(object, IDictionary<object, object?>?, CancellationToken, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator#dispatchasyncobject-idictionaryobject-object-cancellationtoken-ienumerablestring).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type produced by the pipeline. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance to dispatch. |
| `items` | `IDictionary<object, object>` | Optional items exposed on the execution context. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token exposed on the execution context. |
| `groups` | `IEnumerable<string>` | Pipeline groups to dispatch under; `null` selects the default group. |

**Returns**

`ValueTask<TResult>`

### `DispatchAsync<TResult>(object, IExecutionContext, IEnumerable<string>?)`

```csharp
ValueTask<TResult> DispatchAsync<TResult>(object message, IExecutionContext context, IEnumerable<string>? groups = null)
```

Result-producing counterpart of
[`IMessageMediator.DispatchAsync(object, IExecutionContext, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator#dispatchasyncobject-iexecutioncontext-ienumerablestring).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type produced by the pipeline. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance to dispatch. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The externally owned execution context to dispatch under. |
| `groups` | `IEnumerable<string>` | Pipeline groups to dispatch under; `null` selects the default group. |

**Returns**

`ValueTask<TResult>`

### `Mediate<TMessage, TMessageResult>(TMessage, MediateOptions<TMessage, TMessageResult>)`

```csharp
TMessageResult Mediate<TMessage, TMessageResult>(TMessage message, MediateOptions<TMessage, TMessageResult> options) where TMessage : notnull
```

Dispatches a message of type `TMessage` to the appropriate handler(s)
and returns the result of type `TMessageResult`.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message being mediated. Must be non-nullable. |
| `TMessageResult` | The type of the result returned from the handler. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message instance to mediate. |
| `options` | `MediateOptions<TMessage, TMessageResult>` | The options controlling message resolution, dependency creation, and mediation strategy. |

**Returns**

`TMessageResult` — The result produced by the message handler(s).

Implementations are expected to handle the resolution of handlers for the specified message,
create necessary dependencies, and execute the mediation strategy defined in `options`.
The mediation process may throw exceptions if no handlers are found or if there are issues
resolving dependencies.
