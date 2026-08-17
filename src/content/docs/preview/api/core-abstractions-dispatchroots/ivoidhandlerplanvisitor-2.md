---
title: "IVoidHandlerPlanVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of VoidHandlerPlan."
sidebar:
  label: "IVoidHandlerPlanVisitor<TReturn, TState>"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`VoidHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidhandlerplan).

```csharp
public interface IVoidHandlerPlanVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/IVoidHandlerPlanVisitor.cs#L4)

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

## Methods

### `Visit<TMessage, THandler>(TState)`

```csharp
TReturn Visit<TMessage, THandler>(TState state) where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage>
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
