---
title: "IMessageResolveStrategy"
description: "Interface Stella.Ergosfare.Core.Abstractions.IMessageResolveStrategy in the Ergosfare API reference."
sidebar:
  label: "IMessageResolveStrategy"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

```csharp
public interface IMessageResolveStrategy
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/IMessageResolveStrategies.cs#L4)

## Methods

### `Find(Type)`

```csharp
IMessageDescriptor? Find(Type messageType)
```

Finds a message descriptor for the specified message type from the message registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message to find a descriptor for. |

**Returns**

[`IMessageDescriptor`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/imessagedescriptor) — The message descriptor if found; otherwise, `null`.

The implementation determines the specific rules for matching a message type to a descriptor.
For example, it might look for an exact type match, or it might consider inheritance relationships.
