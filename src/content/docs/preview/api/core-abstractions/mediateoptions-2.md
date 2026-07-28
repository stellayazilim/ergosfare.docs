---
title: "MediateOptions<TMessage, TResult>"
description: "Options for controlling the behavior of message mediation for a specific message type and result type."
sidebar:
  label: "MediateOptions<TMessage, TResult>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Options for controlling the behavior of message mediation for a specific message type and result type.

```csharp
public sealed class MediateOptions<TMessage, TResult> where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/MediateOptions.cs#L8)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message being mediated. Must be non-nullable. |
| `TResult` | The type of the result produced by the message mediation. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### `CancellationToken`

```csharp
public required CancellationToken CancellationToken { get; init; }
```

Gets or sets the cancellation token used to observe cancellation during message mediation.

**Returns**

[`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

### `ExternalContext`

```csharp
public IExecutionContext? ExternalContext { get; init; }
```

Gets or sets an externally owned execution context to mediate under. When set, the
mediator uses it instead of creating one — the nested-dispatch path: a handler
opens a scope on its own context and passes the child here. The caller owns the
context's lifetime; [`MediateOptions<TMessage, TResult>.Items`](/ergosfare.docs/preview/api/core-abstractions/mediateoptions-2#items) and [`MediateOptions<TMessage, TResult>.CancellationToken`](/ergosfare.docs/preview/api/core-abstractions/mediateoptions-2#cancellationtoken) are
ignored in favor of the context's own state.

**Returns**

[`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext)

### `Groups`

```csharp
public required IEnumerable<string> Groups { get; init; }
```

Gets or sets the groups to which the message belongs.

**Returns**

`IEnumerable<string>`

### `Items`

```csharp
public IDictionary<object, object?>? Items { get; init; }
```

Gets or sets a collection of arbitrary items that can be shared or passed along during mediation.
When `null`, the execution context creates its backing dictionary lazily on first access.

**Returns**

`IDictionary<object, object>`

### `MessageMediationStrategy`

```csharp
public required IMessageMediationStrategy<TMessage, TResult> MessageMediationStrategy { get; init; }
```

Gets or sets the strategy responsible for executing the message mediation.

**Returns**

`IMessageMediationStrategy<TMessage, TResult>`

### `MessageResolveStrategy`

```csharp
public required IMessageResolveStrategy MessageResolveStrategy { get; init; }
```

Gets or sets the strategy used to resolve the message handlers.

**Returns**

[`IMessageResolveStrategy`](/ergosfare.docs/preview/api/core-abstractions/imessageresolvestrategy)

### `RegisterPlainMessagesOnSpot`

```csharp
public bool RegisterPlainMessagesOnSpot { get; init; }
```

Gets or sets a value indicating whether to register plain messages on the spot.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

Plain messages are messages that do not implement any specific message interfaces.
When this option is enabled, such messages will be automatically registered in the registry
when they are first encountered during mediation.

### `Retry`

```csharp
public byte? Retry { get; init; }
```

**Returns**

`byte?`
