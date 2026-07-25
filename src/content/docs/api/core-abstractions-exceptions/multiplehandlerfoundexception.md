---
title: "MultipleHandlerFoundException"
description: "Exception thrown when multiple handlers are found for a message that expects only one."
sidebar:
  label: "MultipleHandlerFoundException"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Exception thrown when multiple handlers are found for a message that expects only one.

```csharp
[Serializable]
public class MultipleHandlerFoundException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/MultipleHandlerFoundException.cs#L8)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Constructors

### `MultipleHandlerFoundException(Type, int)`

```csharp
public MultipleHandlerFoundException(Type messageType, int numberOfHandlers)
```

Exception thrown when multiple handlers are found for a message that expects only one.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message for which multiple handlers were found. |
| `numberOfHandlers` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | The number of handlers found for the message type. |

## Properties

### `MessageType`

```csharp
public Type MessageType { get; }
```

Gets the type of the message that caused the exception.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `NumberOfHandlers`

```csharp
public int NumberOfHandlers { get; }
```

Gets the number of handlers found for the message type.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)
