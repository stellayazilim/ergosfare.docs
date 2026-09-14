---
title: "StagedStreamPlan"
description: "A compiled plan that runs a streaming query's whole pipeline — pre-interceptors, the stream handler, the enumeration, and the post-, exception- and final sta…"
sidebar:
  label: "StagedStreamPlan"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compiled plan that runs a streaming query's whole pipeline — pre-interceptors, the
stream handler, the enumeration, and the post-, exception- and final stages around it —
as straight-line typed calls.

```csharp
public abstract class StagedStreamPlan : ICompiledPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedStreamPlan.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`ICompiledPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/icompiledplan)

**Derived:** [`StagedStreamPlan<TQuery, TResult>`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedstreamplan-2)

## Remarks

Like its void and result siblings, the plan is verified against the live pipeline before
it runs, and its [`StagedStreamPlan<TQuery, TResult>.Execute(TQuery, ErgosfareContext, IServiceProvider, CancellationToken)`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedstreamplan-2#executetquery-ergosfarecontext-iserviceprovider-cancellationtoken) must resolve
every participant from the provider it is given.

## Properties

### `Composition`

```csharp
public abstract StagedPlanKey Composition { get; }
```

The pipeline this plan was compiled against.

**Returns**

[`StagedPlanKey`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedplankey)
