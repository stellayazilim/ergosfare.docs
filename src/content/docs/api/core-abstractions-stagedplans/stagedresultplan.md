---
title: "StagedResultPlan"
description: "A compiled plan that runs a result-producing message's whole pipeline as straight-line typed calls; the result-producing counterpart of StagedVoidPlan, with…"
sidebar:
  label: "StagedResultPlan"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compiled plan that runs a result-producing message's whole pipeline as straight-line
typed calls; the result-producing counterpart of [`StagedVoidPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan), with the
same rules about when it is trusted.

```csharp
public abstract class StagedResultPlan : ICompiledPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedResultPlan.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`ICompiledPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/icompiledplan)

**Derived:** [`StagedResultPlan<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedresultplan-2)

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
