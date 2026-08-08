---
title: "IEventMediator"
description: "Represents the mediator interface for publishing events within the application."
sidebar:
  label: "IEventMediator"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents the mediator interface for publishing events within the application.

```csharp
public interface IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/IEventMediator.cs#L14)

## Remarks

The event mediator is responsible for broadcasting events to all registered handlers
and orchestrating the event handling pipeline. Unlike commands, which are handled by
exactly one handler, events can be handled by multiple handlers, allowing for decoupled
communication between different parts of the application.
In the publish-subscribe pattern, events represent notifications about something that
has happened in the system. The event mediator helps maintain separation between the
event publishers and the event subscribers (handlers).

## Methods

### `PublishAsync(IEvent, EventMediationSettings?, CancellationToken)`

```csharp
ValueTask PublishAsync(IEvent @event, EventMediationSettings? eventMediationSettings = null, CancellationToken cancellationToken = default)
```

Asynchronously publishes an event.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to be published. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings) | Optional settings for event mediation that control aspects such as handler filtering and error handling behavior. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation that can be used to cancel the event processing. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task representing the asynchronous event publication operation.

This method broadcasts the event to all registered handlers for the event's type.
The event handling pipeline is executed for each handler, including pre-handlers,
the main handler, post-handlers, and error handlers if exceptions occur.
By default, if no handlers are found for the event, the operation completes successfully
without any action. This behavior can be changed using the [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings).

### `PublishAsync(IEvent, GroupSet, CancellationToken)`

```csharp
ValueTask PublishAsync(IEvent @event, GroupSet groups, CancellationToken cancellationToken = default)
```

Publishes an event under a canonical group filter. With a reused
[`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) (define filters once, statically) the
grouped broadcast plan matches on a single reference check and the call
allocates no settings object. The default implementation routes through the
settings overload, so foreign mediator implementations keep working unchanged.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The canonical group filter; [`GroupSet.Empty`](/ergosfare.docs/preview/api/core-abstractions/groupset#empty) publishes the default pipeline. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync(IEvent, IExecutionContext, EventMediationSettings?)`

```csharp
ValueTask PublishAsync(IEvent @event, IExecutionContext context, EventMediationSettings? eventMediationSettings = null)
```

Publishes an event under an externally owned execution context — the
nested-dispatch path: a handler opens a scope on its own context
(`using var scope = context.CreateScope();`) and passes
`scope.Context` here. The caller owns the context's lifetime;
cancellation flows from the context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The externally owned execution context to publish under. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings) | Optional settings for pipeline execution. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync<TEvent>(TEvent, EventMediationSettings?, CancellationToken)`

```csharp
ValueTask PublishAsync<TEvent>(TEvent @event, EventMediationSettings? eventMediationSettings = null, CancellationToken cancellationToken = default) where TEvent : notnull
```

Asynchronously publishes an event with a specific type.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of the event to be published. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event to be published. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings) | Optional settings for event mediation that control aspects such as handler filtering and error handling behavior. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation that can be used to cancel the event processing. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task representing the asynchronous event publication operation.

This method provides a strongly-typed alternative to the non-generic
[`IEventMediator.PublishAsync(IEvent, EventMediationSettings?, CancellationToken)`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator#publishasyncievent-eventmediationsettings-cancellationtoken) method.
It broadcasts the event to all registered handlers for the event's type.
The event handling pipeline is executed for each handler, including pre-handlers,
the main handler, post-handlers, and error handlers if exceptions occur.
By default, if no handlers are found for the event, the operation completes successfully
without any action. This behavior can be changed using the [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings).

### `PublishAsync<TEvent>(TEvent, GroupSet, CancellationToken)`

```csharp
ValueTask PublishAsync<TEvent>(TEvent @event, GroupSet groups, CancellationToken cancellationToken = default) where TEvent : notnull
```

Strongly-typed counterpart of
[`IEventMediator.PublishAsync(IEvent, GroupSet, CancellationToken)`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator#publishasyncievent-groupset-cancellationtoken).

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of the event to publish. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event to publish. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The canonical group filter. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
