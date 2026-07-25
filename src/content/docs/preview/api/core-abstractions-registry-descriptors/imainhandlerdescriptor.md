---
title: "IMainHandlerDescriptor"
description: "Represents the descriptor for a main handler that processes a message and produces a result of a specific type."
sidebar:
  label: "IMainHandlerDescriptor"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents the descriptor for a main handler that processes a message
and produces a result of a specific type.

```csharp
public interface IMainHandlerDescriptor : IHandlerDescriptor, IHasMessageType, IHasResultType
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IMainHandlerDescriptor.cs#L13)

## Remarks

This interface combines [`IHandlerDescriptor`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/ihandlerdescriptor) for handler metadata
with [`IHasResultType`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/ihasresulttype) to indicate the type of result the handler produces.
Typically used to register and resolve main handlers in the message handling pipeline.
