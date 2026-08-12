---
title: "ModuleRegistry"
description: "Represents a central registry for application modules."
sidebar:
  label: "ModuleRegistry"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents a central registry for application modules.
Handles registration, initialization, and handler discovery for all modules.

```csharp
public class ModuleRegistry : IModuleRegistry
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ModuleRegistry.cs#L22)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry)

## Constructors

### `ModuleRegistry(IServiceCollection, FrozenCompositionCatalog)`

```csharp
public ModuleRegistry(IServiceCollection services, FrozenCompositionCatalog compositions)
```

Represents a central registry for application modules.
Handles registration, initialization, and handler discovery for all modules.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `services` | [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) |  |
| `compositions` | [`FrozenCompositionCatalog`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozencompositioncatalog) |  |

## Methods

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
| `module` | [`IModule`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imodule) | The module to register. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The current [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) instance for fluent chaining.

### `UseDefaultResultAdapter(Type)`

```csharp
public IModuleRegistry UseDefaultResultAdapter(Type adapterType)
```

Configures the application-wide default result adapter: the fallback consulted for
any result slot that binds nothing more specific — no
`[ResultAdapter]` annotation on the message and not a native
`Result`/`Result<T>` carrier. A slot the adapter cannot serve, a
message opting out via `[IgnoreResultAdapter]`, and an application that never
calls this all keep the classic try/catch semantics — adapters are a recommended
win, never a requirement.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The adapter type: a closed type implementing `IResultAdapter<TResult>`, or an open generic definition closed over each served result type (e.g. an adapter family for a foreign `Result<T>`). A public parameterless constructor is required; instances are created per served result type and cached. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The instance of the module registry for method chaining.
