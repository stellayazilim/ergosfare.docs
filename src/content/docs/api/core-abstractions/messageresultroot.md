---
title: "MessageResultRoot"
description: "A dispatch root closed over a concrete (message, result) pair; see MessageRoot."
sidebar:
  label: "MessageResultRoot"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A dispatch root closed over a concrete (message, result) pair; see
[`MessageRoot`](/ergosfare.docs/api/core-abstractions/messageroot).

```csharp
public abstract class MessageResultRoot
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L140)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`MessageResultRoot<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions/messageresultroot-2)

## Methods

### `Accept<TReturn, TState>(IMessageResultRootVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IMessageResultRootVisitor<TReturn, TState> visitor, TState state)
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
