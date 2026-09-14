---
title: "ExecutionAbortedException"
description: "Thrown by ErgosfareContext.Abort() when a participant ends the dispatch."
sidebar:
  label: "ExecutionAbortedException"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Thrown by [`ErgosfareContext.Abort()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#abort) when a participant ends the dispatch.

```csharp
public class ExecutionAbortedException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/ExecutionAbortedException.cs#L33)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

**Derived:** [`StreamOutputDisposedException`](/ergosfare.docs/api/core-abstractions-exceptions/streamoutputdisposedexception)

## Remarks

The pipeline stops where the signal was raised. Nothing downstream runs — not the rest
of the current stage, not the exception stage, not the final stage — and the pipeline
produces no result, which is why this exception carries none.

The signal travels out to the caller that asked for the dispatch, carrying whatever the
aborting participant attached: [`ExecutionAbortedException.Reason`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception#reason) to read, [`ExecutionAbortedException.Value`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception#value) to act
on.


```csharp
try
{
    var id = await commands.SendAsync<Guid>(new PlaceOrder(...));
}
catch (ExecutionAbortedException aborted)
{
    logger.LogInformation("order refused: {Reason}", aborted.Reason);
    if (aborted.Value is ValidationFailure failure) { ... }
}
```


This is the exception-shaped channel, and it behaves the same whether the pipeline
has interceptors. To carry outcomes as values instead, use the result-adapter surface.

## Constructors

### `ExecutionAbortedException()`

```csharp
public ExecutionAbortedException()
```

Initializes the signal with no stated reason.

### `ExecutionAbortedException(string?, object?)`

```csharp
public ExecutionAbortedException(string? reason, object? value)
```

Initializes the signal with a reason and a value for the caller.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the dispatch ended; becomes the exception message. `null` uses the default reason. |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | Data about the abort for the caller to inspect. It is not the pipeline's result; an aborted pipeline has none. |

### `ExecutionAbortedException(string?)`

```csharp
public ExecutionAbortedException(string? reason)
```

Initializes the signal with a reason.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the dispatch ended; becomes the exception message. `null` uses the default reason. |

## Properties

### `Reason`

```csharp
public string Reason { get; }
```

Why the dispatch ended, as the aborting participant stated it.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `Value`

```csharp
public object? Value { get; }
```

What the aborting participant attached to the signal, or `null` if nothing.

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object)
