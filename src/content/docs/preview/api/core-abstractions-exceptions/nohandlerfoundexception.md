---
title: "NoHandlerFoundException"
description: "Thrown when nothing will handle a message: either no handler is registered for its type, or the handlers that are registered are all filtered out of this dis…"
sidebar:
  label: "NoHandlerFoundException"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Thrown when nothing will handle a message: either no handler is registered for its
type, or the handlers that are registered are all filtered out of this dispatch.

```csharp
public class NoHandlerFoundException : InvalidOperationException, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/NoHandlerFoundException.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception), [`SystemException`](https://learn.microsoft.com/dotnet/api/system.systemexception), [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

The [`Message`](https://learn.microsoft.com/dotnet/api/system.exception.message) distinguishes the two cases. The exception derives
from [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception), so one catch covers both.

## Constructors

### `NoHandlerFoundException(Type, string)`

```csharp
public NoHandlerFoundException(Type messageType, string message)
```

Initializes the exception with a message stating why
`messageType` went unhandled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type that went unhandled. |
| `message` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The exception message. |

### `NoHandlerFoundException(Type)`

```csharp
public NoHandlerFoundException(Type messageType)
```

Initializes the exception for a message type with no registered handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type that went unhandled. |

## Properties

### `MessageType`

```csharp
public Type MessageType { get; }
```

The message type that went unhandled.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
