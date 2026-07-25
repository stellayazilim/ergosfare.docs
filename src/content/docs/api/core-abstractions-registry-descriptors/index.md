---
title: "Stella.Ergosfare.Core.Abstractions.Registry.Descriptors"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Registry.Descriptors namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Registry.Descriptors` namespace contains 10 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`HandlerDescriptors`](/ergosfare.docs/api/core-abstractions-registry-descriptors/handlerdescriptors) | Class | Factory for pre-built handler descriptors — the construction surface behind [`IMessageRegistry.RegisterDescriptors(IEnumerable<IHandlerDescriptor>)`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry#registerdescriptorsienumerableihandlerdescriptor). Source-generated registration code creates descriptors through these methods with statically known types, bypassing the reflection-based descriptor builders entirely; the values mirror exactly what those builders would have computed for the same handler type (verbatim message types for main handlers, generic-definition-normalized message types for interceptors, [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)-carrier result types for asynchronous handlers). |
| [`IExceptionInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/iexceptioninterceptordescriptor) | Interface | Represents a descriptor for an exception interceptor handler. |
| [`IFinalInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ifinalinterceptordescriptor) | Interface | Represents a descriptor for a final interceptor handler. |
| [`IHandlerDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ihandlerdescriptor) | Interface | Represents metadata about a handler for a specific message type. |
| [`IHasMessageType`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ihasmessagetype) | Interface | Represents an object that is associated with a specific message type. |
| [`IHasResultType`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ihasresulttype) | Interface | Represents an object that produces or is associated with a specific result type. |
| [`IMainHandlerDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/imainhandlerdescriptor) | Interface | Represents the descriptor for a main handler that processes a message and produces a result of a specific type. |
| [`IMessageDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/imessagedescriptor) | Interface | Describes a message type and its associated handler and interceptor descriptors. |
| [`IPostInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ipostinterceptordescriptor) | Interface | Describes a post-interceptor handler for a message type. |
| [`IPreInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ipreinterceptordescriptor) | Interface | Describes a pre-interceptor handler for a message type. |
