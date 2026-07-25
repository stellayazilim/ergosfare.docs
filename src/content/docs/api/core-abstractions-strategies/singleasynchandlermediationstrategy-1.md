---
title: "SingleAsyncHandlerMediationStrategy<TMessage>"
description: "Represents a mediation strategy that processes a message through a single asynchronous handler."
sidebar:
  label: "SingleAsyncHandlerMediationStrategy<TMessage>"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Strategies`](/ergosfare.docs/api/core-abstractions-strategies)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents a mediation strategy that processes a message through a single asynchronous handler.

```csharp
public sealed class SingleAsyncHandlerMediationStrategy<TMessage> : IMessageMediationStrategy<TMessage, ValueTask> where TMessage : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Strategies/MediationStrategies/SingleAsyncHandlerMediationStrategy%5BTMessage%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message being mediated. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IMessageMediationStrategy<TMessage, ValueTask>`

## Remarks

This strategy ensures that only one handler is registered for the message type and then:
1. Executes pre-handlers.
2. Delegates the message processing to the registered handler.
3. Executes post-handlers.
In case of any exception during the process, it delegates the error handling to the registered error handlers.

## Constructors

### `SingleAsyncHandlerMediationStrategy(IResultAdapterService?)`

```csharp
public SingleAsyncHandlerMediationStrategy(IResultAdapterService? resultAdapterService)
```

Represents a mediation strategy that processes a message through a single asynchronous handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `resultAdapterService` | [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice) |  |

This strategy ensures that only one handler is registered for the message type and then:
1. Executes pre-handlers.
2. Delegates the message processing to the registered handler.
3. Executes post-handlers.
In case of any exception during the process, it delegates the error handling to the registered error handlers.

## Methods

### `Mediate(TMessage, IMessageDependencies, IExecutionContext, IServiceProvider)`

```csharp
public ValueTask Mediate(TMessage message, IMessageDependencies messageDependencies, IExecutionContext context, IServiceProvider serviceProvider)
```

Mediates a message by executing the appropriate handler and orchestrating the handling pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to be mediated. |
| `messageDependencies` | [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) | The dependencies required for message handling, including the handler and the pre-, post-, exception- and final-interceptor stages. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The context in which the mediation is executed, providing access to cancellation tokens, shared data, and other execution-related information. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this dispatch runs in; handlers and interceptors resolve from it. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task representing the asynchronous mediation operation.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`MultipleHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/multiplehandlerfoundexception) | Thrown when more than one handler is found for the message type. |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | Thrown when no handler is registered for the message type. |

Pre-interceptors, the main handler and post-interceptors run in sequence; with no
interceptors registered the handler is invoked directly on a fast path. If an
exception occurs, the exception interceptors run; final interceptors always run.
An [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) aborts the mediation without error.
