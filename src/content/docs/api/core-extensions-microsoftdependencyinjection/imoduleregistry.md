---
title: "IModuleRegistry"
description: "Represents a registry that holds and manages modules, allowing registration and configuration."
sidebar:
  label: "IModuleRegistry"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents a registry that holds and manages modules, allowing registration and configuration.

```csharp
public interface IModuleRegistry
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModuleRegistry.cs#L5)

## Methods

### `ConfigureResultAdapters(Action<ResultAdapterBuilder>)`

```csharp
IModuleRegistry ConfigureResultAdapters(Action<ResultAdapterBuilder> builder)
```

Configures result adapters for this module registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `builder` | `Action<ResultAdapterBuilder>` | A delegate used to build and configure result adapters. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The instance of the module registry for method chaining.

### `Register(IModule)`

```csharp
IModuleRegistry Register(IModule module)
```

Registers a module with the module registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `module` | [`IModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodule) | The module to register. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The instance of the module registry for method chaining.
