---
title: "CoreModule"
description: "Represents the core module of the framework, responsible for configuring and registering core message types into the message registry."
sidebar:
  label: "CoreModule"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents the core module of the framework, responsible for configuring
and registering core message types into the message registry.

```csharp
public sealed class CoreModule : IModule
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/CoreModule.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IModule`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imodule)

## Remarks

The [`CoreModule`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/coremodule) acts as an entry point for bootstrapping the system.
It delegates the module building process to a provided [`Action<T>`](https://learn.microsoft.com/dotnet/api/system.action-1)
using a [`CoreModuleBuilder`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/coremodulebuilder).

## Constructors

### `CoreModule(Action<IModuleBuilder>)`

```csharp
public CoreModule(Action<IModuleBuilder> builder)
```

Represents the core module of the framework, responsible for configuring
and registering core message types into the message registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `builder` | `Action<IModuleBuilder>` |  |

The [`CoreModule`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/coremodule) acts as an entry point for bootstrapping the system.
It delegates the module building process to a provided [`Action<T>`](https://learn.microsoft.com/dotnet/api/system.action-1)
using a [`CoreModuleBuilder`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/coremodulebuilder).

## Methods

### `Build(IModuleConfiguration)`

```csharp
public void Build(IModuleConfiguration configuration)
```

Builds the module by invoking the provided builder delegate with a new
[`CoreModuleBuilder`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/coremodulebuilder) instance configured with the current message registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `configuration` | [`IModuleConfiguration`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleconfiguration) | The module configuration providing access to the message registry and other options. |
