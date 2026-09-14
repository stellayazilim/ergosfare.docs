---
title: "ExcludeFromDiscoveryAttribute"
description: "Keeps a type out of automatic discovery."
sidebar:
  label: "ExcludeFromDiscoveryAttribute"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Keeps a type out of automatic discovery. Generated registration skips it whatever
discovery key or pattern is requested.

```csharp
[AttributeUsage(AttributeTargets.Assembly|AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface, Inherited = false)]
public sealed class ExcludeFromDiscoveryAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/ExcludeFromDiscoveryAttribute.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Explicit registration is unaffected: `Register<T>()` and
`Register(Type)` still register the type. Applied to an assembly, the attribute
excludes every type in it.
