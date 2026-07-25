---
title: "IMessageResultRootVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of MessageResultRoot."
sidebar:
  label: "IMessageResultRootVisitor<TReturn, TState>"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`MessageResultRoot`](/ergosfare.docs/api/core-abstractions/messageresultroot).

```csharp
public interface IMessageResultRootVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L92)

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

## Methods

### `Visit<TMessage, TResult>(TState)`

```csharp
TReturn Visit<TMessage, TResult>(TState state) where TMessage : IMessage
```

Called with the root's message and result types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `state` | `TState` |  |

**Returns**

`TReturn`
