---
title: "WeightAttribute"
description: "Specifies a weight for a class, typically used to influence the execution order or priority of handlers or modules."
sidebar:
  label: "WeightAttribute"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Specifies a weight for a class, typically used to influence the execution order or priority of handlers or modules.

```csharp
[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public class WeightAttribute : Attribute
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Attributes/WeightAttribute.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Constructors

### `WeightAttribute(uint)`

```csharp
public WeightAttribute(uint weight)
```

Specifies a weight for a class, typically used to influence the execution order or priority of handlers or modules.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `weight` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) |  |

## Properties

### `Weight`

```csharp
public uint Weight { get; }
```

Gets the weight assigned to the class.

**Returns**

[`uint`](https://learn.microsoft.com/dotnet/api/system.uint32)
