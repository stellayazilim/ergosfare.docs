---
title: "ServiceCollectionExtensions"
description: "Provides extension methods for registering and configuring the Stella.Ergosfare framework with the ASP.NET Core dependency injection system."
sidebar:
  label: "ServiceCollectionExtensions"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Provides extension methods for registering and configuring the Stella.Ergosfare framework
with the ASP.NET Core dependency injection system.

```csharp
public static class ServiceCollectionExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ServiceCollectionExtensions.cs#L13)

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
| `ergosfareBuilderAction` | `Action<IModuleRegistry>` | An action that configures the Stella.Ergosfare module registry using an [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry). This allows registration of additional modules and customization of the messaging pipeline. |

**Returns**

[`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) — The same [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) instance, enabling fluent chaining of service registrations.

This method registers:

- A singleton [`IResultAdapterService`](/ergosfare.docs/preview/api/core-abstractions/iresultadapterservice) for result adaptation.
- Transient factories and descriptor builders for message handling.
- A singleton [`IMessageRegistry`](/ergosfare.docs/preview/api/core-abstractions-registry/imessageregistry) for message type discovery.
- All module-defined handlers, interceptors, and services discovered at initialization.

After setting up dependencies, this method invokes `ergosfareBuilderAction`
to allow custom module configuration, then calls [`ModuleRegistry.Initialize()`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/moduleregistry#initialize)
to finalize the setup.
