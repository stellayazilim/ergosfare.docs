---
title: "IModule"
description: "A unit of registration: one call that adds a set of participants and services to the container."
sidebar:
  label: "IModule"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

A unit of registration: one call that adds a set of participants and services to the
container.

```csharp
public interface IModule
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModule.cs#L11)

## Remarks

The message modules — commands, queries, events — are modules, and so is the facade a
plugin's generator writes.

## Methods

### `Build(IModuleConfiguration)`

```csharp
void Build(IModuleConfiguration configuration)
```

Adds this module's registrations to the container being built.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `configuration` | [`IModuleConfiguration`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleconfiguration) | What the module registers into: the service collection, and the record of what this container selected. |
