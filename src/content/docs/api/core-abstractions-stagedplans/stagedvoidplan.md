---
title: "StagedVoidPlan"
description: "A compiled plan that runs a void message's whole pipeline — pre-interceptors, handler, post-interceptors, and the exception and final behavior around them —…"
sidebar:
  label: "StagedVoidPlan"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compiled plan that runs a void message's whole pipeline — pre-interceptors, handler,
post-interceptors, and the exception and final behavior around them — as straight-line
typed calls.

```csharp
public abstract class StagedVoidPlan : ICompiledPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedVoidPlan.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`ICompiledPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/icompiledplan)

**Derived:** [`StagedVoidPlan<TMessage>`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan-1)

## Remarks

The plan is the executor. Its descriptor is checked against registration when the
engine is initialized. Its one generated body constructs eligible parameterless
participants and resolves injected participants from the caller's scope. A descriptor
mismatch fails dispatch instead of constructing another execution path.

## Properties

### `Composition`

```csharp
public abstract StagedPlanKey Composition { get; }
```

The pipeline this plan was compiled against.

**Returns**

[`StagedPlanKey`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedplankey)

### `FilterGroups`

```csharp
public virtual string[]? FilterGroups { get; }
```

Every group this plan can filter for, or `null` when the plan was compiled for
one group set and needs no filtering.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)

A filtering plan serves dispatches whose groups are only known at runtime: it holds
every participant and decides per call, so what the executor must check is the
pipeline over exactly these groups.
