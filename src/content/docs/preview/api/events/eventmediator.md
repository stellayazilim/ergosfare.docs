---
title: "EventMediator"
description: "Mediates events through frozen publish pipelines closed over each event's runtime type, so handlers are always invoked through their typed members — includin…"
sidebar:
  label: "EventMediator"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events`](/ergosfare.docs/preview/api/events)  
**Assembly:** `Stella.Ergosfare.Events.dll`

Mediates events through frozen publish pipelines closed over each event's runtime type,
so handlers are always invoked through their typed members — including for the
interface-erased [`EventMediator.PublishAsync(IEvent, IEnumerable<string>?, CancellationToken)`](/ergosfare.docs/preview/api/events/eventmediator#publishasyncievent-ienumerablestring-cancellationtoken) overload.

```csharp
public class EventMediator : IPublisher, IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events/EventMediator.cs#L28)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IPublisher`](/ergosfare.docs/preview/api/events-abstractions/ipublisher), [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator)

## Remarks

Unsealed so the DI registration can bind the engine-backed constructor through a
single-constructor derived shape; the facade carries no state a derived type could
corrupt.

Every publish entry is one body: guard the runtime type, read the frozen pipeline's
slot, execute pooled. The entries deliberately do not relay through each other — each
generic entry a caller's interface dispatch lands on carries the complete fast path,
because every relay frame between the facade and the pipeline is a measured per-publish
cost the pipeline itself never earns back.

## Constructors

### `EventMediator(MessageDispatchEngine, IServiceProvider)`

```csharp
public EventMediator(MessageDispatchEngine engine, IServiceProvider serviceProvider)
```

Publishes go straight to the process-wide engine's broadcast table with
`serviceProvider` as the handler-resolution scope, making the
facade the only object built per resolution.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `engine` | [`MessageDispatchEngine`](/ergosfare.docs/preview/api/core/messagedispatchengine) | The singleton dispatch engine. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this facade serves. |

## Methods

### `PublishAsync(IEvent, CancellationToken)`

```csharp
public ValueTask PublishAsync(IEvent @event, CancellationToken cancellationToken = default)
```

Publishes an event through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

The conveniences are declared here as well as on the interface. They used to be
extension methods, which a concrete-typed receiver finds; a default interface method is
not, so carrying them only on the interface would have broken every call made through
this class. Each carries the full body — see the class remarks.

### `PublishAsync(IEvent, ErgosfareContext, IEnumerable<string>?)`

```csharp
public ValueTask PublishAsync(IEvent @event, ErgosfareContext context, IEnumerable<string>? groups = null)
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
public ValueTask PublishAsync(IEvent @event, GroupSet groups, CancellationToken cancellationToken = default)
```

Publishes under a canonical group filter.

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
public ValueTask PublishAsync(IEvent @event, IEnumerable<string>? groups, CancellationToken cancellationToken)
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
public ValueTask PublishAsync<TEvent>(TEvent @event, CancellationToken cancellationToken = default) where TEvent : notnull
```

Typed counterpart of [`EventMediator.PublishAsync(IEvent, CancellationToken)`](/ergosfare.docs/preview/api/events/eventmediator#publishasyncievent-cancellationtoken).

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
public ValueTask PublishAsync<TEvent>(TEvent @event, GroupSet groups, CancellationToken cancellationToken = default) where TEvent : notnull
```

Typed counterpart of the canonical group-filter overload.

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
public ValueTask PublishAsync<TEvent>(TEvent @event, IEnumerable<string>? groups, CancellationToken cancellationToken) where TEvent : notnull
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
