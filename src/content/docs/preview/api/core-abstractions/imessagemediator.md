---
title: "IMessageMediator"
description: "Defines a mediator responsible for dispatching messages to their corresponding handlers and returning results from the mediation process."
sidebar:
  label: "IMessageMediator"
  order: 9
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

### `DispatchAsync(object, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask DispatchAsync(object message, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Dispatches `message` under an externally owned execution context —
the nested-dispatch path: a handler opens a scope on its own context and passes the
child here. The caller owns the context's lifetime.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance to dispatch. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The externally owned execution context to dispatch under. |
| `groups` | `IEnumerable<string>` | Pipeline groups to dispatch under; `null` selects the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

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

### `DispatchAsync<TResult>(object, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask<TResult> DispatchAsync<TResult>(object message, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Result-producing counterpart of
[`IMessageMediator.DispatchAsync(object, ErgosfareContext, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator#dispatchasyncobject-ergosfarecontext-ienumerablestring).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type produced by the pipeline. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance to dispatch. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The externally owned execution context to dispatch under. |
| `groups` | `IEnumerable<string>` | Pipeline groups to dispatch under; `null` selects the default group. |

**Returns**

`ValueTask<TResult>`

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
