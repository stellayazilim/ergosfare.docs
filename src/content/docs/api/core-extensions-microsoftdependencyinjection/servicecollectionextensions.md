---
title: "ServiceCollectionExtensions"
description: "Provides extension methods for registering and configuring the Stella.Ergosfare framework with the ASP.NET Core dependency injection system."
sidebar:
  label: "ServiceCollectionExtensions"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Provides extension methods for registering and configuring the Stella.Ergosfare framework
with the ASP.NET Core dependency injection system.

```csharp
public static class ServiceCollectionExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ServiceCollectionExtensions.cs#L9)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddErgosfare(IServiceCollection, Action<IModuleRegistry>)`

```csharp
public static IServiceCollection AddErgosfare(this IServiceCollection services, Action<IModuleRegistry> ergosfareBuilderAction)
```

Adds and configures the Stella.Ergosfare framework to the application's
[`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `services` | [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) | The [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) to which Stella.Ergosfare services will be added. |
| `ergosfareBuilderAction` | `Action<IModuleRegistry>` | An action that configures the Stella.Ergosfare module registry using an [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry). This allows registration of additional modules and customization of the messaging pipeline. |

**Returns**

[`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) — The same [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) instance, enabling fluent chaining of service registrations.

This method registers:

- The dispatch machinery: the dependencies factory, executor cache and mediator.
- A singleton [`FrozenCompositionCatalog`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencompositioncatalog) — this container's view of the compiled composition table.
- The configured default result adapter, when [`IModuleRegistry.UseDefaultResultAdapter(Type)`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry#usedefaultresultadaptertype) was called.
- All module-defined handlers, interceptors, and services discovered at initialization.

After setting up dependencies, this method invokes `ergosfareBuilderAction`
to allow custom module configuration, then calls [`ModuleRegistry.Initialize()`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/moduleregistry#initialize)
to finalize the setup.
