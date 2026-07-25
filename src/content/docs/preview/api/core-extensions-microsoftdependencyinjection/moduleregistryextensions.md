---
title: "ModuleRegistryExtensions"
description: "Provides extension methods for configuring and registering modules with an IModuleRegistry."
sidebar:
  label: "ModuleRegistryExtensions"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Provides extension methods for configuring and registering modules with an [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry).

```csharp
public static class ModuleRegistryExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ModuleRegistryExtensions.cs#L5)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddCoreModule(IModuleRegistry, Action<IModuleBuilder>)`

```csharp
public static IModuleRegistry AddCoreModule(this IModuleRegistry moduleRegistry, Action<IModuleBuilder> builderAction)
```

Adds the core messaging module to the specified module registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `moduleRegistry` | [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) instance to which the core messaging module will be registered. |
| `builderAction` | `Action<IModuleBuilder>` | An action that configures the core messaging module using a [`CoreModuleBuilder`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/coremodulebuilder). |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) instance, enabling fluent chaining.

### `ForceMemoizedHandlers(IModuleRegistry)`

```csharp
public static IModuleRegistry ForceMemoizedHandlers(this IModuleRegistry moduleRegistry)
```

Restores the pre-v1.2 handler resolution behavior: every handler graph is resolved
once and memoized process-wide, regardless of the handlers' registered DI lifetimes.
This is the fastest dispatch mode, but scoped and transient handler dependencies are
NOT honored — the first resolved instance is reused for all subsequent dispatches.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `moduleRegistry` | [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The module registry being configured. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) instance, enabling fluent chaining.

By default (without this switch) registered lifetimes are honored: messages whose
handlers and interceptors are all singleton-registered use the memoized fast path
automatically, everything else is resolved from the calling scope's provider.
