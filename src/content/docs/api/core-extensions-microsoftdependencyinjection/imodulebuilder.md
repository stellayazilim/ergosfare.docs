---
title: "IModuleBuilder"
description: "Provides a builder interface for registering types into a module."
sidebar:
  label: "IModuleBuilder"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Provides a builder interface for registering types into a module.
Supports registration of individual types and bulk registration from assemblies.

```csharp
public interface IModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModuleBuilder.cs#L9)

## Methods

### `Register(Type)`

```csharp
IModuleBuilder Register(Type type)
```

Registers the specified type with the module.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The [`Type`](https://learn.microsoft.com/dotnet/api/system.type) to be registered. Must not be `null`. |

**Returns**

[`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) — The current [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) instance to allow for fluent chaining.

### `Register<T>()`

```csharp
IModuleBuilder Register<T>()
```

Registers the specified generic type with the module.

**Type parameters**

| Name | Description |
| --- | --- |
| `T` | The type to be registered. |

**Returns**

[`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) — The current [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) instance to allow for fluent chaining.

### `RegisterFromAssembly(Assembly)`

```csharp
IModuleBuilder RegisterFromAssembly(Assembly assembly)
```

Registers all valid types from the provided assembly with the module.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) to scan for types to register. Must not be `null`. |

**Returns**

[`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) — The current [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) instance to allow for fluent chaining.
