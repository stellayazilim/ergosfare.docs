---
title: "Stella.Ergosfare.Core.Abstractions.Exceptions"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Exceptions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Exceptions` namespace contains 6 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`AdaptedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/adaptedexception) | Class | Exception wrapper used by result adapters to surface errors without directly throwing the original result type. |
| [`ExecutionAbortedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception) | Class | Initializes a new instance of the [`ExecutionAbortedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception) class. |
| [`ExecutionRetryRequestedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionretryrequestedexception) | Class |  |
| [`InvalidMessageTypeException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/invalidmessagetypeexception) | Class | Exception thrown when a message of an invalid type is encountered. |
| [`MultipleHandlerFoundException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/multiplehandlerfoundexception) | Class | Exception thrown when multiple handlers are found for a message that expects only one. |
| [`NoHandlerFoundException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/nohandlerfoundexception) | Class | Exception thrown when no handler is found for a specific message type. |
