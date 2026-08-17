---
title: "EventModuleBuilder"
description: "Provides a builder for selecting the event constructs this container runs from the compiled composition table."
sidebar:
  label: "EventModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection.dll`

Provides a builder for selecting the event constructs this container runs from the
compiled composition table.

```csharp
public class EventModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection/EventModuleBuilder.cs#L18)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Events and the subscribers serving them are registered individually or by
[`Type`](https://learn.microsoft.com/dotnet/api/system.type); what each event's pipeline looks like is decided at compile time.

## Constructors

### `EventModuleBuilder(FrozenCompositionCatalog)`

```csharp
public EventModuleBuilder(FrozenCompositionCatalog compositions)
```

Provides a builder for selecting the event constructs this container runs from the
compiled composition table.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `compositions` | [`FrozenCompositionCatalog`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozencompositioncatalog) | The container's composition catalog, told which constructs this registration selects. |

Events and the subscribers serving them are registered individually or by
[`Type`](https://learn.microsoft.com/dotnet/api/system.type); what each event's pipeline looks like is decided at compile time.

## Methods

### `Register(Type)`

```csharp
public EventModuleBuilder Register(Type eventType)
```

Registers an event construct — an event, or one of the subscribers and interceptors
serving events (their contracts carry the module marker too).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `eventType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to register. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | The type carries pipeline contracts but is not an event construct. |

The module assertion applies to participants, not to messages. A subscriber or
interceptor belongs to a module and registering one in the wrong module is a mistake
worth reporting; a message does not belong to anything — a plain domain type with an
`IEventHandler<T>` written for it is exactly the shape this lane exists to
carry, and it has no marker to assert against. Selecting a type nothing subscribes to
is inert rather than wrong: the catalog only ever asks whether a *participant*
was selected.

### `Register<TEvent>()`

```csharp
public EventModuleBuilder Register<TEvent>() where TEvent : notnull
```

Registers an event construct.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type to register. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.

`notnull`, not [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). The whole publish lane is already declared
over `notnull` — `IEventHandler<TEvent>`, `PublishAsync<TEvent>`,
`FrozenBroadcastDispatch<TEvent>` — because a broadcast carries no result
and needs nothing from `IMessage`. Requiring the marker here was the one place
that forced an Ergosfare reference into the layer declaring a domain event, which is
the wrong direction for a dependency to run.

### `RegisterParticipants(IEnumerable<Type>)`

```csharp
public EventModuleBuilder RegisterParticipants(IEnumerable<Type> participantTypes)
```

Registers a batch of pipeline participants — the bulk path source-generated
registration uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` | The subscriber and interceptor types to register. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.

No module assertion here: the generator has already partitioned its discoveries by
module, and not every participant contract carries the module marker (the modifying
interceptor shapes are declared purely over the core contracts).
[`EventModuleBuilder.Register(Type)`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder#registertype) keeps the assertion, since a hand-written registration
is where a wrong-module type actually surfaces.
