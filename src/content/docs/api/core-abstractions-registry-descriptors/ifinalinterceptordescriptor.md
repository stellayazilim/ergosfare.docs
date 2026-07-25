---
title: "IFinalInterceptorDescriptor"
description: "Represents a descriptor for a final interceptor handler."
sidebar:
  label: "IFinalInterceptorDescriptor"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents a descriptor for a final interceptor handler.

```csharp
public interface IFinalInterceptorDescriptor : IHandlerDescriptor, IHasMessageType, IHasResultType
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IFinalInterceptorDescriptor.cs#L12)

## Remarks

Inherits from [`IHandlerDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ihandlerdescriptor) and [`IHasResultType`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ihasresulttype).
Contains metadata about the final interceptor, such as the handler type,
associated message type, execution groups, weight, and result type.
