---
title: "CommandMediationSettings"
description: "Represents the configuration settings that control command mediation behavior."
sidebar:
  label: "CommandMediationSettings"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents the configuration settings that control command mediation behavior.

```csharp
public sealed class CommandMediationSettings
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/CommandMediationSettings.cs#L10)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

CommandMediationSettings allows customizing how commands are processed in the pipeline,
including filtering which handlers participate in command processing.
These settings can be provided when sending commands through the ICommandMediator.

## Properties

### `Filters`

```csharp
public CommandMediationSettings.CommandMediationFilters Filters { get; }
```

Gets the filters to be applied during command mediation.

**Returns**

[`CommandMediationSettings.CommandMediationFilters`](/ergosfare.docs/api/commands-abstractions/commandmediationsettings-commandmediationfilters)

Filters determine which handlers participate in the command processing pipeline.

### `Items`

```csharp
public IDictionary<object, object?> Items { get; init; }
```

Gets a key/value collection that can be used to share data within the scope of this execution.

**Returns**

`IDictionary<object, object>`

This collection allows handlers to share data with each other during the execution of a single
mediation operation.
