---
title: "IFinalInterceptor"
description: "Non-generic marker root for final interceptors."
sidebar:
  label: "IFinalInterceptor"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Non-generic marker root for final interceptors. Carries no members — the pipeline invokes
final interceptors exclusively through their typed contracts
([`IFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ifinalinterceptor-2) /
[`IAsyncFinalInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncfinalinterceptor-1) /
[`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncfinalinterceptor-2));
this root exists for storage typing and registration.

```csharp
public interface IFinalInterceptor
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IFinalInterceptor.cs#L11)
