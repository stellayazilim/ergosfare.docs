---
title: "NoHandlerFoundException"
description: "Exception thrown when nothing will handle a message: either the message type has no descriptor at all, or it has one whose handlers are every one excluded fr…"
sidebar:
  label: "NoHandlerFoundException"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Exception thrown when nothing will handle a message: either the message type has no
descriptor at all, or it has one whose handlers are every one excluded from this
dispatch. The [`Message`](https://learn.microsoft.com/dotnet/api/system.exception.message) says which.

```csharp
public class NoHandlerFoundException : InvalidOperationException, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/NoHandlerFoundException.cs#L14)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception), [`SystemException`](https://learn.microsoft.com/dotnet/api/system.systemexception), [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

Derives from [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) because the second case used to
throw one of those directly, so callers catching it keep catching it. Callers wanting
the specific failure now catch one type for both cases instead of two.

## Constructors

### `NoHandlerFoundException(Type, string)`

```csharp
public NoHandlerFoundException(Type messageType, string message)
```

Initializes the exception with a message describing why nothing will handle
`messageType`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message for which no handler was found. |
| `message` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The message that describes the error. |

### `NoHandlerFoundException(Type)`

```csharp
public NoHandlerFoundException(Type messageType)
```

Initializes the exception for a message type nothing is registered against.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message for which no handler was found. |

## Properties

### `MessageType`

```csharp
public Type MessageType { get; }
```

Gets the type of the message that caused the exception.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
