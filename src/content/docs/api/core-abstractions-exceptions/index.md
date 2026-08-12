---
title: "Stella.Ergosfare.Core.Abstractions.Exceptions"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Exceptions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Exceptions` namespace contains 7 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`AdaptedException`](/ergosfare.docs/api/core-abstractions-exceptions/adaptedexception) | Class | Exception wrapper used by result adapters to surface errors without directly throwing the original result type. |
| [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) | Class | Raised by [`ErgosfareContext.Abort()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#abort): a participant stopped the pipeline. |
| [`ExecutionRetryRequestedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionretryrequestedexception) | Class |  |
| [`InvalidMessageTypeException`](/ergosfare.docs/api/core-abstractions-exceptions/invalidmessagetypeexception) | Class | Exception thrown when a message of an invalid type is encountered. |
| [`MultipleHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/multiplehandlerfoundexception) | Class | Exception thrown when multiple handlers are found for a message that expects only one. |
| [`NoHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/nohandlerfoundexception) | Class | Exception thrown when nothing will handle a message: either the message type has no descriptor at all, or it has one whose handlers are every one excluded from this dispatch. The [`Message`](https://learn.microsoft.com/dotnet/api/system.exception.message) says which. |
| [`UnresolvableParticipantException`](/ergosfare.docs/api/core-abstractions-exceptions/unresolvableparticipantexception) | Class | Exception thrown when a message's selected frozen composition names a participant that the dispatching container cannot resolve. |
