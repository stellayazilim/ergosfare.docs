---
title: "InvalidMessageTypeException"
description: "Exception thrown when a message of an invalid type is encountered."
sidebar:
  label: "InvalidMessageTypeException"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Exception thrown when a message of an invalid type is encountered.

```csharp
public class InvalidMessageTypeException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/InvalidMessageTypeException.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Constructors

### `InvalidMessageTypeException(Type)`

```csharp
public InvalidMessageTypeException(Type type)
```

Exception thrown when a message of an invalid type is encountered.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the invalid message. |
