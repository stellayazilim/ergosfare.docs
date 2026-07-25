---
title: "IHasMessageType"
description: "Represents an object that is associated with a specific message type."
sidebar:
  label: "IHasMessageType"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents an object that is associated with a specific message type.

```csharp
public interface IHasMessageType
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IHasMessageType.cs#L13)

## Remarks

This interface is typically implemented by handler descriptors or other
components that operate on a specific message type. It exposes the
[`IHasMessageType.MessageType`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ihasmessagetype#messagetype) property so that the message type can be
inspected at runtime.

## Properties

### `MessageType`

```csharp
Type MessageType { get; }
```

Gets the [`Type`](https://learn.microsoft.com/dotnet/api/system.type) of the message associated with this object.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
