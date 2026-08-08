---
title: "IStagedVoidPlanVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of StagedVoidPlan."
sidebar:
  label: "IStagedVoidPlanVisitor<TReturn, TState>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan).

```csharp
public interface IStagedVoidPlanVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/IStagedVoidPlanVisitor.cs#L3)

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

Called with the plan's message type as the generic argument.

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
