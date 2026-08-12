---
title: "ModuleRegistryExtensions"
description: "Provides extension methods for registering the event module in an IModuleRegistry."
sidebar:
  label: "ModuleRegistryExtensions"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection.dll`

Provides extension methods for registering the event module in an [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry).

```csharp
public static class ModuleRegistryExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection/ModuleRegistryExtensions.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddEventModule(IModuleRegistry, Action<EventModuleBuilder>)`

```csharp
public static IModuleRegistry AddEventModule(this IModuleRegistry registry, Action<EventModuleBuilder> builder)
```

Adds the `EventModule` to the module registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `registry` | [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The module registry to which the event module will be added. |
| `builder` | `Action<EventModuleBuilder>` | An action that configures the [`EventModuleBuilder`](/ergosfare.docs/preview/api/events-extensions-microsoftdependencyinjection/eventmodulebuilder) by selecting event participants from the compile-time frozen composition table. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) instance for fluent chaining.
