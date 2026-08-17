---
title: "StagedBroadcastPlan<TEvent>"
description: "The typed closure of StagedBroadcastPlan; subclassed by generated plans."
sidebar:
  label: "StagedBroadcastPlan<TEvent>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The typed closure of [`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan); subclassed by generated plans.

```csharp
public abstract class StagedBroadcastPlan<TEvent> : StagedBroadcastPlan where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedBroadcastPlan%5BTEvent%5D.cs#L9)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

## Remarks

Constrained to `notnull` rather than [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage) on purpose: a publish is
generic over the same constraint because a plain POCO can be an event, so the publishing
lane can name this type directly. The resultless plans cannot be named that way, which is
why reaching one from a publish needed an erased entry — this family needs none.

## Methods

### `Execute(TEvent, ErgosfareContext, IServiceProvider)`

```csharp
public abstract ValueTask Execute(TEvent message, ErgosfareContext context, IServiceProvider serviceProvider)
```

Runs the baked pipeline for the message, delivering to every handler the composition
was baked with. Only invoked while the live pipeline matches
[`StagedBroadcastPlan.Composition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan#composition); participants resolve from
`serviceProvider` — the publishing scope's provider.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TEvent` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `ExecuteDirect(TEvent, ErgosfareContext, IServiceProvider)`

```csharp
public virtual ValueTask ExecuteDirect(TEvent message, ErgosfareContext context, IServiceProvider serviceProvider)
```

The direct-construction variant of [`StagedBroadcastPlan<TEvent>.Execute(TEvent, ErgosfareContext, IServiceProvider)`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan-1#executetevent-ergosfarecontext-iserviceprovider): participants are constructed
with `new` (dependencies still resolve from `serviceProvider`).
Only invoked while [`StagedBroadcastPlan.SupportsDirectConstruction`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan#supportsdirectconstruction) is
`true` AND the publishing lane verified every participant's plain transient
registration; the default forwards to [`StagedBroadcastPlan<TEvent>.Execute(TEvent, ErgosfareContext, IServiceProvider)`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan-1#executetevent-ergosfarecontext-iserviceprovider).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TEvent` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `ExecuteFiltered(TEvent, ErgosfareContext, IServiceProvider, IReadOnlyList<string>)`

```csharp
public virtual ValueTask ExecuteFiltered(TEvent message, ErgosfareContext context, IServiceProvider serviceProvider, IReadOnlyList<string> groups)
```

Runs the baked pipeline for a publish whose group filter is a runtime value: every
participant is present in the body and each call is guarded by the group test the
generator baked for it. Only invoked on a plan that reports
[`StagedBroadcastPlan.FilterGroups`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan#filtergroups); the default forwards to the unfiltered body.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TEvent` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IReadOnlyList<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `ExecuteFilteredDirect(TEvent, ErgosfareContext, IServiceProvider, IReadOnlyList<string>)`

```csharp
public virtual ValueTask ExecuteFilteredDirect(TEvent message, ErgosfareContext context, IServiceProvider serviceProvider, IReadOnlyList<string> groups)
```

The direct-construction variant of [`StagedBroadcastPlan<TEvent>.ExecuteFiltered(TEvent, ErgosfareContext, IServiceProvider, IReadOnlyList<string>)`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan-1#executefilteredtevent-ergosfarecontext-iserviceprovider-ireadonlyliststring); see
[`StagedBroadcastPlan<TEvent>.ExecuteDirect(TEvent, ErgosfareContext, IServiceProvider)`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan-1#executedirecttevent-ergosfarecontext-iserviceprovider) for when it qualifies.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TEvent` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `groups` | `IReadOnlyList<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
