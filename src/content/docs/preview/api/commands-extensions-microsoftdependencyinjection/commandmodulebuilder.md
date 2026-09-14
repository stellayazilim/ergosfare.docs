---
title: "CommandModuleBuilder"
description: "Selects which of the compiled command constructs this container runs."
sidebar:
  label: "CommandModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection.dll`

Selects which of the compiled command constructs this container runs.

```csharp
public sealed class CommandModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection/CommandModuleBuilder.cs#L10)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `CommandModuleBuilder(DispatchPlanCatalog)`

```csharp
public CommandModuleBuilder(DispatchPlanCatalog compositions)
```

Initializes the builder over the container's composition catalog.

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
public CommandModuleBuilder AddGenerated()
```

Applies the compile-time default selection for this module.

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder)

### `AddGenerated(string)`

```csharp
public CommandModuleBuilder AddGenerated(string discoveryKeyPattern)
```

Applies the compile-time selection for a constant discovery-key pattern.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | An exact key or trailing-star prefix. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The same builder.

### `Register(Type)`

```csharp
public CommandModuleBuilder Register(Type type)
```

Registers one command construct.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to register: a command, or one of the handlers and interceptors that serve commands — their contracts carry the module's marker too. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The same builder, so calls can be chained.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | The type does not belong to the command module. |

### `Register<T>()`

```csharp
public CommandModuleBuilder Register<T>() where T : ICommand
```

Registers one command construct.

**Type parameters**

| Name | Description |
| --- | --- |
| `T` | The type to register: a command, or one of the handlers and interceptors that serve commands. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The same builder, so calls can be chained.

### `RegisterParticipants(IEnumerable<Type>)`

```csharp
public CommandModuleBuilder RegisterParticipants(IEnumerable<Type> participantTypes)
```

Registers many participants at once — the path generated registration uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` | The handler and interceptor types to register. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The same builder, so calls can be chained.

Unlike [`CommandModuleBuilder.Register(Type)`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder#registertype) this does not check the module: the generator has
already sorted its discoveries by module, and not every participant contract carries
the marker — the message-replacing interceptor shapes are declared over the core
contracts alone. The check stays on the single-type overload, where a hand-written
registration of the wrong module is what it would catch.
