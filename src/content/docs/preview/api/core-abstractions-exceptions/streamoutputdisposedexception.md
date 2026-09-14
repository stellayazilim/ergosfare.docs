---
title: "StreamOutputDisposedException"
description: "The consumer disposed the stream output before enumeration completed."
sidebar:
  label: "StreamOutputDisposedException"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The consumer disposed the stream output before enumeration completed.

```csharp
public sealed class StreamOutputDisposedException : ExecutionAbortedException, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/StreamOutputDisposedException.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception), [`ExecutionAbortedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

The input producer receives this signal when there is no output consumer left.
Stream final interceptors observe it; disposing the output itself does not throw it.

## Constructors

### `StreamOutputDisposedException()`

```csharp
public StreamOutputDisposedException()
```

The consumer disposed the stream output before enumeration completed.

The input producer receives this signal when there is no output consumer left.
Stream final interceptors observe it; disposing the output itself does not throw it.
