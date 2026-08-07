---
title: "MessageRoot"
description: "A dispatch root closed over a concrete message type."
sidebar:
  label: "MessageRoot"
  order: 21
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A dispatch root closed over a concrete message type. A consumer implements
[`IMessageRootVisitor<TReturn, TState>`](/ergosfare.docs/api/core-abstractions/imessagerootvisitor-2) to re-enter a generic context with
the root's type argument and construct its closed dispatch component there — no
reflection involved.

```csharp
public abstract class MessageRoot
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L115)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`MessageRoot<TMessage>`](/ergosfare.docs/api/core-abstractions/messageroot-1)

## Methods

### `Accept<TReturn, TState>(IMessageRootVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IMessageRootVisitor<TReturn, TState> visitor, TState state)
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
