---
title: "EventModuleBuilder"
description: "Selects which of the compiled event constructs this container runs."
sidebar:
  label: "EventModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection.dll`

Selects which of the compiled event constructs this container runs.

```csharp
public class EventModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection/EventModuleBuilder.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `EventModuleBuilder(DispatchPlanCatalog)`

```csharp
public EventModuleBuilder(DispatchPlanCatalog compositions)
```

Selects which of the compiled event constructs this container runs.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `compositions` | [`DispatchPlanCatalog`](/ergosfare.docs/preview/api/core-abstractions-planning/dispatchplancatalog) | The catalog this builder records the container's selection in. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `compositions` is `null`. |

## Methods

### `AddGenerated()`

```csharp
public EventModuleBuilder AddGenerated()
```

Applies the compile-time default selection for this module.

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder)

### `AddGenerated(string)`

```csharp
public EventModuleBuilder AddGenerated(string discoveryKeyPattern)
```

Applies the compile-time selection for a constant discovery-key pattern.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | An exact key or trailing-star prefix. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The same builder.

### `Register(Type)`

```csharp
public EventModuleBuilder Register(Type eventType)
```

Registers one event construct.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `eventType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to register: an event, or one of the handlers and interceptors that serve events. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The same builder, so calls can be chained.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `eventType` is `null`. |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | The type is a pipeline participant but belongs to another module. |

An event itself needs no marker, so any type is accepted as one. A participant is
held to its module: a type implementing a pipeline contract must also carry
[`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) to be registered here.

### `Register<TEvent>()`

```csharp
public EventModuleBuilder Register<TEvent>() where TEvent : notnull
```

Registers one event construct.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type to register: an event — which may be any non-null type — or one of the handlers and interceptors that serve events. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The same builder, so calls can be chained.

### `RegisterParticipants(IEnumerable<Type>)`

```csharp
public EventModuleBuilder RegisterParticipants(IEnumerable<Type> participantTypes)
```

Registers many participants at once — the path generated registration uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` | The handler and interceptor types to register. |

**Returns**

[`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) — The same builder, so calls can be chained.

Unlike [`EventModuleBuilder.Register(Type)`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder#registertype) this does not check the module: the generator has
already sorted its discoveries by module.
