---
title: "IExceptionInterceptor"
description: "Marks a type as an exception interceptor, for registration and storage."
sidebar:
  label: "IExceptionInterceptor"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marks a type as an exception interceptor, for registration and storage.

```csharp
public interface IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionHandler.cs#L13)

## Remarks

The interface declares no members. Exception interceptors are invoked through the typed
member of [`IExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iexceptioninterceptor-2),
[`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-1) or
[`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-2).
