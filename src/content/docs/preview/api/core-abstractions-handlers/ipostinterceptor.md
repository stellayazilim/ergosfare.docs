---
title: "IPostInterceptor"
description: "Non-generic marker root for post-interceptors."
sidebar:
  label: "IPostInterceptor"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Non-generic marker root for post-interceptors. Carries no members — the pipeline invokes
post-interceptors exclusively through their typed contracts
([`IPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ipostinterceptor-2) /
[`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-1) /
[`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-2));
this root exists for storage typing and registration.

```csharp
public interface IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IPostInterceptor.cs#L12)
