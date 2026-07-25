---
title: "EventMediator"
description: "Mediates events through broadcast pipelines closed over each event's runtime type, so handlers are always invoked through their typed members — including for…"
sidebar:
  label: "EventMediator"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Events`](/ergosfare.docs/api/events)  
**Assembly:** `Stella.Ergosfare.Events.dll`

Mediates events through broadcast pipelines closed over each event's runtime type, so
handlers are always invoked through their typed members — including for the
interface-erased [`EventMediator.PublishAsync(IEvent, EventMediationSettings?, CancellationToken)`](/ergosfare.docs/api/events/eventmediator#publishasyncievent-eventmediationsettings-cancellationtoken) overload.

```csharp
public sealed class EventMediator : IPublisher, IEventMediator
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Events/EventMediator.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IPublisher`](/ergosfare.docs/api/events-abstractions/ipublisher), [`IEventMediator`](/ergosfare.docs/api/events-abstractions/ieventmediator)

## Remarks

The event mediator is responsible for broadcasting events to all registered handlers
and orchestrating the event handling pipeline. Unlike commands, which are handled by
exactly one handler, events can be handled by multiple handlers, allowing for decoupled
communication between different parts of the application.
In the publish-subscribe pattern, events represent notifications about something that
has happened in the system. The event mediator helps maintain separation between the
event publishers and the event subscribers (handlers).

## Constructors

### `EventMediator(ActualTypeOrFirstAssignableTypeMessageResolveStrategy, IResultAdapterService?, IMessageMediator)`

```csharp
public EventMediator(ActualTypeOrFirstAssignableTypeMessageResolveStrategy messageResolveStrategy, IResultAdapterService? resultAdapterService, IMessageMediator messageMediator)
```

Mediates events through broadcast pipelines closed over each event's runtime type, so
handlers are always invoked through their typed members — including for the
interface-erased [`EventMediator.PublishAsync(IEvent, EventMediationSettings?, CancellationToken)`](/ergosfare.docs/api/events/eventmediator#publishasyncievent-eventmediationsettings-cancellationtoken) overload.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageResolveStrategy` | [`ActualTypeOrFirstAssignableTypeMessageResolveStrategy`](/ergosfare.docs/api/core-abstractions-strategies/actualtypeorfirstassignabletypemessageresolvestrategy) |  |
| `resultAdapterService` | [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice) |  |
| `messageMediator` | [`IMessageMediator`](/ergosfare.docs/api/core-abstractions/imessagemediator) |  |

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
public ValueTask PublishAsync(IEvent @event, EventMediationSettings? eventMediationSettings = null, CancellationToken cancellationToken = default)
```

Publishes a non-generic event asynchronously through the mediation pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event message to publish. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/api/events-abstractions/eventmediationsettings) | Optional settings for pipeline execution, e.g., filters, items, and exception behavior. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for async execution. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous publish operation.

### `PublishAsync(IEvent, IExecutionContext, EventMediationSettings?)`

```csharp
public ValueTask PublishAsync(IEvent @event, IExecutionContext context, EventMediationSettings? eventMediationSettings = null)
```

Publishes an event under an externally owned execution context — the
nested-dispatch path: a handler opens a scope on its own context and passes the
child here. The caller owns the context's lifetime; cancellation flows from the
context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event message to publish. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The externally owned execution context to publish under. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/api/events-abstractions/eventmediationsettings) | Optional settings for pipeline execution. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync<TEvent>(TEvent, EventMediationSettings?, CancellationToken)`

```csharp
public ValueTask PublishAsync<TEvent>(TEvent @event, EventMediationSettings? eventMediationSettings = null, CancellationToken cancellationToken = default) where TEvent : notnull
```

Publishes a strongly-typed event asynchronously through the mediation pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type being published. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event message to publish. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/api/events-abstractions/eventmediationsettings) | Optional settings for pipeline execution. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for async execution. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous publish operation.
