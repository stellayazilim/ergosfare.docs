---
title: "Stella.Ergosfare.Core.Abstractions"
description: "Types in the Stella.Ergosfare.Core.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions` namespace contains 10 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | Class | The execution context of one dispatch: the cancellation token, the items participants share with each other, and the means to open a nested scope or stop the pipeline. Every handler and interceptor receives it as its last parameter. |
| [`ErgosfareContextScope`](/ergosfare.docs/api/core-abstractions/ergosfarecontextscope) | Struct | The child context of a nested dispatch, together with the lifetime that ends it. Open one with [`ErgosfareContext.CreateScope()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#createscope), pass [`ErgosfareContextScope.Context`](/ergosfare.docs/api/core-abstractions/ergosfarecontextscope#context) to the inner mediator call, and dispose the scope when that call completes. |
| [`ExperimentalIds`](/ergosfare.docs/api/core-abstractions/experimentalids) | Class | The diagnostic ids the framework marks its experimental surfaces with, one per surface, so opting in takes a single documented suppression rather than one per member. |
| [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | Class | An immutable group filter whose equal instances are canonicalized, so dispatch caches can recognize a reused filter by reference instead of comparing names. |
| [`IMessage`](/ergosfare.docs/api/core-abstractions/imessage) | Interface | Marks a type as a message that can be dispatched through an Ergosfare pipeline. |
| [`IPipelineExecutor`](/ergosfare.docs/api/core-abstractions/ipipelineexecutor) | Interface | A void message pipeline closed over one concrete message type, built once for that type and reused for every dispatch of it. |
| [`IPipelineExecutor<TResult>`](/ergosfare.docs/api/core-abstractions/ipipelineexecutor-1) | Interface | A result-producing message pipeline closed over one concrete message type; the counterpart of [`IPipelineExecutor`](/ergosfare.docs/api/core-abstractions/ipipelineexecutor). |
| [`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1) | Interface | Reads a failure out of a result value without throwing it, so a result that carries its error as data still reaches the exception-interceptor stage. |
| [`IResultMaterializer<TResult>`](/ergosfare.docs/api/core-abstractions/iresultmaterializer-1) | Interface | Builds a failed result value from an exception — the inverse of [`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1). |
| [`Unit`](/ergosfare.docs/api/core-abstractions/unit) | Class | The value carried in the result slot of a pipeline that produces no result. |
