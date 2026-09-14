---
title: "ServiceCollectionExtensions"
description: "Adds Ergosfare to a dependency injection container."
sidebar:
  label: "ServiceCollectionExtensions"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Adds Ergosfare to a dependency injection container.

```csharp
public static class ServiceCollectionExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ServiceCollectionExtensions.cs#L8)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddErgosfare(IServiceCollection, Action<IModuleRegistry>)`

```csharp
public static IServiceCollection AddErgosfare(this IServiceCollection services, Action<IModuleRegistry> ergosfareBuilderAction)
```

Registers Ergosfare and the modules configured in
`ergosfareBuilderAction`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `services` | [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) | The container to add Ergosfare to. |
| `ergosfareBuilderAction` | `Action<IModuleRegistry>` | Configures the registry: which modules to register, and how the framework should behave. |

**Returns**

[`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) — The same collection, so calls can be chained.

This registers the dispatch machinery — the dependencies factory, the pipeline
executors and the mediators — along with this container's view of the compiled
composition table, the default result adapter if one was configured, and every
participant the registered modules named.

The modules are configured first and the registry is finalized afterwards, so
everything registered during configuration is in place before the container is built.
