---
title: "Unit"
description: "The value carried in the result slot of a pipeline that produces no result."
sidebar:
  label: "Unit"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The value carried in the result slot of a pipeline that produces no result.

```csharp
public sealed class Unit
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Unit.cs#L9)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The post-, exception- and final-interceptor stages take a result argument on every path,
including void dispatches. On those paths they receive [`Unit.Value`](/ergosfare.docs/preview/api/core-abstractions/unit#value).

## Fields

### `Value`

```csharp
public static readonly Unit Value
```

The single instance, shared process-wide. A resultless pipeline supplies no other
value, so interceptors may compare against it by reference.

**Returns**

[`Unit`](/ergosfare.docs/preview/api/core-abstractions/unit)
