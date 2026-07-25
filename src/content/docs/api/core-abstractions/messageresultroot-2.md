---
title: "MessageResultRoot<TMessage, TResult>"
description: "The concrete closure of MessageResultRoot; instantiated by generated code."
sidebar:
  label: "MessageResultRoot<TMessage, TResult>"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`MessageResultRoot`](/ergosfare.docs/api/core-abstractions/messageresultroot); instantiated by generated code.

```csharp
public sealed class MessageResultRoot<TMessage, TResult> : MessageResultRoot where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L84)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`MessageResultRoot`](/ergosfare.docs/api/core-abstractions/messageresultroot)

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
