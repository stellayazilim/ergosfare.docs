---
title: "IFinalInterceptor"
description: "Marks a type as a final interceptor, for registration and storage."
sidebar:
  label: "IFinalInterceptor"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marks a type as a final interceptor, for registration and storage.

```csharp
public interface IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IFinalInterceptor.cs#L12)

## Remarks

The interface declares no members. Final interceptors are invoked through the typed
member of [`IFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ifinalinterceptor-2),
[`IAsyncFinalInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncfinalinterceptor-1) or
[`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncfinalinterceptor-2).
