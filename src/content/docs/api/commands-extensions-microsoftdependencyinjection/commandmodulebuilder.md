---
title: "CommandModuleBuilder"
description: "Builder class for registering command types in the message registry."
sidebar:
  label: "CommandModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection.dll`

Builder class for registering command types in the message registry.

```csharp
public sealed class CommandModuleBuilder
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection/CommandModuleBuilder.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `CommandModuleBuilder(IMessageRegistry)`

```csharp
public CommandModuleBuilder(IMessageRegistry messageRegistry)
```

Initializes a new instance of the [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) class.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageRegistry` | [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry) | The message registry to which commands will be registered. |

## Methods

### `Register(Type)`

```csharp
public CommandModuleBuilder Register(Type type)
```

Registers a command type for the message registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of command to register, which must implement [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand). |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.

### `Register<T>()`

```csharp
public CommandModuleBuilder Register<T>() where T : ICommand
```

Registers a command type for the message registry.

**Type parameters**

| Name | Description |
| --- | --- |
| `T` | The type of command to register, which must implement [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand). |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.

### `RegisterDescriptors(IEnumerable<IHandlerDescriptor>)`

```csharp
public CommandModuleBuilder RegisterDescriptors(IEnumerable<IHandlerDescriptor> descriptors)
```

Registers pre-built handler descriptors, bypassing reflection-based descriptor
construction — the registration path used by source-generated code.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `descriptors` | `IEnumerable<IHandlerDescriptor>` | The descriptors to register; every handler type must be a command construct. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | Thrown when a descriptor's handler type is not a command construct. |

### `RegisterFromAssembly(Assembly, string)`

```csharp
public CommandModuleBuilder RegisterFromAssembly(Assembly assembly, string discoveryKeyPattern)
```

Registers the assembly's command types whose discovery keys match the given
pattern — an exact key or a trailing-`*` prefix glob. See
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) for the key model.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The assembly from which to register command types. |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The discovery key pattern to select types by. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.

### `RegisterFromAssembly(Assembly)`

```csharp
public CommandModuleBuilder RegisterFromAssembly(Assembly assembly)
```

Registers the assembly's command types that participate in default discovery:
types excluded via [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute) or gated behind a
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) are skipped, mirroring source-generated
`RegisterGenerated()`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The assembly from which to register command types. |

**Returns**

[`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) — The current [`CommandModuleBuilder`](/ergosfare.docs/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder) instance for method chaining.
