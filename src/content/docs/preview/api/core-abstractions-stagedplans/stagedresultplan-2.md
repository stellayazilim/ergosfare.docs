---
title: "StagedResultPlan<TMessage, TResult>"
description: "The typed closure of StagedResultPlan; subclassed by generated (or hand-written) plans."
sidebar:
  label: "StagedResultPlan<TMessage, TResult>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The typed closure of [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan); subclassed by generated (or hand-written) plans.

```csharp
public abstract class StagedResultPlan<TMessage, TResult> : StagedResultPlan where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedResultPlan%5BTMessage%2CTResult%5D.cs#L4)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

## Methods

### `Accept<TReturn, TState>(IStagedResultPlanVisitor<TReturn, TState>, TState)`

```csharp
public override sealed TReturn Accept<TReturn, TState>(IStagedResultPlanVisitor<TReturn, TState> visitor, TState state)
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

### `Execute(TMessage, ErgosfareContext, IServiceProvider)`

```csharp
public abstract ValueTask<TResult> Execute(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider)
```

Runs the baked pipeline for the message. Only invoked while the live pipeline
matches [`StagedVoidPlan.Composition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan#composition); participants resolve from
`serviceProvider` — the dispatching scope's provider.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |

**Returns**

`ValueTask<TResult>`

### `ExecuteDirect(TMessage, ErgosfareContext, IServiceProvider)`

```csharp
public virtual ValueTask<TResult> ExecuteDirect(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider)
```

The direct-construction variant of [`StagedVoidPlan<TMessage>.Execute(TMessage, ErgosfareContext, IServiceProvider)`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan-1#executetmessage-ergosfarecontext-iserviceprovider): participants are
constructed with `new` (dependencies still resolve from
`serviceProvider`). Only invoked while
[`StagedVoidPlan.SupportsDirectConstruction`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan#supportsdirectconstruction) is `true` AND the
hosting executor verified every participant's plain transient registration; the
default forwards to [`StagedVoidPlan<TMessage>.Execute(TMessage, ErgosfareContext, IServiceProvider)`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan-1#executetmessage-ergosfarecontext-iserviceprovider).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |

**Returns**

`ValueTask<TResult>`
