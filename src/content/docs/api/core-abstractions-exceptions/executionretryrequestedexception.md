---
title: "ExecutionRetryRequestedException"
description: "A signal that a pipeline should be run again, carrying the number of attempts made so far."
sidebar:
  label: "ExecutionRetryRequestedException"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A signal that a pipeline should be run again, carrying the number of attempts made so
far.

```csharp
public class ExecutionRetryRequestedException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/ExecutionRetryRequestedException.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

The framework neither raises nor catches this exception; it is a shared shape for
retry policies written as interceptors, whose own handling decides what a retry means.

## Constructors

### `ExecutionRetryRequestedException(byte)`

```csharp
public ExecutionRetryRequestedException(byte counter = 0)
```

A signal that a pipeline should be run again, carrying the number of attempts made so
far.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `counter` | [`byte`](https://learn.microsoft.com/dotnet/api/system.byte) | How many attempts have been made so far. |

The framework neither raises nor catches this exception; it is a shared shape for
retry policies written as interceptors, whose own handling decides what a retry means.

## Properties

### `Counter`

```csharp
public byte Counter { get; }
```

How many attempts had been made when the retry was requested.

**Returns**

[`byte`](https://learn.microsoft.com/dotnet/api/system.byte)
