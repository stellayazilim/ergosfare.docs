---
title: "UnresolvableParticipantException"
description: "Thrown when a message's pipeline names a participant that the dispatching container cannot resolve."
sidebar:
  label: "UnresolvableParticipantException"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Thrown when a message's pipeline names a participant that the dispatching container
cannot resolve.

```csharp
public class UnresolvableParticipantException : InvalidOperationException, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/UnresolvableParticipantException.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception), [`SystemException`](https://learn.microsoft.com/dotnet/api/system.systemexception), [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

The failure happens while the pipeline is being built, so no participant runs before
it, and nothing is cached for the failed build. Registering a type in the message
registry does not register it with dependency injection — the module that puts a
participant in the pipeline must also register it with the container.

## Constructors

### `UnresolvableParticipantException(Type, Type)`

```csharp
public UnresolvableParticipantException(Type messageType, Type participantType)
```

Thrown when a message's pipeline names a participant that the dispatching container
cannot resolve.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type whose pipeline could not be built. |
| `participantType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The participant the container cannot resolve. |

The failure happens while the pipeline is being built, so no participant runs before
it, and nothing is cached for the failed build. Registering a type in the message
registry does not register it with dependency injection — the module that puts a
participant in the pipeline must also register it with the container.

## Properties

### `MessageType`

```csharp
public Type MessageType { get; }
```

The message type whose pipeline could not be built.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `ParticipantType`

```csharp
public Type ParticipantType { get; }
```

The participant the container cannot resolve.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
