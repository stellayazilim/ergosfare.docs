---
title: "IMessageDependenciesFactory"
description: "Factory interface for creating IMessageDependencies instances."
sidebar:
  label: "IMessageDependenciesFactory"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Factories`](/ergosfare.docs/api/core-abstractions-factories)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Factory interface for creating [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) instances.

```csharp
public interface IMessageDependenciesFactory
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Factories/IMessageDependenciesFactory.cs#L7)

## Methods

### `Create(Type, IMessageDescriptor, IEnumerable<string>)`

```csharp
IMessageDependencies Create(Type messageType, IMessageDescriptor descriptor, IEnumerable<string> groups)
```

Creates a [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) for the given message type and descriptor.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message. |
| `descriptor` | [`IMessageDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/imessagedescriptor) | The message descriptor containing handler and interceptor information. |
| `groups` | `IEnumerable<string>` | The groups to filter handlers by. |

**Returns**

[`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) — A [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) instance for the specified message.
