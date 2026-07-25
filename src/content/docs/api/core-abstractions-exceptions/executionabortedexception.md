---
title: "ExecutionAbortedException"
description: "Initializes a new instance of the ExecutionAbortedException class."
sidebar:
  label: "ExecutionAbortedException"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Initializes a new instance of the [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) class.

```csharp
public class ExecutionAbortedException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/ExecutionAbortedException.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Constructors

### `ExecutionAbortedException(string?)`

```csharp
public ExecutionAbortedException(string? message = "Execution was aborted")
```

Initializes a new instance of the [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) class.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
