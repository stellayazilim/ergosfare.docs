---
title: "ResultHandlerPlan"
description: "A compile-time pipeline plan closed over a result-producing message, its result type and its sole async handler; the result-producing counterpart of VoidHand…"
sidebar:
  label: "ResultHandlerPlan"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compile-time pipeline plan closed over a result-producing message, its result type
and its sole async handler; the result-producing counterpart of
[`VoidHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidhandlerplan).

```csharp
public abstract class ResultHandlerPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/ResultHandlerPlan.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`ResultHandlerPlan<TMessage, TResult, THandler>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resulthandlerplan-3)

## Methods

### `Accept<TReturn, TState>(IResultHandlerPlanVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IResultHandlerPlanVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this plan's message, result and handler types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IResultHandlerPlanVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
