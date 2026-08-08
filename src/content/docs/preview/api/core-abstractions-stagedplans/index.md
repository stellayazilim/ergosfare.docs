---
title: "Stella.Ergosfare.Core.Abstractions.StagedPlans"
description: "Types in the Stella.Ergosfare.Core.Abstractions.StagedPlans namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.StagedPlans` namespace contains 7 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`IStagedResultPlanVisitor<TReturn, TState>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/istagedresultplanvisitor-2) | Interface | Generic re-entry point for consumers of [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan). |
| [`IStagedVoidPlanVisitor<TReturn, TState>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/istagedvoidplanvisitor-2) | Interface | Generic re-entry point for consumers of [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan). |
| [`StagedPlanComposition`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedplancomposition) | Class | The pipeline composition a staged plan was baked against: the sole main handler plus the four interceptor stages as ordered type lists — exactly the merged (direct-first, then indirect) order the runtime pipeline would execute them in. |
| [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan) | Class | The result-producing counterpart of [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan): a compile-time staged pipeline plan for a message with a result contract. The same advisory contract applies — see [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan). |
| [`StagedResultPlan<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan-2) | Class | The typed closure of [`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan); subclassed by generated (or hand-written) plans. |
| [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan) | Class | A compile-time staged pipeline plan for a void message: bespoke code that runs the message's entire interceptor-bearing pipeline — pre stages, handler, post stages, with exception and final semantics — as straight-line typed calls instead of the runtime strategy's generic machinery. See [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot) for the visitor re-entry pattern. |
| [`StagedVoidPlan<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan-1) | Class | The typed closure of [`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan); subclassed by generated (or hand-written) plans. |
