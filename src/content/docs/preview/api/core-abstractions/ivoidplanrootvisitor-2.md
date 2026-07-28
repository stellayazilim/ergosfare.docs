---
title: "IVoidPlanRootVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of VoidPlanRoot."
sidebar:
  label: "IVoidPlanRootVisitor<TReturn, TState>"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions/voidplanroot).

```csharp
public interface IVoidPlanRootVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L140)

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

## Methods

### `Visit<TMessage, THandler>(TState)`

```csharp
TReturn Visit<TMessage, THandler>(TState state) where TMessage : notnull, IMessage where THandler : class, IAsyncHandler<TMessage>
```

Called with the plan's message and handler types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `THandler` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `state` | `TState` |  |

**Returns**

`TReturn`
