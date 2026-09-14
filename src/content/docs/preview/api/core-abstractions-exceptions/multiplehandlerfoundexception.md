---
title: "MultipleHandlerFoundException"
description: "Thrown when a message that admits exactly one handler has several registered against it — a command or query with more than one handler at the level that ser…"
sidebar:
  label: "MultipleHandlerFoundException"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Thrown when a message that admits exactly one handler has several registered against
it — a command or query with more than one handler at the level that serves it.

```csharp
[Serializable]
public class MultipleHandlerFoundException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/MultipleHandlerFoundException.cs#L14)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

Handlers registered for the message type itself are considered first; only if there are
none does the dispatch consider handlers registered for a base type. The contest is
therefore always within one level, and the count reported is that level's.

## Constructors

### `MultipleHandlerFoundException(Type, int)`

```csharp
public MultipleHandlerFoundException(Type messageType, int numberOfHandlers)
```

Thrown when a message that admits exactly one handler has several registered against
it — a command or query with more than one handler at the level that serves it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type with the contested handlers. |
| `numberOfHandlers` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | How many handlers were registered at the level that serves it. |

Handlers registered for the message type itself are considered first; only if there are
none does the dispatch consider handlers registered for a base type. The contest is
therefore always within one level, and the count reported is that level's.

## Properties

### `MessageType`

```csharp
public Type MessageType { get; }
```

The message type with the contested handlers.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `NumberOfHandlers`

```csharp
public int NumberOfHandlers { get; }
```

How many handlers were registered at the level that serves the message.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)
