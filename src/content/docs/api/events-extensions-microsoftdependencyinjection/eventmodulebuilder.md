---
title: "EventModuleBuilder"
description: "Provides a builder for registering events and their types within the event module."
sidebar:
  label: "EventModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection.dll`

Provides a builder for registering events and their types within the event module.

```csharp
public class EventModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection/EventModuleBuilder.cs#L23)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The [`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) allows registering events individually,
by [`Type`](https://learn.microsoft.com/dotnet/api/system.type), or by scanning assemblies for all types implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

This builder interacts with the [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry) to register event types
so they can participate in the event mediation pipeline.

## Constructors

### `EventModuleBuilder(IMessageRegistry)`

```csharp
public EventModuleBuilder(IMessageRegistry messageRegistry)
```

Provides a builder for registering events and their types within the event module.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageRegistry` | [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry) |  |

The [`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) allows registering events individually,
by [`Type`](https://learn.microsoft.com/dotnet/api/system.type), or by scanning assemblies for all types implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

This builder interacts with the [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry) to register event types
so they can participate in the event mediation pipeline.

## Methods

### `Register(Type)`

```csharp
public EventModuleBuilder Register(Type eventType)
```

Registers an event type in the message registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `eventType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The event type to register. Must implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) |  |

### `Register<TEvent>()`

```csharp
public EventModuleBuilder Register<TEvent>() where TEvent : IEvent
```

Registers a generic event type `TEvent` in the message registry.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type to register. Must implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.

### `RegisterDescriptors(IEnumerable<IHandlerDescriptor>)`

```csharp
public EventModuleBuilder RegisterDescriptors(IEnumerable<IHandlerDescriptor> descriptors)
```

Registers pre-built handler descriptors, bypassing reflection-based descriptor
construction — the registration path used by source-generated code.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `descriptors` | `IEnumerable<IHandlerDescriptor>` | The descriptors to register; every handler type must be an event construct. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | Thrown when a descriptor's handler type is not an event construct. |

### `RegisterFromAssembly(Assembly, string)`

```csharp
public EventModuleBuilder RegisterFromAssembly(Assembly assembly, string discoveryKeyPattern)
```

Registers the assembly's event types whose discovery keys match the given pattern —
an exact key or a trailing-`*` prefix glob. See
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) for the key model.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The assembly to scan for types implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The discovery key pattern to select types by. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.

### `RegisterFromAssembly(Assembly)`

```csharp
public EventModuleBuilder RegisterFromAssembly(Assembly assembly)
```

Registers the assembly's event types that participate in default discovery: types
excluded via [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute) or gated behind a
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) are skipped, mirroring source-generated
`RegisterGenerated()`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The assembly to scan for types implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The current [`EventModuleBuilder`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) instance for fluent chaining.
