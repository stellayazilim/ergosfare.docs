---
title: "ICompiledPlan"
description: "The immutable descriptor carried by an executable generated plan."
sidebar:
  label: "ICompiledPlan"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The immutable descriptor carried by an executable generated plan.

```csharp
public interface ICompiledPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/ICompiledPlan.cs#L3)

## Properties

### `Composition`

```csharp
StagedPlanKey Composition { get; }
```

The participants and adapter baked into the execution body.

**Returns**

[`StagedPlanKey`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedplankey)

### `FilterGroups`

```csharp
string[]? FilterGroups { get; }
```

The groups covered by a filtering body, or null for a fixed body.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)
