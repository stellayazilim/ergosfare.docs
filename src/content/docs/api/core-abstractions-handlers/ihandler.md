---
title: "IHandler"
description: "Marks a type as a main message handler, for registration and storage."
sidebar:
  label: "IHandler"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marks a type as a main message handler, for registration and storage.

```csharp
public interface IHandler
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IHandler.cs#L14)

## Remarks

The interface declares no members and the pipeline never invokes anything through it.
Handlers are invoked through the typed member of the contract they implement —
[`IHandler<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ihandler-2), [`IAsyncHandler<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasynchandler-1),
[`IAsyncHandler<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasynchandler-2) or
[`IStreamHandler<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/istreamhandler-2).
