---
title: "VoidHandlerPlan<TMessage, THandler>"
description: "The concrete closure of VoidHandlerPlan; instantiated by generated code."
sidebar:
  label: "VoidHandlerPlan<TMessage, THandler>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`VoidHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidhandlerplan); instantiated by generated code.

```csharp
public sealed class VoidHandlerPlan<TMessage, THandler> : VoidHandlerPlan where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/VoidHandlerPlan%5BTMessage%2CTHandler%5D.cs#L5)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `THandler` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`VoidHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidhandlerplan)

## Constructors

### `VoidHandlerPlan()`

```csharp
public VoidHandlerPlan()
```

Creates a plan without a compile-time construction path.

## Methods

### `Accept<TReturn, TState>(IVoidHandlerPlanVisitor<TReturn, TState>, TState)`

```csharp
public override TReturn Accept<TReturn, TState>(IVoidHandlerPlanVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this plan's message and handler types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IVoidHandlerPlanVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
