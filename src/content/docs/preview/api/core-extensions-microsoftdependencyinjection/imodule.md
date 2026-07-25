---
title: "IModule"
description: "Represents a module in an application that can be configured and built."
sidebar:
  label: "IModule"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Represents a module in an application that can be configured and built.

```csharp
public interface IModule
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModule.cs#L6)

## Methods

### `Build(IModuleConfiguration)`

```csharp
void Build(IModuleConfiguration configuration)
```

Builds the module using the provided configuration.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `configuration` | [`IModuleConfiguration`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleconfiguration) | The configuration for the module. |
