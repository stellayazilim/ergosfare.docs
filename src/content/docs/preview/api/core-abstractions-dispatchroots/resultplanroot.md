---
title: "ResultPlanRoot"
description: "A compile-time pipeline plan closed over a result-producing message, its result type and its sole async handler; the result-producing counterpart of VoidPlan…"
sidebar:
  label: "ResultPlanRoot"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compile-time pipeline plan closed over a result-producing message, its result type
and its sole async handler; the result-producing counterpart of
[`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidplanroot).

```csharp
public abstract class ResultPlanRoot
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/ResultPlanRoot.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`ResultPlanRoot<TMessage, TResult, THandler>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resultplanroot-3)

## Methods

### `Accept<TReturn, TState>(IResultPlanRootVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IResultPlanRootVisitor<TReturn, TState> visitor, TState state)
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
| `visitor` | `IResultPlanRootVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
