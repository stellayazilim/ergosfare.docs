---
title: "MessageRoot<TMessage>"
description: "The concrete closure of MessageRoot; instantiated by generated code."
sidebar:
  label: "MessageRoot<TMessage>"
  order: 24
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions/messageroot); instantiated by generated code.

```csharp
public sealed class MessageRoot<TMessage> : MessageRoot where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L122)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions/messageroot)

## Methods

### `Accept<TReturn, TState>(IMessageRootVisitor<TReturn, TState>, TState)`

```csharp
public override TReturn Accept<TReturn, TState>(IMessageRootVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this root's message type as the generic argument.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IMessageRootVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
