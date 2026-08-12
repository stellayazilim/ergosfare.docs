---
title: "Unit"
description: "The single value a pipeline without a result carries in its result slot."
sidebar:
  label: "Unit"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The single value a pipeline without a result carries in its result slot. A void
dispatch produces nothing, but the post-, exception- and final-interceptor stages all
take a result argument — [`Unit.Value`](/ergosfare.docs/api/core-abstractions/unit#value) is what they are handed, on every path.

```csharp
public sealed class Unit
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Unit.cs#L20)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

A reference type on purpose. The result slot travels as `object?` and is cast back
to the pipeline's result type at each stage, so a value-typed stand-in cost a boxing on
the way in and turned an empty slot into a [`NullReferenceException`](https://learn.microsoft.com/dotnet/api/system.nullreferenceexception) on the
way out. One shared instance boxes nothing and casts from `null` harmlessly.

This is the result *representation*, not the completion signal: a void handler
still returns [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask), and so do the mediation strategies. Only what
sits in the slot changed.

## Fields

### `Value`

```csharp
public static readonly Unit Value
```

The one instance, shared process-wide. Interceptors may compare against it by
reference: a resultless pipeline never hands out anything else.

**Returns**

[`Unit`](/ergosfare.docs/api/core-abstractions/unit)
