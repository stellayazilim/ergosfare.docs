---
title: "IPreInterceptorDescriptor"
description: "Describes a pre-interceptor handler for a message type."
sidebar:
  label: "IPreInterceptorDescriptor"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Describes a pre-interceptor handler for a message type.

```csharp
public interface IPreInterceptorDescriptor : IHandlerDescriptor, IHasMessageType
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IPreInterceptorDescriptor.cs#L12)

## Remarks

Pre-interceptors are invoked before the main handler executes,
allowing for validation, modification of the message, or short-circuiting logic.
This descriptor includes information about the handler type,
the message type it applies to, its weight, and groups.
