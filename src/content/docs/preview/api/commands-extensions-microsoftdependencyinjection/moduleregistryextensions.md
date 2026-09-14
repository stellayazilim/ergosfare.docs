---
title: "ModuleRegistryExtensions"
description: "Adds the command module to a registry."
sidebar:
  label: "ModuleRegistryExtensions"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/commands-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection.dll`

Adds the command module to a registry.

```csharp
public static class ModuleRegistryExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Extensions.MicrosoftDependencyInjection/ModuleRegistryExtensions.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddCommandModule(IModuleRegistry, Action<CommandModuleBuilder>)`

```csharp
public static IModuleRegistry AddCommandModule(this IModuleRegistry moduleRegistry, Action<CommandModuleBuilder> builderAction)
```

Adds the command module, registering the commands
`builderAction` selects.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `moduleRegistry` | [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The registry being configured. |
| `builderAction` | `Action<CommandModuleBuilder>` | Selects which command constructs this container runs. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same registry, so calls can be chained.
