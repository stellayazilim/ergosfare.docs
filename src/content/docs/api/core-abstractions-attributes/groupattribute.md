---
title: "GroupAttribute"
description: "Specifies one or more group names for a class, typically used to categorize handlers, messages, or modules."
sidebar:
  label: "GroupAttribute"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Specifies one or more group names for a class, typically used to categorize handlers, messages, or modules.

```csharp
[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public class GroupAttribute : Attribute
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Attributes/GroupAttribute.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Fields

### `DefaultGroupName`

```csharp
public const string DefaultGroupName = "default"
```

The default group name used when no group is explicitly specified.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

## Constructors

### `GroupAttribute(params string[])`

```csharp
public GroupAttribute(params string[] groupNames)
```

Specifies one or more group names for a class, typically used to categorize handlers, messages, or modules.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `groupNames` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

## Properties

### `GroupNames`

```csharp
public string[] GroupNames { get; }
```

Gets the group names assigned to this class.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)
