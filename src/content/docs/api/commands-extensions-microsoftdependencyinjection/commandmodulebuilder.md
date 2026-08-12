---
title: "CommandModuleBuilder"
description: "Builder class for selecting the command constructs this container runs from the compiled composition table."
sidebar:
  label: "CommandModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection.dll`

Builder class for selecting the command constructs this container runs from the
compiled composition table.

```csharp
public sealed class CommandModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection/CommandModuleBuilder.cs#L11)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `CommandModuleBuilder(FrozenCompositionCatalog)`

```csharp
public CommandModuleBuilder(FrozenCompositionCatalog compositions)
```

Initializes a new instance of the [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) class.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `compositions` | [`FrozenCompositionCatalog`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencompositioncatalog) | The container's composition catalog, told which constructs this registration selects. |

## Methods

### `Register(Type)`

```csharp
public CommandModuleBuilder Register(Type type)
```

Registers a command construct — a command, or one of the handlers and
interceptors serving commands (their contracts carry the module marker too).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to register, which must be a command construct. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.

### `Register<T>()`

```csharp
public CommandModuleBuilder Register<T>() where T : ICommand
```

Registers a command construct.

**Type parameters**

| Name | Description |
| --- | --- |
| `T` | The type to register, which must be a command construct. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.

### `RegisterParticipants(IEnumerable<Type>)`

```csharp
public CommandModuleBuilder RegisterParticipants(IEnumerable<Type> participantTypes)
```

Registers a batch of pipeline participants — the bulk path source-generated
registration uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` | The handler and interceptor types to register. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.

No module assertion here: the generator has already partitioned its discoveries
by module, and not every participant contract carries the module marker (the
modifying interceptor shapes are declared purely over the core contracts).
[`CommandModuleBuilder.Register(Type)`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder#registertype) keeps the assertion, since a hand-written
registration is where a wrong-module type actually surfaces.
