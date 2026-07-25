---
title: "ModuleRegistryExtensions"
description: "Provides extension methods for the ModuleRegistry type to simplify module registration."
sidebar:
  label: "ModuleRegistryExtensions"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection.dll`

Provides extension methods for the [`ModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/moduleregistry) type to simplify module registration.

```csharp
public static class ModuleRegistryExtensions
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection/ModuleRegistryExtensions.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddCommandModule(IModuleRegistry, Action<CommandModuleBuilder>)`

```csharp
public static IModuleRegistry AddCommandModule(this IModuleRegistry moduleRegistry, Action<CommandModuleBuilder> builderAction)
```

Adds a command module to the module registry using the provided builder action.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `moduleRegistry` | [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The module registry to which the command module will be added. |
| `builderAction` | `Action<CommandModuleBuilder>` | An action that configures the command module using a [`CommandModuleBuilder`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection/commandmodulebuilder). |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The `moduleRegistry` with the command module added.
