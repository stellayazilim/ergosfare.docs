---
title: "AsyncBroadcastMediationStrategy<TMessage>"
description: "Represents a mediation strategy that broadcasts a message asynchronously to all registered handlers of the specified TMessage."
sidebar:
  label: "AsyncBroadcastMediationStrategy<TMessage>"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events`](/ergosfare.docs/preview/api/events)  
**Assembly:** `Stella.Ergosfare.Events.dll`

Represents a mediation strategy that broadcasts a message asynchronously
to all registered handlers of the specified `TMessage`.

```csharp
public sealed class AsyncBroadcastMediationStrategy<TMessage> : IMessageMediationStrategy<TMessage, ValueTask> where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events/AsyncBroadcastMediationStrategy.cs#L32)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message being mediated. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IMessageMediationStrategy<TMessage, ValueTask>`

## Remarks

This strategy ensures that:

- All handlers for the message — including those registered for its
  base types and interfaces — are invoked sequentially, direct registrations first.
- Pre-, post-, exception-, and final-interceptors are executed in the correct order.
- Exceptions are captured and passed to the configured exception interceptors.

Since this strategy is intended for event broadcasting, results are not adapted
(unlike request/response message patterns).

## Constructors

### `AsyncBroadcastMediationStrategy(EventMediationSettings)`

```csharp
public AsyncBroadcastMediationStrategy(EventMediationSettings settings)
```

Represents a mediation strategy that broadcasts a message asynchronously
to all registered handlers of the specified `TMessage`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `settings` | [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings) |  |

This strategy ensures that:

- All handlers for the message — including those registered for its
  base types and interfaces — are invoked sequentially, direct registrations first.
- Pre-, post-, exception-, and final-interceptors are executed in the correct order.
- Exceptions are captured and passed to the configured exception interceptors.

Since this strategy is intended for event broadcasting, results are not adapted
(unlike request/response message patterns).

## Methods

### `Mediate(TMessage, IMessageDependencies, IExecutionContext, IServiceProvider)`

```csharp
public ValueTask Mediate(TMessage message, IMessageDependencies messageDependencies, IExecutionContext context, IServiceProvider serviceProvider)
```

Mediates the given message by broadcasting it sequentially to all registered
handlers: the event's own handlers first, then the covariantly matched ones
(registered against a base type or interface of the event).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to be processed. |
| `messageDependencies` | [`IMessageDependencies`](/ergosfare.docs/preview/api/core-abstractions/imessagedependencies) | The dependencies required for message handling, including the registered handlers and the pre-, post-, exception- and final-interceptor stages. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The current execution context. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this dispatch runs in; handlers and interceptors resolve from it. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A ValueTask representing the asynchronous operation of the mediation process.

Opting a handler out of broad delivery is a group concern: an indirect handler
carrying a non-default `[Group]` only runs when a publish selects its group —
the group filter is applied while the pipeline shape is built.
