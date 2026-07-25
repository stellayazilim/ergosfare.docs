---
title: "ActualTypeOrFirstAssignableTypeMessageResolveStrategy"
description: "Implements a message resolve strategy that first attempts to find a descriptor for the exact message type, and if not found, returns the first descriptor for…"
sidebar:
  label: "ActualTypeOrFirstAssignableTypeMessageResolveStrategy"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Strategies`](/ergosfare.docs/preview/api/core-abstractions-strategies)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Implements a message resolve strategy that first attempts to find a descriptor for the exact message type,
and if not found, returns the first descriptor for a type that is assignable from the message type.

```csharp
public sealed class ActualTypeOrFirstAssignableTypeMessageResolveStrategy : IMessageResolveStrategy
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Strategies/MessageResolveStrategies/ActualTypeOrFirstAssignableTypeMessageResolveStrategy.cs#L17)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IMessageResolveStrategy`](/ergosfare.docs/preview/api/core-abstractions/imessageresolvestrategy)

## Remarks

This strategy is useful for handling inheritance and interface implementation in the messaging system.
It allows messages to be handled by handlers registered for their exact type or for any base type or interface
that they implement. When multiple assignable types are found, the first one is returned.
Resolved descriptors are cached per message type; the cache is invalidated whenever the registry grows.

## Constructors

### `ActualTypeOrFirstAssignableTypeMessageResolveStrategy(IMessageRegistry)`

```csharp
public ActualTypeOrFirstAssignableTypeMessageResolveStrategy(IMessageRegistry messageRegistry)
```

Implements a message resolve strategy that first attempts to find a descriptor for the exact message type,
and if not found, returns the first descriptor for a type that is assignable from the message type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageRegistry` | [`IMessageRegistry`](/ergosfare.docs/preview/api/core-abstractions-registry/imessageregistry) |  |

This strategy is useful for handling inheritance and interface implementation in the messaging system.
It allows messages to be handled by handlers registered for their exact type or for any base type or interface
that they implement. When multiple assignable types are found, the first one is returned.
Resolved descriptors are cached per message type; the cache is invalidated whenever the registry grows.

## Methods

### `Find(Type)`

```csharp
public IMessageDescriptor? Find(Type messageType)
```

Finds a message descriptor for the specified message type from the message registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message to find a descriptor for. |

**Returns**

[`IMessageDescriptor`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/imessagedescriptor) — The message descriptor for the exact message type if found; otherwise, the first descriptor for a type that is assignable from the message type; or `null` if no suitable descriptor is found.

For generic types, this method uses the generic type definition for matching.
