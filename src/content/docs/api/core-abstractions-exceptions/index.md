---
title: "Stella.Ergosfare.Core.Abstractions.Exceptions"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Exceptions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Exceptions` namespace contains 10 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`AdaptedException`](/ergosfare.docs/api/core-abstractions-exceptions/adaptedexception) | Class | An exception that carries the result value it was derived from, so code raising a failure out of a result carrier can hand the carrier itself to whoever catches it. |
| [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) | Class | Thrown by [`ErgosfareContext.Abort()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#abort) when a participant ends the dispatch. |
| [`ExecutionRetryRequestedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionretryrequestedexception) | Class | A signal that a pipeline should be run again, carrying the number of attempts made so far. |
| [`InvalidMessageTypeException`](/ergosfare.docs/api/core-abstractions-exceptions/invalidmessagetypeexception) | Class | Thrown when a type is used as a message but is not one. |
| [`MultipleHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/multiplehandlerfoundexception) | Class | Thrown when a message that admits exactly one handler has several registered against it — a command or query with more than one handler at the level that serves it. |
| [`NoHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/nohandlerfoundexception) | Class | Thrown when nothing will handle a message: either no handler is registered for its type, or the handlers that are registered are all filtered out of this dispatch. |
| [`StreamOutputDisposedException`](/ergosfare.docs/api/core-abstractions-exceptions/streamoutputdisposedexception) | Class | The consumer disposed the stream output before enumeration completed. |
| [`UnplannedDispatchException`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchexception) | Class | Thrown when a dispatch has no compiled plan to run it. Nothing is dispatched at run time that was not produced at compile time, so a pipeline the generator did not bake — or one that no longer matches what it baked — fails loudly instead of running a degraded lane. |
| [`UnplannedDispatchReason`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchreason) | Enum | Why a dispatch had no compiled plan to run; carried by [`UnplannedDispatchException`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchexception) so callers and tests can tell the cases apart without parsing the message. |
| [`UnresolvableParticipantException`](/ergosfare.docs/api/core-abstractions-exceptions/unresolvableparticipantexception) | Class | Thrown when a message's pipeline names a participant that the dispatching container cannot resolve. |
