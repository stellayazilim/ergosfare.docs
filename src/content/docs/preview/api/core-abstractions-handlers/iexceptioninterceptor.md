---
title: "IExceptionInterceptor"
description: "Non-generic marker root for exception interceptors."
sidebar:
  label: "IExceptionInterceptor"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Non-generic marker root for exception interceptors. Carries no members — the pipeline
invokes exception interceptors exclusively through their typed contracts
([`IExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iexceptioninterceptor-2) /
[`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-1) /
[`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-2));
this root exists for storage typing and registration.

```csharp
public interface IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionHandler.cs#L12)
