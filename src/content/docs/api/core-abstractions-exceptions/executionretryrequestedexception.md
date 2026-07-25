---
title: "ExecutionRetryRequestedException"
description: "Class Stella.Ergosfare.Core.Abstractions.Exceptions.ExecutionRetryRequestedException in the Ergosfare API reference."
sidebar:
  label: "ExecutionRetryRequestedException"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

```csharp
public class ExecutionRetryRequestedException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/ExecutionRetryRequestedException.cs#L3)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Constructors

### `ExecutionRetryRequestedException(byte)`

```csharp
public ExecutionRetryRequestedException(byte counter = 0)
```

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `counter` | [`byte`](https://learn.microsoft.com/dotnet/api/system.byte) |  |

## Properties

### `Counter`

```csharp
public byte Counter { get; }
```

**Returns**

[`byte`](https://learn.microsoft.com/dotnet/api/system.byte)
