---
title: "PluginServiceFilterAttribute"
description: "Narrows which pipelines a plugin service's PipelineInvokableAttribute methods reach."
sidebar:
  label: "PluginServiceFilterAttribute"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Narrows which pipelines a plugin service's [`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute)
methods reach. On the service it filters every method; on a method, only that one.

```csharp
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
public sealed class PluginServiceFilterAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/PluginServiceFilterAttribute.cs#L26)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Filtering happens while the pipeline is compiled, so a pipeline the filter excludes
carries no call and no runtime test — the plugin costs nothing there at all. That is what
separates a filter from an `if` at the top of the method.

There are two axes and only two. **Family** comes from [`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module), because
"every command" cannot be expressed as a generic constraint. **Shape** stays with the
constraint on the method itself. Filtering by what a handler injects was considered and
left out: it cannot see transitive dependencies, so a handler reaching a database through
a repository would go uncovered without saying so.

Filters combine: several attributes on one target intersect, and a filter on a method
narrows the service's rather than replacing it.

## Constructors

### `PluginServiceFilterAttribute(Module)`

```csharp
public PluginServiceFilterAttribute(Module modules)
```

Filters by message family.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `modules` | [`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module) | The families to reach. |

### `PluginServiceFilterAttribute(params string[])`

```csharp
public PluginServiceFilterAttribute(params string[] keys)
```

Filters by discovery key, reaching only pipelines whose message carries one of the
given keys.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `keys` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The keys to match, as declared by `[DiscoveryKey]` on the message or its assembly. The empty string is the key an untagged message carries. |

Declaring no key filter is not the same as "every key": it selects the default key
alone, exactly as a key-less `AddGenerated()` does. A keyed construct was
deliberately kept out of default discovery by its author, and a plugin saying nothing
should not put it back in. To reach keyed pipelines, name their keys — adding the
empty string alongside covers both.

## Properties

### `Keys`

```csharp
public string[] Keys { get; }
```

The discovery keys this filter selects. Empty means the filter says nothing about
keys, which selects the default key alone.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)

### `Modules`

```csharp
public Module Modules { get; }
```

The families this filter selects; [`Module.All`](/ergosfare.docs/preview/api/plugins-abstractions/module#all) when it filters by key
instead.

**Returns**

[`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module)
