---
title: "DiscoveryKeyAttribute"
description: "Gates a registrable construct behind one or more discovery keys: a keyed type is excluded from default discovery (RegisterGenerated()) and registers only whe…"
sidebar:
  label: "DiscoveryKeyAttribute"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Gates a registrable construct behind one or more discovery keys: a keyed type is
excluded from default discovery (`RegisterGenerated()`) and registers only when a
registration call selects one of its keys, e.g. `RegisterGenerated("reporting")`
or `RegisterGenerated("reporting.*")`.

```csharp
[AttributeUsage(AttributeTargets.Assembly|AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface, Inherited = false)]
public sealed class DiscoveryKeyAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Attributes/DiscoveryKeyAttribute.cs#L22)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Untagged types carry the implicit default key (the empty string), which is what the
pattern-less registration calls select. Listing the empty string alongside other keys
(`[DiscoveryKey("", "debug")]`) keeps a type in default discovery while also making
it selectable by key.

Applied to an assembly, the attribute sets the default keys for every registrable type
in that assembly that declares no [`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) of its own —
letting a library tag its whole surface (e.g. a modular-monolith module) in one place.

## Fields

### `DefaultKey`

```csharp
public const string DefaultKey = ""
```

The default discovery key carried by types that declare no
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute): the empty string, selected by the pattern-less
registration calls.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

## Constructors

### `DiscoveryKeyAttribute(params string[])`

```csharp
public DiscoveryKeyAttribute(params string[] keys)
```

Gates a registrable construct behind one or more discovery keys: a keyed type is
excluded from default discovery (`RegisterGenerated()`) and registers only when a
registration call selects one of its keys, e.g. `RegisterGenerated("reporting")`
or `RegisterGenerated("reporting.*")`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `keys` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

Untagged types carry the implicit default key (the empty string), which is what the
pattern-less registration calls select. Listing the empty string alongside other keys
(`[DiscoveryKey("", "debug")]`) keeps a type in default discovery while also making
it selectable by key.

Applied to an assembly, the attribute sets the default keys for every registrable type
in that assembly that declares no [`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) of its own —
letting a library tag its whole surface (e.g. a modular-monolith module) in one place.

## Properties

### `Keys`

```csharp
public string[] Keys { get; }
```

Gets the discovery keys assigned to the type or assembly.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)
