---
title: "Stella.Ergosfare.Core.Abstractions.StagedPlans"
description: "Types in the Stella.Ergosfare.Core.Abstractions.StagedPlans namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.StagedPlans` namespace contains 12 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`ICompiledPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/icompiledplan) | Interface | The immutable descriptor carried by an executable generated plan. |
| [`ICompiledStreamPlan<TResult>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/icompiledstreamplan-1) | Interface | An executable generated streaming plan, without a runtime dispatch wrapper. |
| [`PlanGroups`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/plangroups) | Class | The group tests generated plans call before each participant. |
| [`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan) | Class | A compiled plan that runs a published message's whole pipeline — pre-interceptors, every matched handler in order, post-interceptors, and the exception and final behavior around them — as straight-line typed calls. |
| [`StagedBroadcastPlan<TEvent>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan-1) | Class | [`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan) closed over its event type; generated plans derive from this. |
| [`StagedPlanKey`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedplankey) | Class | The pipeline a staged plan was compiled against: its main handlers and its four interceptor stages, each as an ordered list of types in the order the pipeline would run them. |
| [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan) | Class | A compiled plan that runs a result-producing message's whole pipeline as straight-line typed calls; the result-producing counterpart of [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan), with the same rules about when it is trusted. |
| [`StagedResultPlan<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan-2) | Class | [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan) closed over its message and result types; generated plans derive from this, and hand-written ones may too. |
| [`StagedStreamPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedstreamplan) | Class | A compiled plan that runs a streaming query's whole pipeline — pre-interceptors, the stream handler, the enumeration, and the post-, exception- and final stages around it — as straight-line typed calls. |
| [`StagedStreamPlan<TQuery, TResult>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedstreamplan-2) | Class | [`StagedStreamPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedstreamplan) closed over its query and item types; generated plans derive from this. |
| [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan) | Class | A compiled plan that runs a void message's whole pipeline — pre-interceptors, handler, post-interceptors, and the exception and final behavior around them — as straight-line typed calls. |
| [`StagedVoidPlan<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan-1) | Class | [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan) closed over its message type; generated plans derive from this, and hand-written ones may too. |
