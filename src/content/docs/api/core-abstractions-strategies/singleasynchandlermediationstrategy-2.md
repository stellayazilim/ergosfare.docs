---
title: "SingleAsyncHandlerMediationStrategy<TMessage, TResult>"
description: "Implements a mediation strategy for a single asynchronous handler."
sidebar:
  label: "SingleAsyncHandlerMediationStrategy<TMessage, TResult>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Strategies`](/ergosfare.docs/api/core-abstractions-strategies)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Implements a mediation strategy for a single asynchronous handler.
Ensures that only one handler is executed for the message, invokes pre- and post-interceptors,
handles exceptions, and applies final interceptors. Supports optional result adaptation.

```csharp
public sealed class SingleAsyncHandlerMediationStrategy<TMessage, TResult> : IMessageMediationStrategy<TMessage, ValueTask<TResult>> where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Strategies/MediationStrategies/SingleAsyncHandlerMediationStrategy%5BTMessage%2CTResult%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message being handled. |
| `TResult` | The type of the result returned by the handler. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IMessageMediationStrategy<TMessage, ValueTask<TResult>>`

## Constructors

### `SingleAsyncHandlerMediationStrategy(IResultAdapterService?)`

```csharp
public SingleAsyncHandlerMediationStrategy(IResultAdapterService? resultAdapterService)
```

Implements a mediation strategy for a single asynchronous handler.
Ensures that only one handler is executed for the message, invokes pre- and post-interceptors,
handles exceptions, and applies final interceptors. Supports optional result adaptation.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `resultAdapterService` | [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice) |  |

## Methods

### `Mediate(TMessage, IMessageDependencies, IExecutionContext, IServiceProvider)`

```csharp
public ValueTask<TResult> Mediate(TMessage message, IMessageDependencies messageDependencies, IExecutionContext context, IServiceProvider serviceProvider)
```

Mediates the message by invoking the single registered handler along with the pre-,
post-, exception- and final-interceptor stages, applying optional result adaptation.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to be handled. May be transformed by pre-interceptors. |
| `messageDependencies` | [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) | The dependencies of the message, including the registered handler and interceptor stages. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this dispatch runs in; handlers and interceptors resolve from it. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous operation, returning the final result after executing the handler and all applicable interceptors.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | Thrown if `messageDependencies` is null. |
| [`MultipleHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/multiplehandlerfoundexception) | Thrown if more than one handler is registered for the message. |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | Thrown if no handler is registered for the message. |

The mediation process follows this sequence:

- With no interceptors registered, the handler is invoked directly on a fast path
and exceptions propagate unchanged.
- Pre-interceptors run via `PreInterceptorInvocationStrategy<TMessage>`;
each may transform the message.
- The main handler runs through its typed contract; the result adapter may surface
a failure carried inside the result as an exception.
- Post-interceptors run via `PostInterceptorInvocationStrategy<TMessage, TResult>`
and may replace the result.
- On exception, `ExceptionInterceptorInvocationStrategy<TMessage, TResult>` runs —
with no exception interceptors registered the exception propagates unchanged; an
[`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) aborts without error.
- `FinalInterceptorInvocationStrategy<TMessage, TResult>` always runs last,
regardless of success or failure.
