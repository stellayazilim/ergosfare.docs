---
title: "CommandMediationSettings.CommandMediationFilters"
description: "Represents the filters to be applied during command mediation."
sidebar:
  label: "CommandMediationSettings.CommandMediationFilters"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents the filters to be applied during command mediation.

```csharp
public sealed class CommandMediationSettings.CommandMediationFilters
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/CommandMediationSettings.cs#L36)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Command mediation filters allow for selective inclusion of handlers in the command processing pipeline
based on their metadata such as tags.

## Properties

### `Groups`

```csharp
public IEnumerable<string> Groups { get; set; }
```

Gets or sets the collection of tags used to filter command handlers (pre-handlers, main handlers, and
post-handlers) during mediation.

**Returns**

`IEnumerable<string>`

When tags are specified, only handlers marked with at least one matching tag will participate in command
processing.
If the collection is empty, all registered handlers will be considered.
