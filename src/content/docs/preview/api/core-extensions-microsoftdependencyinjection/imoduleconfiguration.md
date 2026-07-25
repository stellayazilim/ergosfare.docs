---
title: "IModuleConfiguration"
description: "Represents the configuration context for a module."
sidebar:
  label: "IModuleConfiguration"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents the configuration context for a module.
Provides access to the service collection and message registry
associated with the module during setup.

```csharp
public interface IModuleConfiguration
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModuleConfiguration.cs#L11)

## Properties

### `MessageRegistry`

```csharp
IMessageRegistry MessageRegistry { get; }
```

Gets the message registry associated with the module configuration.

**Returns**

[`IMessageRegistry`](/ergosfare.docs/preview/api/core-abstractions-registry/imessageregistry)

### `Services`

```csharp
IServiceCollection Services { get; }
```

Gets the collection of services associated with the module configuration.

**Returns**

[`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)
