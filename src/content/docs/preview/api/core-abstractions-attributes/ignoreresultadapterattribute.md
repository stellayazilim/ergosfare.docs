---
title: "IgnoreResultAdapterAttribute"
description: "Takes a message type out of result adaptation completely: no annotated adapter, no built-in Result or Result<TValue> adapter, and no application-wide default…"
sidebar:
  label: "IgnoreResultAdapterAttribute"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Takes a message type out of result adaptation completely: no annotated adapter, no
built-in [`Result`](/ergosfare.docs/preview/api/core-abstractions-results/result) or [`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/result-1) adapter, and no
application-wide default adapter applies to it.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP001")]
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface)]
public sealed class IgnoreResultAdapterAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/IgnoreResultAdapterAttribute.cs#L18)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Its pipelines keep the default behavior — a failure is thrown rather than returned —
and the dispatch path never probes the result. Use it to keep individual messages off
the value channel in an application that configures a default adapter.
The attribute is inherited, like [`ResultAdapterAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/resultadapterattribute). Carrying both on
one message, whether declared or inherited, is contradictory and fails the build with
ERGO012; where both reach the runtime, the opt-out wins.
