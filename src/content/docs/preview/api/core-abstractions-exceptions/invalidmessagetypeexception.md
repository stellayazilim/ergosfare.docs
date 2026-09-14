---
title: "InvalidMessageTypeException"
description: "Thrown when a type is used as a message but is not one."
sidebar:
  label: "InvalidMessageTypeException"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Thrown when a type is used as a message but is not one.

```csharp
public class InvalidMessageTypeException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/InvalidMessageTypeException.cs#L11)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

The framework does not raise this exception; message types are validated at compile
time. It is available to hosts and extensions that accept message types at runtime.

## Constructors

### `InvalidMessageTypeException(Type)`

```csharp
public InvalidMessageTypeException(Type type)
```

Thrown when a type is used as a message but is not one.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type that is not a valid message type. |

The framework does not raise this exception; message types are validated at compile
time. It is available to hosts and extensions that accept message types at runtime.
