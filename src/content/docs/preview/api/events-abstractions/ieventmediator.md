---
title: "IEventMediator"
description: "Publishes events to their handlers."
sidebar:
  label: "IEventMediator"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Publishes events to their handlers.

```csharp
public interface IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/IEventMediator.cs#L13)

## Remarks

An event reaches every handler registered for it, where a command reaches exactly one —
which is what lets parts of an application react to each other without knowing each
other. Everything a publish needs is passed as an argument; only the three abstract
members carry real work, and the rest are conveniences implemented in terms of them.

## Methods

### `PublishAsync(IEvent, CancellationToken)`

```csharp
ValueTask PublishAsync(IEvent @event, CancellationToken cancellationToken = default)
```

Publishes `event` through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

### `PublishAsync(IEvent, ErgosfareContext, GroupSet?)`

```csharp
ValueTask PublishAsync(IEvent @event, ErgosfareContext context, GroupSet? groups = null)
```

Publishes `event` under an execution context supplied by the caller
— the shape a nested publish uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The context to run under, typically a child opened with `using var scope = context.CreateScope();` and passed as `scope.Context`. The caller owns its lifetime, and cancellation comes from it. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to deliver to; an empty set uses the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

### `PublishAsync(IEvent, GroupSet, CancellationToken)`

```csharp
ValueTask PublishAsync(IEvent @event, GroupSet groups, CancellationToken cancellationToken = default)
```

Publishes `event` to every handler registered for its type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to deliver to; an empty set uses the default group. Reusing a [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) lets the cached pipeline be matched by reference. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

### `PublishAsync<TEvent>(TEvent, CancellationToken)`

```csharp
ValueTask PublishAsync<TEvent>(TEvent @event, CancellationToken cancellationToken = default) where TEvent : notnull
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

### `PublishAsync<TEvent>(TEvent, GroupSet, CancellationToken)`

```csharp
ValueTask PublishAsync<TEvent>(TEvent @event, GroupSet groups, CancellationToken cancellationToken = default) where TEvent : notnull
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
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to deliver to; an empty set uses the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when every handler has run.

When the named type is the event's runtime type — the usual case — the pipeline is
found through a compile-time slot rather than a lookup.
