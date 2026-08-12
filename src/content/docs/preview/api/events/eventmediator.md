---
title: "EventMediator"
description: "Mediates events through broadcast pipelines closed over each event's runtime type, so handlers are always invoked through their typed members — including for…"
sidebar:
  label: "EventMediator"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Events`](/ergosfare.docs/preview/api/events)  
**Assembly:** `Stella.Ergosfare.Events.dll`

Mediates events through broadcast pipelines closed over each event's runtime type, so
handlers are always invoked through their typed members — including for the
interface-erased [`EventMediator.PublishAsync(IEvent, EventMediationSettings?, CancellationToken)`](/ergosfare.docs/preview/api/events/eventmediator#publishasyncievent-eventmediationsettings-cancellationtoken) overload.

```csharp
public class EventMediator : IPublisher, IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events/EventMediator.cs#L18)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IPublisher`](/ergosfare.docs/preview/api/events-abstractions/ipublisher), [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator)

## Remarks

Unsealed so the DI registration can bind the engine-backed constructor through a
single-constructor derived shape; the facade carries no state a derived type could
corrupt.

## Constructors

### `EventMediator(MessageDispatchEngine, IServiceProvider)`

```csharp
public EventMediator(MessageDispatchEngine engine, IServiceProvider serviceProvider)
```

Publishes go straight to the process-wide engine's broadcast plan with
`serviceProvider` as the handler-resolution scope, making the
facade the only object built per resolution.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `engine` | [`MessageDispatchEngine`](/ergosfare.docs/preview/api/core/messagedispatchengine) | The singleton dispatch engine. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this facade serves. |

## Methods

### `PublishAsync(IEvent, ErgosfareContext, EventMediationSettings?)`

```csharp
public ValueTask PublishAsync(IEvent @event, ErgosfareContext context, EventMediationSettings? eventMediationSettings = null)
```

Publishes an event under an externally owned execution context — the
nested-dispatch path: a handler opens a scope on its own context and passes the
child here. The caller owns the context's lifetime; cancellation flows from the
context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event message to publish. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The externally owned execution context to publish under. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings) | Optional settings for pipeline execution. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync(IEvent, EventMediationSettings?, CancellationToken)`

```csharp
public ValueTask PublishAsync(IEvent @event, EventMediationSettings? eventMediationSettings = null, CancellationToken cancellationToken = default)
```

Publishes a non-generic event asynchronously through the mediation pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event message to publish. |
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings) | Optional settings for pipeline execution, e.g., filters, items, and exception behavior. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for async execution. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous publish operation.

### `PublishAsync(IEvent, GroupSet, CancellationToken)`

```csharp
public ValueTask PublishAsync(IEvent @event, GroupSet groups, CancellationToken cancellationToken = default)
```

Publishes an event under a canonical group filter — no settings object, and with a
reused [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) the grouped broadcast plan matches on a single
reference check. An empty set publishes the default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

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
| `eventMediationSettings` | [`EventMediationSettings`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings) | Optional settings for pipeline execution. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for async execution. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous publish operation.

### `PublishAsync<TEvent>(TEvent, GroupSet, CancellationToken)`

```csharp
public ValueTask PublishAsync<TEvent>(TEvent @event, GroupSet groups, CancellationToken cancellationToken = default) where TEvent : notnull
```

Strongly-typed counterpart of
[`EventMediator.PublishAsync(IEvent, GroupSet, CancellationToken)`](/ergosfare.docs/preview/api/events/eventmediator#publishasyncievent-groupset-cancellationtoken); the invoker comes
from the static-generic holder when the runtime type is exactly
`TEvent`.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
