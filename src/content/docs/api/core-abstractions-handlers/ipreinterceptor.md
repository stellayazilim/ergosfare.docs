---
title: "IPreInterceptor"
description: "Non-generic marker root for pre-interceptors."
sidebar:
  label: "IPreInterceptor"
  order: 20
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Non-generic marker root for pre-interceptors. Carries no members — the pipeline invokes
pre-interceptors exclusively through their typed contracts
([`IPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/ipreinterceptor-1) / [`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpreinterceptor-1));
this root exists for storage typing and registration.

```csharp
public interface IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/PreInterceptors/IPreInterceptor.cs#L9)
