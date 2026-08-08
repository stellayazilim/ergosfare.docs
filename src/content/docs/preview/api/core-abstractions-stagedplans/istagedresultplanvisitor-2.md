---
title: "IStagedResultPlanVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of StagedResultPlan."
sidebar:
  label: "IStagedResultPlanVisitor<TReturn, TState>"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan).

```csharp
public interface IStagedResultPlanVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/IStagedResultPlanVisitor.cs#L3)

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

Called with the plan's message and result types as the generic arguments.

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
