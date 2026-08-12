---
title: "IgnoreResultAdapterAttribute"
description: "Opts a message type out of result adaptation entirely: no annotation binding, no built-in Result/Result<TValue> adapter, no configured default adapter — the…"
sidebar:
  label: "IgnoreResultAdapterAttribute"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Opts a message type out of result adaptation entirely: no annotation binding, no
built-in [`Result`](/ergosfare.docs/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1) adapter, no configured
default adapter — the message's pipelines keep the classic try/catch semantics, and
the dispatch path performs no probing at all. The escape hatch for applications that
configure a default adapter but want individual messages off the value channel.

```csharp
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface)]
public sealed class IgnoreResultAdapterAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Attributes/IgnoreResultAdapterAttribute.cs#L18)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Inherited like [`ResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/resultadapterattribute): an annotation on a base message
type covers its derived messages. Declaring both this attribute and
[`ResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/resultadapterattribute) on the same message (own or inherited, in any
combination) is contradictory and fails the build (ERGOSG012); against assemblies
compiled before that rule, the runtime binding lets the opt-out win.
