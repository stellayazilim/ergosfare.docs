---
title: "ModuleRegistryExtensions"
description: "Adds the event module to a registry."
sidebar:
  label: "ModuleRegistryExtensions"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/events-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection.dll`

Adds the event module to a registry.

```csharp
public static class ModuleRegistryExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Extensions.MicrosoftDependencyInjection/ModuleRegistryExtensions.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddEventModule(IModuleRegistry, Action<EventModuleBuilder>)`

```csharp
public static IModuleRegistry AddEventModule(this IModuleRegistry registry, Action<EventModuleBuilder> builder)
```

Adds the event module, registering the events `builder` selects.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `registry` | [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The registry being configured. |
| `builder` | `Action<EventModuleBuilder>` | Selects which event constructs this container runs. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same registry, so calls can be chained.
