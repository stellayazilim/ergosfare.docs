---
title: "IPostInterceptorDescriptor"
description: "Describes a post-interceptor handler for a message type."
sidebar:
  label: "IPostInterceptorDescriptor"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Describes a post-interceptor handler for a message type.

```csharp
public interface IPostInterceptorDescriptor : IHandlerDescriptor, IHasMessageType, IHasResultType
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IPostInterceptorDescriptor.cs#L13)

## Remarks

Post-interceptors are invoked after the main handler executes,
allowing for post-processing, transformations, or side effects.
This descriptor includes information about the handler type,
the message type it applies to, its weight, groups, and result type.
