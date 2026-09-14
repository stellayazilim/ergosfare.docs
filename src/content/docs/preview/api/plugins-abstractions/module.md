---
title: "Module"
description: "The message families a plugin method applies to, used by PluginServiceFilterAttribute."
sidebar:
  label: "Module"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

The message families a plugin method applies to, used by
[`PluginServiceFilterAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pluginservicefilterattribute).

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP002")]
[Flags]
public enum Module
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/Module.cs#L15)

## Remarks

Family needs its own flag because it cannot be said as a generic constraint — there is no
type to constrain on that means "every command" without naming the module's marker.
Filtering by message shape stays with the constraint: a method declared
`where TMessage : ICacheableQuery` reaches only the pipelines whose message
satisfies it.

## Fields

### `All`

```csharp
All = Command | Query | Event
```

Every family — what applies when no family filter is declared.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `Command`

```csharp
Command = 1
```

Command pipelines, both those that return a result and those that do not.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `Event`

```csharp
Event = 4
```

Event broadcast pipelines.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `None`

```csharp
None = 0
```

No family, which selects nothing.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `Query`

```csharp
Query = 2
```

Query pipelines.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

Streaming queries belong to this family by name but are not served by it yet: a
plugin call lives inside a compiled plan, and the streaming path has none. A stream
dispatch therefore reaches no plugin until it does.
