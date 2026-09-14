---
title: "StagedBroadcastPlan"
description: "A compiled plan that runs a published message's whole pipeline — pre-interceptors, every matched handler in order, post-interceptors, and the exception and f…"
sidebar:
  label: "StagedBroadcastPlan"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compiled plan that runs a published message's whole pipeline — pre-interceptors, every
matched handler in order, post-interceptors, and the exception and final behavior around
them — as straight-line typed calls.

```csharp
public abstract class StagedBroadcastPlan : ICompiledPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedBroadcastPlan.cs#L21)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`ICompiledPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/icompiledplan)

**Derived:** [`StagedBroadcastPlan<TEvent>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan-1)

## Remarks

Broadcast plans are their own family rather than a shape of the void plans, even though
the compiled body differs only in having a loop where the other has a call. Keeping them
apart means nothing has to ask which kind of pipeline it holds: a publish looks here, a
send looks at the void plans, and which store answered settles how delivery works. It is
also where a delivery shape other than today's sequential one could be expressed without
disturbing the single-handler families.

Like the other plans, this object is directly executable. Registration is checked against
[`StagedBroadcastPlan.Composition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan#composition) when the engine is initialized; a mismatch fails dispatch.

## Properties

### `Composition`

```csharp
public abstract StagedPlanKey Composition { get; }
```

The pipeline this plan was compiled against.

**Returns**

[`StagedPlanKey`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedplankey)

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
