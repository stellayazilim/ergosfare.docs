---
title: "IExceptionInterceptorDescriptor"
description: "Represents a descriptor for an exception interceptor handler."
sidebar:
  label: "IExceptionInterceptorDescriptor"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents a descriptor for an exception interceptor handler.

```csharp
public interface IExceptionInterceptorDescriptor : IHandlerDescriptor, IHasMessageType, IHasResultType
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IExceptionInterceptorDescriptor.cs#L12)

## Remarks

Inherits from [`IHandlerDescriptor`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/ihandlerdescriptor) and [`IHasResultType`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/ihasresulttype).
Contains metadata about the exception interceptor, such as the handler type,
associated message type, execution groups, weight, and result type.
