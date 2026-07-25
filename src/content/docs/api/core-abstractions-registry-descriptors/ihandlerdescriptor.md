---
title: "IHandlerDescriptor"
description: "Represents metadata about a handler for a specific message type."
sidebar:
  label: "IHandlerDescriptor"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents metadata about a handler for a specific message type.

```csharp
public interface IHandlerDescriptor : IHasMessageType
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IHandlerDescriptor.cs#L17)

## Remarks

Handler descriptors provide information about:

- Weight: determines the order of execution relative to other handlers.
- Groups: execution groups that this handler belongs to.
- HandlerType: the concrete type of the handler.

Inherits from [`IHasMessageType`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ihasmessagetype) to expose the associated message type.

## Properties

### `Groups`

```csharp
IReadOnlyCollection<string> Groups { get; }
```

Gets the collection of execution groups this handler belongs to.

**Returns**

`IReadOnlyCollection<string>`

### `HandlerType`

```csharp
Type HandlerType { get; }
```

Gets the concrete type of the handler. Public constructors are preserved under
trimming so the type can be activated by the DI container.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `Weight`

```csharp
uint Weight { get; }
```

Gets the weight of the handler, used for ordering execution.

**Returns**

[`uint`](https://learn.microsoft.com/dotnet/api/system.uint32)
