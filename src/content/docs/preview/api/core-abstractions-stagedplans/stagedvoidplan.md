---
title: "StagedVoidPlan"
description: "A compile-time staged pipeline plan for a void message: bespoke code that runs the message's entire interceptor-bearing pipeline — pre stages, handler, post…"
sidebar:
  label: "StagedVoidPlan"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compile-time staged pipeline plan for a void message: bespoke code that runs the
message's entire interceptor-bearing pipeline — pre stages, handler, post stages, with
exception and final semantics — as straight-line typed calls instead of the runtime
strategy's generic machinery. See [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot) for the visitor re-entry
pattern.

```csharp
public abstract class StagedVoidPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedVoidPlan.cs#L17)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`StagedVoidPlan<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan-1)

## Remarks

The plan is advisory: the hosting executor re-validates [`StagedVoidPlan.Composition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan#composition)
against the live registry on every version change and falls back to the runtime
strategy whenever the pipeline no longer matches, so a stale plan only loses its
speedup, never changes behavior. [`StagedVoidPlan<TMessage>.Execute(TMessage, IExecutionContext, IServiceProvider)`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan-1#executetmessage-iexecutioncontext-iserviceprovider) must
resolve every participant from the provider it is handed — that is exactly what the
runtime handler references do outside memoized mode, which the executor's gate
excludes.

## Properties

### `Composition`

```csharp
public abstract StagedPlanComposition Composition { get; }
```

The pipeline composition the plan was baked against.

**Returns**

[`StagedPlanComposition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedplancomposition)

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

### `Accept<TReturn, TState>(IStagedVoidPlanVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IStagedVoidPlanVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this plan's message type as the generic argument.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IStagedVoidPlanVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
