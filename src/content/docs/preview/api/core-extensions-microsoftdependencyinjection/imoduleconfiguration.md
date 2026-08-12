---
title: "IModuleConfiguration"
description: "Represents the configuration context for a module."
sidebar:
  label: "IModuleConfiguration"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents the configuration context for a module.
Provides access to the service collection and the composition catalog
associated with the module during setup.

```csharp
public interface IModuleConfiguration
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModuleConfiguration.cs#L11)

## Properties

### `Compositions`

```csharp
FrozenCompositionCatalog Compositions { get; }
```

Gets this container's view of the frozen composition table — the selection
surface registration records what the application actually registered into.

**Returns**

[`FrozenCompositionCatalog`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozencompositioncatalog)

### `Services`

```csharp
IServiceCollection Services { get; }
```

Gets the collection of services associated with the module configuration.

**Returns**

[`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)
