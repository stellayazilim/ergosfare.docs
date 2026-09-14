---
title: "StagedResultPlan<TMessage, TResult>"
description: "StagedResultPlan closed over its message and result types; generated plans derive from this, and hand-written ones may too."
sidebar:
  label: "StagedResultPlan<TMessage, TResult>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

[`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan) closed over its message and result types; generated
plans derive from this, and hand-written ones may too.

```csharp
public abstract class StagedResultPlan<TMessage, TResult> : StagedResultPlan, IPipelineExecutor<TResult>, ICompiledPlan where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedResultPlan%5BTMessage%2CTResult%5D.cs#L10)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message this plan serves. |
| `TResult` | The result this plan produces. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

**Implements:** `IPipelineExecutor<TResult>`, [`ICompiledPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/icompiledplan)

## Methods

### `Execute(TMessage, ErgosfareContext, IServiceProvider)`

```csharp
public abstract ValueTask<TResult> Execute(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider)
```

Runs the compiled pipeline for `message` and returns its result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to dispatch. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved from — the dispatching scope's. |

**Returns**

`ValueTask<TResult>` — The result the pipeline produced.

Only called while the live pipeline still matches
[`StagedResultPlan.Composition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan#composition).

### `ExecuteFiltered(TMessage, ErgosfareContext, IServiceProvider, IReadOnlyList<string>)`

```csharp
public virtual ValueTask<TResult> ExecuteFiltered(TMessage message, ErgosfareContext context, IServiceProvider serviceProvider, IReadOnlyList<string> groups)
```

Runs the compiled pipeline for a dispatch whose groups are only known now, testing
each participant's groups before calling it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to dispatch. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved from. |
| `groups` | `IReadOnlyList<string>` | The groups the dispatch asked for. |

**Returns**

`ValueTask<TResult>` — The result the pipeline produced.

Only called on a plan that reports [`StagedResultPlan.FilterGroups`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan#filtergroups). The
default implementation runs the unfiltered body.
