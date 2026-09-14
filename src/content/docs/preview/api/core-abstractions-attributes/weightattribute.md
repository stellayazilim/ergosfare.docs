---
title: "WeightAttribute"
description: "Sets the invocation order of a participant within its pipeline stage."
sidebar:
  label: "WeightAttribute"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Sets the invocation order of a participant within its pipeline stage.

```csharp
[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public class WeightAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/WeightAttribute.cs#L11)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Participants in a stage run by descending weight, and participants of equal weight run
in ordinal order of their full type name, so ordering is stable across runs. A
participant without this attribute has weight zero.

## Constructors

### `WeightAttribute(uint)`

```csharp
public WeightAttribute(uint weight)
```

Sets the invocation order of a participant within its pipeline stage.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `weight` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) |  |

Participants in a stage run by descending weight, and participants of equal weight run
in ordinal order of their full type name, so ordering is stable across runs. A
participant without this attribute has weight zero.

## Properties

### `Weight`

```csharp
public uint Weight { get; }
```

The weight declared for this participant; higher runs earlier.

**Returns**

[`uint`](https://learn.microsoft.com/dotnet/api/system.uint32)
