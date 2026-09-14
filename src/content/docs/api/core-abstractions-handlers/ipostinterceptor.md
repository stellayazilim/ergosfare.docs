---
title: "IPostInterceptor"
description: "Marks a type as a post-interceptor, for registration and storage."
sidebar:
  label: "IPostInterceptor"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marks a type as a post-interceptor, for registration and storage.

```csharp
public interface IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IPostInterceptor.cs#L13)

## Remarks

The interface declares no members. Post-interceptors are invoked through the typed
member of [`IPostInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ipostinterceptor-2),
[`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpostinterceptor-1) or
[`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpostinterceptor-2).
