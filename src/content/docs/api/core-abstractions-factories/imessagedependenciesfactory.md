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

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Factories/IMessageDependenciesFactory.cs#L5)

## Methods

### `Create(Type, IEnumerable<string>)`

```csharp
IMessageDependencies Create(Type messageType, IEnumerable<string> groups)
```

Creates a [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) for the given message type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message. |
| `groups` | `IEnumerable<string>` | The groups to filter handlers by. |

**Returns**

[`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) — A [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) instance for the specified message.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NoHandlerFoundException`](/ergosfare.docs/api/core-abstractions-exceptions/nohandlerfoundexception) | No compiled composition serves the message type, nor any of its ancestors. |

### `Find(Type, IEnumerable<string>)`

```csharp
IMessageDependencies? Find(Type messageType, IEnumerable<string> groups)
```

The non-throwing counterpart of [`IMessageDependenciesFactory.Create(Type, IEnumerable<string>)`](/ergosfare.docs/api/core-abstractions-factories/imessagedependenciesfactory#createtype-ienumerablestring): `null` when no compiled
composition serves the message type or any of its ancestors. Events use it — an
event with no subscribers is a legitimate outcome, not a failure.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message. |
| `groups` | `IEnumerable<string>` | The groups to filter handlers by. |

**Returns**

[`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies)
