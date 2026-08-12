---
title: "StagedResultPlan"
description: "The result-producing counterpart of StagedVoidPlan: a compile-time staged pipeline plan for a message with a result contract."
sidebar:
  label: "StagedResultPlan"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The result-producing counterpart of [`StagedVoidPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan): a compile-time
staged pipeline plan for a message with a result contract. The same advisory contract
applies — see [`StagedVoidPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan).

```csharp
public abstract class StagedResultPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedResultPlan.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`StagedResultPlan<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedresultplan-2)

## Properties

### `Composition`

```csharp
public abstract StagedPlanComposition Composition { get; }
```

The pipeline composition the plan was baked against.

**Returns**

[`StagedPlanComposition`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedplancomposition)

### `SupportsDirectConstruction`

```csharp
public virtual bool SupportsDirectConstruction { get; }
```

Whether the plan carries a direct-construction variant of its pipeline
(`ExecuteDirect`): every participant constructed with `new` instead of a
container resolution. The hosting executor uses that variant only after verifying
at runtime that every participant's effective DI registration is the module's own
plain transient one — the single shape where container resolution and direct
construction are observably identical.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### `Accept<TReturn, TState>(IStagedResultPlanVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IStagedResultPlanVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this plan's message and result types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IStagedResultPlanVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
