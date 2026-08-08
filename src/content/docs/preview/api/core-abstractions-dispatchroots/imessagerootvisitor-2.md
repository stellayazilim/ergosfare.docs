---
title: "IMessageRootVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of MessageRoot."
sidebar:
  label: "IMessageRootVisitor<TReturn, TState>"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot).

```csharp
public interface IMessageRootVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/IMessageRootVisitor.cs#L2)

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

## Methods

### `Visit<TMessage>(TState)`

```csharp
TReturn Visit<TMessage>(TState state) where TMessage : IMessage
```

Called with the root's message type as the generic argument.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `state` | `TState` |  |

**Returns**

`TReturn`
