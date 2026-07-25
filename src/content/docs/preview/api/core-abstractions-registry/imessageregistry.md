---
title: "IMessageRegistry"
description: "Provides a registry of message descriptors."
sidebar:
  label: "IMessageRegistry"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry`](/ergosfare.docs/preview/api/core-abstractions-registry)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Provides a registry of message descriptors.

```csharp
public interface IMessageRegistry : IReadOnlyCollection<IMessageDescriptor>, IEnumerable<IMessageDescriptor>, IEnumerable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Registry/IMessageRegistry.cs#L14)

## Remarks

The registry maintains a collection of [`IMessageDescriptor`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/imessagedescriptor) instances,
each describing the handlers and interceptors for a specific message type.
It allows for registering new message types and enumerating existing descriptors.

## Methods

### `Register(Type)`

```csharp
void Register(Type type)
```

Registers a new message type in the registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type to register. |

If the type is already registered, this method may update or ignore it depending on the implementation.

### `RegisterDescriptors(IEnumerable<IHandlerDescriptor>)`

```csharp
void RegisterDescriptors(IEnumerable<IHandlerDescriptor> descriptors)
```

Registers pre-built handler descriptors, bypassing reflection-based descriptor
construction entirely.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `descriptors` | `IEnumerable<IHandlerDescriptor>` | The handler descriptors to register. |

This is the injection seam for ahead-of-time registration (e.g. source-generated
code): the caller supplies complete [`IHandlerDescriptor`](/ergosfare.docs/preview/api/core-abstractions-registry-descriptors/ihandlerdescriptor) instances and the
registry only links them to their message types. [`IMessageRegistry.Register(Type)`](/ergosfare.docs/preview/api/core-abstractions-registry/imessageregistry#registertype) remains the
reflection-based fallback; the two may be mixed — a handler type registered through
either path is skipped by the other.
