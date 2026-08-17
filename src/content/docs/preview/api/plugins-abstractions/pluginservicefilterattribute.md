---
title: "PluginServiceFilterAttribute"
description: "Narrows which dispatch plans a plugin service's PipelineInvokableAttribute methods are emitted into."
sidebar:
  label: "PluginServiceFilterAttribute"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Narrows which dispatch plans a plugin service's [`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute)
methods are emitted into. Applied to the service, it filters every method on it; applied
to a method, only that one.

```csharp
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
public sealed class PluginServiceFilterAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/PluginServiceFilterAttribute.cs#L27)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Filtering is an emission-time decision, so a plan the filter excludes carries no call and
no runtime check — the plugin costs exactly nothing there. This is the difference between
a filter and an `if` at the top of the method body.

Two axes, deliberately only two. **Family** comes from [`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module), because
"every command" cannot be said as a generic constraint. **Shape** stays with the
constraint on the method itself. A third axis — filtering by what the handler injects —
was considered and left out: it cannot see transitive dependencies, so a handler reaching
the database through a repository would silently go uncovered.

Filters stack: several attributes on the same target intersect, and a filter on the
method narrows the one on the service rather than replacing it.

## Constructors

### `PluginServiceFilterAttribute(Module)`

```csharp
public PluginServiceFilterAttribute(Module modules)
```

Filters by message family.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `modules` | [`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module) | The families to emit into. |

### `PluginServiceFilterAttribute(params string[])`

```csharp
public PluginServiceFilterAttribute(params string[] keys)
```

Filters by discovery key: the plugin is emitted only into plans whose message carries
one of the given keys.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `keys` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The discovery keys to match, as declared by `[DiscoveryKey]` on the message or its assembly. The empty string is the default key that untagged messages carry. |

Declaring no key filter is **not** "every key": it selects the default key alone,
exactly as a pattern-less `RegisterGenerated()` does. A keyed construct is opted
out of default discovery by its author, and a plugin should not opt it back in by
saying nothing. To cover keyed plans, name their keys — or include the empty string
alongside them to cover both.

## Properties

### `Keys`

```csharp
public string[] Keys { get; }
```

The discovery keys this filter selects; empty when the filter says nothing about
keys, which selects the default key alone.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)

### `Modules`

```csharp
public Module Modules { get; }
```

The families this filter selects; [`Module.All`](/ergosfare.docs/preview/api/plugins-abstractions/module#all) when unfiltered.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)
