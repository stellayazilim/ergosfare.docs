---
title: "GroupAttribute"
description: "Assigns a participant to one or more pipeline groups, so a dispatch can select which participants run."
sidebar:
  label: "GroupAttribute"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Assigns a participant to one or more pipeline groups, so a dispatch can select which
participants run.

```csharp
[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public class GroupAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/GroupAttribute.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

A participant without this attribute belongs to [`GroupAttribute.DefaultGroupName`](/ergosfare.docs/preview/api/core-abstractions-attributes/groupattribute#defaultgroupname) alone.
A dispatch that requests no groups runs the default group; a dispatch that requests
group names runs every participant declaring at least one of them, compared ordinally.
Declaring groups therefore takes a participant out of the default group unless it
lists [`GroupAttribute.DefaultGroupName`](/ergosfare.docs/preview/api/core-abstractions-attributes/groupattribute#defaultgroupname) explicitly.

## Fields

### `DefaultGroupName`

```csharp
public const string DefaultGroupName = "default"
```

The group a participant belongs to when it declares none, and the group a dispatch
runs when it requests none.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

## Constructors

### `GroupAttribute(params string[])`

```csharp
public GroupAttribute(params string[] groupNames)
```

Assigns a participant to one or more pipeline groups, so a dispatch can select which
participants run.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `groupNames` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

A participant without this attribute belongs to [`GroupAttribute.DefaultGroupName`](/ergosfare.docs/preview/api/core-abstractions-attributes/groupattribute#defaultgroupname) alone.
A dispatch that requests no groups runs the default group; a dispatch that requests
group names runs every participant declaring at least one of them, compared ordinally.
Declaring groups therefore takes a participant out of the default group unless it
lists [`GroupAttribute.DefaultGroupName`](/ergosfare.docs/preview/api/core-abstractions-attributes/groupattribute#defaultgroupname) explicitly.

## Properties

### `GroupNames`

```csharp
public string[] GroupNames { get; }
```

The group names declared for this participant.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)
