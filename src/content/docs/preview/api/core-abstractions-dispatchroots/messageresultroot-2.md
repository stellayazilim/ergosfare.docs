---
title: "MessageResultRoot<TMessage, TResult>"
description: "The concrete closure of MessageResultRoot; instantiated by generated code."
sidebar:
  label: "MessageResultRoot<TMessage, TResult>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot); instantiated by generated code.

```csharp
public sealed class MessageResultRoot<TMessage, TResult> : MessageResultRoot where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/MessageResultRoot%5BTMessage%2CTResult%5D.cs#L2)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot)

## Methods

### `Accept<TReturn, TState>(IMessageResultRootVisitor<TReturn, TState>, TState)`

```csharp
public override TReturn Accept<TReturn, TState>(IMessageResultRootVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this root's message and result types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IMessageResultRootVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
