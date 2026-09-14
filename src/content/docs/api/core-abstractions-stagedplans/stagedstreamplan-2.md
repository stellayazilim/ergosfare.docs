---
title: "StagedStreamPlan<TQuery, TResult>"
description: "StagedStreamPlan closed over its query and item types; generated plans derive from this."
sidebar:
  label: "StagedStreamPlan<TQuery, TResult>"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

[`StagedStreamPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedstreamplan) closed over its query and item types; generated plans
derive from this.

```csharp
public abstract class StagedStreamPlan<TQuery, TResult> : StagedStreamPlan, ICompiledStreamPlan<TResult>, ICompiledPlan where TQuery : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedStreamPlan%5BTQuery%2CTResult%5D.cs#L10)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The streaming query this plan serves. |
| `TResult` | The type of the items it streams. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`StagedStreamPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedstreamplan)

**Implements:** `ICompiledStreamPlan<TResult>`, [`ICompiledPlan`](/ergosfare.docs/api/core-abstractions-stagedplans/icompiledplan)

## Methods

### `Execute(TQuery, ErgosfareContext, IServiceProvider, CancellationToken)`

```csharp
public abstract IAsyncEnumerable<TResult> Execute(TQuery query, ErgosfareContext context, IServiceProvider serviceProvider, CancellationToken cancellationToken)
```

Streams the results of `query` through the compiled pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query to run. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved from — the dispatching scope's. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | The token the stream is enumerated under. |

**Returns**

`IAsyncEnumerable<TResult>` — The streamed items. Nothing runs until the caller begins enumerating, and the stages after the handler run once enumeration ends.

Only called while the live pipeline still matches
[`StagedStreamPlan.Composition`](/ergosfare.docs/api/core-abstractions-stagedplans/stagedstreamplan#composition).
