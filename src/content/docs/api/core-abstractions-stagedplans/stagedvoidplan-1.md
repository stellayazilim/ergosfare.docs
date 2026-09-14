---
title: "StagedVoidPlan<TMessage>"
description: "StagedVoidPlan closed over its message type; generated plans derive from this, and hand-written ones may too."
sidebar:
  label: "StagedVoidPlan<TMessage>"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

[`StagedVoidPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan) closed over its message type; generated plans derive from
this, and hand-written ones may too.

```csharp
public abstract class StagedVoidPlan<TMessage> : StagedVoidPlan, IPipelineExecutor, ICompiledPlan where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedVoidPlan%5BTMessage%5D.cs#L9)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message this plan serves. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`StagedVoidPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan)

**Implements:** [`IPipelineExecutor`](/ergosfare.docs/api/core-abstractions/ipipelineexecutor), [`ICompiledPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/icompiledplan)

## Methods

### `Execute(TMessage, ErgosfareContext, IServiceProvider)`

```csharp
public abstract ValueTask Execute(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider)
```

Runs the compiled pipeline for `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to dispatch. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved from — the dispatching scope's. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the pipeline has run.

Only called while the live pipeline still matches
[`StagedVoidPlan.Composition`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan#composition).

### `ExecuteFiltered(TMessage, ErgosfareContext, IServiceProvider, IReadOnlyList<string>)`

```csharp
public virtual ValueTask ExecuteFiltered(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider, IReadOnlyList<string> groups)
```

Runs the compiled pipeline for a dispatch whose groups are only known now, testing
each participant's groups before calling it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to dispatch. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved from. |
| `groups` | `IReadOnlyList<string>` | The groups the dispatch asked for. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the pipeline has run.

Only called on a plan that reports [`StagedVoidPlan.FilterGroups`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedvoidplan#filtergroups). The
default implementation runs the unfiltered body.
