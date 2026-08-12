---
title: "UnresolvableParticipantException"
description: "Exception thrown when a message's selected frozen composition names a participant that the dispatching container cannot resolve."
sidebar:
  label: "UnresolvableParticipantException"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Exception thrown when a message's selected frozen composition names a participant that
the dispatching container cannot resolve.

```csharp
public class UnresolvableParticipantException : InvalidOperationException, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/UnresolvableParticipantException.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception), [`SystemException`](https://learn.microsoft.com/dotnet/api/system.systemexception), [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

Raised while the pipeline is being built rather than part-way through a dispatch, so no
participant runs before the failure. Nothing is cached for the failed build. Ensure the
module that selected the participant also registers it with dependency injection before
building the container.

## Constructors

### `UnresolvableParticipantException(Type, Type)`

```csharp
public UnresolvableParticipantException(Type messageType, Type participantType)
```

Exception thrown when a message's selected frozen composition names a participant that
the dispatching container cannot resolve.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type whose pipeline could not be built. |
| `participantType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The participant the container cannot resolve. |

Raised while the pipeline is being built rather than part-way through a dispatch, so no
participant runs before the failure. Nothing is cached for the failed build. Ensure the
module that selected the participant also registers it with dependency injection before
building the container.

## Properties

### `MessageType`

```csharp
public Type MessageType { get; }
```

Gets the message type whose pipeline could not be built.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `ParticipantType`

```csharp
public Type ParticipantType { get; }
```

Gets the participant the container cannot resolve.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
