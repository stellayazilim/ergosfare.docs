---
title: "DiscoveryKeyAttribute"
description: "Puts a type behind one or more discovery keys, so it registers only when a registration call asks for one of them."
sidebar:
  label: "DiscoveryKeyAttribute"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Puts a type behind one or more discovery keys, so it registers only when a registration
call asks for one of them.

```csharp
[AttributeUsage(AttributeTargets.Assembly|AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface, Inherited = false)]
public sealed class DiscoveryKeyAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Attributes/DiscoveryKeyAttribute.cs#L20)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

A keyed type is left out of key-less discovery (`AddGenerated()`) and picked
up by `AddGenerated("reporting")` or by a prefix pattern such as
`AddGenerated("reporting.*")`. To keep a type in key-less discovery while
still making it selectable, list [`DiscoveryKeyAttribute.DefaultKey`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute#defaultkey) among its keys —
`[DiscoveryKey("", "debug")]`.

Applied to an assembly, the attribute supplies the keys for every type in it that
declares no keys of its own.

## Fields

### `DefaultKey`

```csharp
public const string DefaultKey = ""
```

The key a type carries when it declares none — the empty string, which is what
key-less registration calls select.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

## Constructors

### `DiscoveryKeyAttribute(params string[])`

```csharp
public DiscoveryKeyAttribute(params string[] keys)
```

Puts a type behind one or more discovery keys, so it registers only when a registration
call asks for one of them.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `keys` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

A keyed type is left out of key-less discovery (`AddGenerated()`) and picked
up by `AddGenerated("reporting")` or by a prefix pattern such as
`AddGenerated("reporting.*")`. To keep a type in key-less discovery while
still making it selectable, list [`DiscoveryKeyAttribute.DefaultKey`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute#defaultkey) among its keys —
`[DiscoveryKey("", "debug")]`.

Applied to an assembly, the attribute supplies the keys for every type in it that
declares no keys of its own.

## Properties

### `Keys`

```csharp
public string[] Keys { get; }
```

The discovery keys declared for this type or assembly.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)
