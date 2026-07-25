---
title: "CoreModuleBuilder"
description: "Provides a fluent API for registering message types into the IMessageRegistry."
sidebar:
  label: "CoreModuleBuilder"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Provides a fluent API for registering message types into the [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry).

```csharp
public class CoreModuleBuilder : IModuleBuilder
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/CoreModuleBuilder.cs#L14)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder)

## Remarks

The [`CoreModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/coremodulebuilder) is typically used inside the [`CoreModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/coremodule)
to configure which types should be recognized by the framework as messages (commands, queries, events, etc.).

## Constructors

### `CoreModuleBuilder(IMessageRegistry)`

```csharp
public CoreModuleBuilder(IMessageRegistry registry)
```

Provides a fluent API for registering message types into the [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `registry` | [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry) |  |

The [`CoreModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/coremodulebuilder) is typically used inside the [`CoreModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/coremodule)
to configure which types should be recognized by the framework as messages (commands, queries, events, etc.).

## Methods

### `Register(Type)`

```csharp
public IModuleBuilder Register(Type type)
```

Registers the specified type into the [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to register as a message. |

**Returns**

[`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) — The current [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) instance for fluent chaining.

### `Register<T>()`

```csharp
public IModuleBuilder Register<T>()
```

Registers the specified generic type `T` into the [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry).

**Type parameters**

| Name | Description |
| --- | --- |
| `T` | The type to register as a message. |

**Returns**

[`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) — The current [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) instance for fluent chaining.

### `RegisterFromAssembly(Assembly, string)`

```csharp
public IModuleBuilder RegisterFromAssembly(Assembly assembly, string discoveryKeyPattern)
```

Registers the assembly's types whose discovery keys match the given pattern — an
exact key or a trailing-`*` prefix glob. See
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) for the key model.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The assembly whose types should be registered as messages. |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The discovery key pattern to select types by. |

**Returns**

[`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) — The current [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) instance for fluent chaining.

### `RegisterFromAssembly(Assembly)`

```csharp
public IModuleBuilder RegisterFromAssembly(Assembly assembly)
```

Registers the assembly's types that participate in default discovery: types
excluded via [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute) or gated behind a
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) are skipped, mirroring source-generated
`RegisterGenerated()`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The assembly whose types should be registered as messages. |

**Returns**

[`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) — The current [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) instance for fluent chaining.
