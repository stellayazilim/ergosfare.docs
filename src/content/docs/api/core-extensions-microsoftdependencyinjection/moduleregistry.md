---
title: "ModuleRegistry"
description: "Represents a central registry for application modules."
sidebar:
  label: "ModuleRegistry"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents a central registry for application modules.
Handles registration, initialization, and handler discovery for all modules.

```csharp
public class ModuleRegistry : IModuleRegistry
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ModuleRegistry.cs#L21)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry)

## Constructors

### `ModuleRegistry(IServiceCollection, IMessageRegistry, IResultAdapterService)`

```csharp
public ModuleRegistry(IServiceCollection services, IMessageRegistry messageRegistry, IResultAdapterService resultAdapterService)
```

Represents a central registry for application modules.
Handles registration, initialization, and handler discovery for all modules.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `services` | [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) |  |
| `messageRegistry` | [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry) |  |
| `resultAdapterService` | [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice) |  |

## Methods

### `ConfigureResultAdapters(Action<ResultAdapterBuilder>)`

```csharp
public IModuleRegistry ConfigureResultAdapters(Action<ResultAdapterBuilder> builder)
```

Configures the result adapter pipeline using the provided builder action.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `builder` | `Action<ResultAdapterBuilder>` | An action that configures the [`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) with custom adapters. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The current [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) instance for fluent chaining.

### `Initialize()`

```csharp
public void Initialize()
```

Initializes all registered modules, sets up their configurations,
and registers all required handlers and services with the DI container.

### `Register(IModule)`

```csharp
public IModuleRegistry Register(IModule module)
```

Registers a module with the registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `module` | [`IModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodule) | The module to register. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The current [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) instance for fluent chaining.
