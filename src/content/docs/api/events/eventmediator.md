---
title: "EventMediator"
description: "The event mediator an application resolves: it holds the scope it was resolved from and the container's publish pipelines."
sidebar:
  label: "EventMediator"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events`](/ergosfare.docs/api/events)  
**Assembly:** `Stella.Ergosfare.Events.dll`

The event mediator an application resolves: it holds the scope it was resolved from and
the container's publish pipelines.

```csharp
public class EventMediator : IPublisher, IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events/EventMediator.cs#L11)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IPublisher`](/ergosfare.docs/api/events-abstractions/ipublisher), [`IEventMediator`](/ergosfare.docs/api/events-abstractions/ieventmediator)

## Methods

### `PublishAsync(IEvent, CancellationToken)`

```csharp
public ValueTask PublishAsync(IEvent @event, CancellationToken cancellationToken = default)
```

Publishes `event` through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event to publish. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `event` is `null`. |

### `PublishAsync(IEvent, ErgosfareContext, GroupSet?)`

```csharp
public ValueTask PublishAsync(IEvent @event, ErgosfareContext context, GroupSet? groups = null)
```

Publishes `event` under an execution context supplied by the caller
— the shape a nested publish uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event to publish. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under, typically a child opened with `using var scope = context.CreateScope();` and passed as `scope.Context`. The caller owns its lifetime, and cancellation comes from it. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to deliver to; an empty set uses the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

### `PublishAsync(IEvent, GroupSet, CancellationToken)`

```csharp
public ValueTask PublishAsync(IEvent @event, GroupSet groups, CancellationToken cancellationToken = default)
```

Publishes `event` to every handler registered for its type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event to publish. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to deliver to; an empty set uses the default group. Reusing a [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) lets the cached pipeline be matched by reference. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

### `PublishAsync<TEvent>(TEvent, CancellationToken)`

```csharp
public ValueTask PublishAsync<TEvent>(TEvent @event, CancellationToken cancellationToken = default) where TEvent : notnull
```

Publishes `event` through its default pipeline, naming its type at
compile time.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event's compile-time type. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event to publish. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `event` is `null`. |

### `PublishAsync<TEvent>(TEvent, GroupSet, CancellationToken)`

```csharp
public ValueTask PublishAsync<TEvent>(TEvent @event, GroupSet groups, CancellationToken cancellationToken = default) where TEvent : notnull
```

Publishes `event` naming its type at compile time, which also
allows any non-null type to be an event.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event's compile-time type. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event to publish. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to deliver to; an empty set uses the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

When the named type is the event's runtime type — the usual case — the pipeline is
found through a compile-time slot rather than a lookup.
