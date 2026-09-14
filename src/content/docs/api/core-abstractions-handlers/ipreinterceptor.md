---
title: "IPreInterceptor"
description: "Marks a type as a pre-interceptor, for registration and storage."
sidebar:
  label: "IPreInterceptor"
  order: 20
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marks a type as a pre-interceptor, for registration and storage.

```csharp
public interface IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/PreInterceptors/IPreInterceptor.cs#L11)

## Remarks

The interface declares no members. Pre-interceptors are invoked through the typed member
of [`IPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/ipreinterceptor-1) or
[`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpreinterceptor-1).
