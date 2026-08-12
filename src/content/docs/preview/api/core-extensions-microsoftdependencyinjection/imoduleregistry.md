---
title: "IModuleRegistry"
description: "Represents a registry that holds and manages modules, allowing registration and configuration."
sidebar:
  label: "IModuleRegistry"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents a registry that holds and manages modules, allowing registration and configuration.

```csharp
public interface IModuleRegistry
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModuleRegistry.cs#L8)

## Methods

### `Register(IModule)`

```csharp
IModuleRegistry Register(IModule module)
```

Registers a module with the module registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `module` | [`IModule`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imodule) | The module to register. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The instance of the module registry for method chaining.

### `UseDefaultResultAdapter(Type)`

```csharp
IModuleRegistry UseDefaultResultAdapter(Type adapterType)
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
