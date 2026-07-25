---
title: "IHasResultType"
description: "Represents an object that produces or is associated with a specific result type."
sidebar:
  label: "IHasResultType"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents an object that produces or is associated with a specific result type.

```csharp
public interface IHasResultType
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IHasResultType.cs#L11)

## Remarks

This interface is typically implemented by handler descriptors or interceptors
that have a specific [`IHasResultType.ResultType`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/ihasresulttype#resulttype) for the output of their operation.

## Properties

### `ResultType`

```csharp
Type ResultType { get; }
```

Gets the [`Type`](https://learn.microsoft.com/dotnet/api/system.type) of the result produced or handled by this object.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
