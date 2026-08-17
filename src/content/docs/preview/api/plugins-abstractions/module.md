---
title: "Module"
description: "The message families a plugin method applies to, as a filter on emission (PluginServiceFilterAttribute)."
sidebar:
  label: "Module"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

The message families a plugin method applies to, as a filter on emission
([`PluginServiceFilterAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pluginservicefilterattribute)).

```csharp
[Flags]
public enum Module
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/Module.cs#L15)

## Remarks

Family is not expressible as a generic constraint — there is no type a plugin can
constrain on to mean "every command" without naming the module's marker — so it gets its
own flag. Shape filtering stays with the constraint: a method declared
`where TMessage : ICacheableQuery` is emitted only into plans whose message
satisfies it.

## Fields

### `All`

```csharp
All = Command | Query | Event
```

Every family — the default when no family filter is declared.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `Command`

```csharp
Command = 1
```

Command dispatch plans, both the resultless and result-returning shapes.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `Event`

```csharp
Event = 4
```

Event broadcast plans.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `None`

```csharp
None = 0
```

No family — a filter that selects nothing.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)

### `Query`

```csharp
Query = 2
```

Query dispatch plans. Streaming queries are named by this family but not yet served
by it: the stream lane has no compiled plan, and a plugin call lives only in a plan
body. A stream dispatch therefore observes nothing until that lane joins the family.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)
