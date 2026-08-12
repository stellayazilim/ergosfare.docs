---
title: "ExcludeFromDiscoveryAttribute"
description: "Excludes a registrable construct from automatic discovery entirely: source-generated registration skips the type, regardless of discovery keys or patterns."
sidebar:
  label: "ExcludeFromDiscoveryAttribute"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Excludes a registrable construct from automatic discovery entirely: source-generated
registration skips the type, regardless of discovery keys or patterns. Explicit
registration (`Register<T>()`, `Register(Type)`) still works.

```csharp
[AttributeUsage(AttributeTargets.Assembly|AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface, Inherited = false)]
public sealed class ExcludeFromDiscoveryAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Attributes/ExcludeFromDiscoveryAttribute.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Applied to an assembly, the attribute removes every type in that assembly from
discovery — for libraries that wire themselves up manually or are never meant to be
scanned.
