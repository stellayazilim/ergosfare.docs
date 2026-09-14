---
title: "IModuleConfiguration"
description: "What a module registers into while the container is being built."
sidebar:
  label: "IModuleConfiguration"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

What a module registers into while the container is being built.

```csharp
public interface IModuleConfiguration
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModuleConfiguration.cs#L9)

## Properties

### `Compositions`

```csharp
DispatchPlanCatalog Compositions { get; }
```

This container's view of the compiled composition table, where a module records the
participants it registered.

**Returns**

[`DispatchPlanCatalog`](/ergosfare.docs/api/core-abstractions-planning/dispatchplancatalog)

### `Services`

```csharp
IServiceCollection Services { get; }
```

The container's service collection.

**Returns**

[`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)
