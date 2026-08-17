---
title: "VoidHandlerPlan"
description: "A compile-time pipeline plan closed over a void message and its sole async handler; see GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>() and MessageR…"
sidebar:
  label: "VoidHandlerPlan"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compile-time pipeline plan closed over a void message and its sole async handler;
see [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addvoidplantmessage-thandler) and
[`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot) for the visitor re-entry pattern.

```csharp
public abstract class VoidHandlerPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/VoidHandlerPlan.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`VoidHandlerPlan<TMessage, THandler>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidhandlerplan-2)

## Methods

### `Accept<TReturn, TState>(IVoidHandlerPlanVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IVoidHandlerPlanVisitor<TReturn, TState> visitor, TState state)
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
