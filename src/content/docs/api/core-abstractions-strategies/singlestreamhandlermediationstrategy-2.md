---
title: "SingleStreamHandlerMediationStrategy<TMessage, TResult>"
description: "Implements a mediation strategy for a single asynchronous streaming handler."
sidebar:
  label: "SingleStreamHandlerMediationStrategy<TMessage, TResult>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Strategies`](/ergosfare.docs/api/core-abstractions-strategies)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Implements a mediation strategy for a single asynchronous streaming handler.
Ensures that only one handler is executed for the message, invokes pre- and post-interceptors,
handles exceptions, and applies final interceptors. Supports chunked streaming results with optional result adaptation.

```csharp
public sealed class SingleStreamHandlerMediationStrategy<TMessage, TResult> : IMessageMediationStrategy<TMessage, IAsyncEnumerable<TResult>> where TMessage : notnull
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Strategies/MediationStrategies/SingleStreamHandlerMediationStrategy%5BTMessage%2C%20TResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message being handled. |
| `TResult` | The type of the elements returned by the asynchronous stream. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IMessageMediationStrategy<TMessage, IAsyncEnumerable<TResult>>`

## Constructors

### `SingleStreamHandlerMediationStrategy(IResultAdapterService?, CancellationToken)`

```csharp
public SingleStreamHandlerMediationStrategy(IResultAdapterService? resultAdapterService, CancellationToken cancellationToken)
```

Implements a mediation strategy for a single asynchronous streaming handler.
Ensures that only one handler is executed for the message, invokes pre- and post-interceptors,
handles exceptions, and applies final interceptors. Supports chunked streaming results with optional result adaptation.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `resultAdapterService` | [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

## Methods

### `Mediate(TMessage, IMessageDependencies, IExecutionContext, IServiceProvider)`

```csharp
public IAsyncEnumerable<TResult> Mediate(TMessage message, IMessageDependencies messageDependencies, IExecutionContext context, IServiceProvider serviceProvider)
```

Mediates the message by invoking the streaming handler along with pre-, post-, exception-, and final interceptors.
Supports chunked streaming results with early abortion or exception handling.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to be handled. |
| `messageDependencies` | [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) | The dependencies of the message, including the registered handlers and interceptors. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this dispatch runs in; handlers and interceptors resolve from it. |

**Returns**

`IAsyncEnumerable<TResult>` — An [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) representing the asynchronous stream of results produced by the handler.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`MultipleHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/multiplehandlerfoundexception) | Thrown if more than one handler is registered for the message. |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | Thrown if no handler is registered for the message. |
