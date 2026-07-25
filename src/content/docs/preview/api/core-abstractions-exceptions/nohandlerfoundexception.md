---
title: "NoHandlerFoundException"
description: "Exception thrown when no handler is found for a specific message type."
sidebar:
  label: "NoHandlerFoundException"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Exception thrown when no handler is found for a specific message type.

```csharp
public class NoHandlerFoundException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/NoHandlerFoundException.cs#L8)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Constructors

### `NoHandlerFoundException(Type)`

```csharp
public NoHandlerFoundException(Type messageType)
```

Exception thrown when no handler is found for a specific message type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type of the message for which no handler was found. |
