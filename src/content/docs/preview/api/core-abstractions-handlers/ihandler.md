---
title: "IHandler"
description: "Marker interface identifying message handlers for registration and storage."
sidebar:
  label: "IHandler"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marker interface identifying message handlers for registration and storage. The
pipeline never invokes handlers through this interface — dispatch goes through the
typed members of [`IHandler<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ihandler-2) (synchronous) or
`IAsyncHandler` (asynchronous); the object-typed bridge member was removed with
the v2 executor dispatch.

```csharp
public interface IHandler
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IHandler.cs#L11)
