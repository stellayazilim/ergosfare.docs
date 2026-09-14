---
title: "StagedBroadcastPlan<TEvent>"
description: "StagedBroadcastPlan closed over its event type; generated plans derive from this."
sidebar:
  label: "StagedBroadcastPlan<TEvent>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

[`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan) closed over its event type; generated plans derive
from this.

```csharp
public abstract class StagedBroadcastPlan<TEvent> : StagedBroadcastPlan, IPipelineExecutor, ICompiledPlan where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedBroadcastPlan%5BTEvent%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event this plan serves. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

**Implements:** [`IPipelineExecutor`](/ergosfare.docs/preview/api/core-abstractions/ipipelineexecutor), [`ICompiledPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/icompiledplan)

## Remarks

The type parameter is constrained to `notnull` rather than [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage)
because a plain object can be an event and a publish is generic over that same
constraint. That lets the publishing path name this type directly, where reaching a void
plan from a publish would need an untyped step.

## Methods

### `Execute(TEvent, ErgosfareContext, IServiceProvider)`

```csharp
public abstract ValueTask Execute(TEvent message, ErgosfareContext context, IServiceProvider serviceProvider)
```

Runs the compiled pipeline for `message`, delivering it to every
handler the plan was compiled with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TEvent` | The event to publish. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved from — the publishing scope's. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

Only called while the live pipeline still matches
[`StagedBroadcastPlan.Composition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan#composition).

### `ExecuteFiltered(TEvent, ErgosfareContext, IServiceProvider, IReadOnlyList<string>)`

```csharp
public virtual ValueTask ExecuteFiltered(TEvent message, ErgosfareContext context, IServiceProvider serviceProvider, IReadOnlyList<string> groups)
```

Runs the compiled pipeline for a publish whose groups are only known now, testing
each participant's groups before calling it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TEvent` | The event to publish. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved from. |
| `groups` | `IReadOnlyList<string>` | The groups the publish asked for. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every matching handler has run.

Only called on a plan that reports [`StagedBroadcastPlan.FilterGroups`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan#filtergroups).
The default implementation runs the unfiltered body.
