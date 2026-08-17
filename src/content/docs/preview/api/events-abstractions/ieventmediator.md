---
title: "IEventMediator"
description: "Represents the mediator interface for publishing events within the application."
sidebar:
  label: "IEventMediator"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents the mediator interface for publishing events within the application.

```csharp
public interface IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/IEventMediator.cs#L22)

## Remarks

The event mediator is responsible for broadcasting events to all registered handlers
    and orchestrating the event handling pipeline. Unlike commands, which are handled by
    exactly one handler, events can be handled by multiple handlers, allowing for decoupled
    communication between different parts of the application.

    Everything a publish can be told is a parameter. A settings object used to carry the
    same three things, and carrying them that way meant allocating one per publish and
    reading it at dispatch time — a shape nothing can be compiled from. The conveniences
    below are default implementations over the full call, so an implementation of this
    interface writes three methods and inherits the rest.

## Methods

### `PublishAsync(IEvent, CancellationToken)`

```csharp
ValueTask PublishAsync(IEvent @event, CancellationToken cancellationToken = default)
```

Publishes an event through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync(IEvent, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask PublishAsync(IEvent @event, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Publishes under an externally owned execution context — the nested-dispatch path: a
handler opens a scope on its own context (`using var scope = context.CreateScope();`)
and passes `scope.Context` here. The caller owns the context's lifetime;
cancellation flows from the context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync(IEvent, GroupSet, CancellationToken)`

```csharp
ValueTask PublishAsync(IEvent @event, GroupSet groups, CancellationToken cancellationToken = default)
```

Publishes under a canonical group filter. Define the set once, statically, and the
cached pipeline matches it on a single reference check;
[`GroupSet.Empty`](/ergosfare.docs/preview/api/core-abstractions/groupset#empty) publishes the default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync(IEvent, IEnumerable<string>?, CancellationToken)`

```csharp
ValueTask PublishAsync(IEvent @event, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Publishes an event to every handler registered for its type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `groups` | `IEnumerable<string>` | The group filter, or `null` for the default pipeline. A reused [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) matches the cached pipeline on a single reference check. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync<TEvent>(TEvent, CancellationToken)`

```csharp
ValueTask PublishAsync<TEvent>(TEvent @event, CancellationToken cancellationToken = default) where TEvent : notnull
```

Typed counterpart of [`IEventMediator.PublishAsync(IEvent, CancellationToken)`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator#publishasyncievent-cancellationtoken).

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `PublishAsync<TEvent>(TEvent, GroupSet, CancellationToken)`

```csharp
ValueTask PublishAsync<TEvent>(TEvent @event, GroupSet groups, CancellationToken cancellationToken = default) where TEvent : notnull
```

Typed counterpart of [`IEventMediator.PublishAsync(IEvent, GroupSet, CancellationToken)`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator#publishasyncievent-groupset-cancellationtoken).

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

### `PublishAsync<TEvent>(TEvent, IEnumerable<string>?, CancellationToken)`

```csharp
ValueTask PublishAsync<TEvent>(TEvent @event, IEnumerable<string>? groups, CancellationToken cancellationToken) where TEvent : notnull
```

Strongly-typed counterpart of
[`IEventMediator.PublishAsync(IEvent, IEnumerable<string>?, CancellationToken)`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator#publishasyncievent-ienumerablestring-cancellationtoken):
when the compile-time type is the event's runtime type, the pipeline comes from a
static-generic slot rather than a dictionary lookup.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
