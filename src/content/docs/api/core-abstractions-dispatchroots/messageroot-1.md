---
title: "MessageRoot<TMessage>"
description: "The concrete closure of MessageRoot; instantiated by generated code."
sidebar:
  label: "MessageRoot<TMessage>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`MessageRoot`](/ergosfare.docs/api/core-abstractions-dispatchroots/messageroot); instantiated by generated code.

```csharp
public sealed class MessageRoot<TMessage> : MessageRoot where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/MessageRoot%5BTMessage%5D.cs#L2)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`MessageRoot`](/ergosfare.docs/api/core-abstractions-dispatchroots/messageroot)

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
