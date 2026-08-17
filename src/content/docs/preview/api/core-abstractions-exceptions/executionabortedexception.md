---
title: "ExecutionAbortedException"
description: "Raised by ErgosfareContext.Abort(): a participant stopped the pipeline."
sidebar:
  label: "ExecutionAbortedException"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Raised by [`ErgosfareContext.Abort()`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext#abort): a participant stopped the pipeline.

```csharp
public class ExecutionAbortedException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/ExecutionAbortedException.cs#L36)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

This is Ergosfare's own signal and it means exactly what it says — the pipeline
    is cut where it stands. Nothing further runs: not the remaining participants of
    the current stage, not the exception stage, not the final stage. There is no
    pipeline result to expect either; a stopped pipeline did not produce one.

    It reaches the caller, because the caller is who asked for the work. Whatever the
    aborting participant chose to say travels with it — [`ExecutionAbortedException.Reason`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception#reason) for a
    human, [`ExecutionAbortedException.Value`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception#value) for a program:


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


    The mechanism does not change with the shape of the pipeline: with interceptors
    or without, the signal travels straight out. Applications that would rather carry
    outcomes as values than as exceptions have the result-adapter surface for that;
    abort is the exception-shaped channel, and it is deliberately the loud one.

## Constructors

### `ExecutionAbortedException()`

```csharp
public ExecutionAbortedException()
```

Stops a pipeline, carrying nothing but the signal itself.

### `ExecutionAbortedException(string?, object?)`

```csharp
public ExecutionAbortedException(string? reason, object? value)
```

Stops a pipeline, saying why and handing the caller something to act on.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the pipeline was stopped; also the exception message. |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | Data about the abort for the caller to inspect. It is not the pipeline's result; a stopped pipeline has none. |

### `ExecutionAbortedException(string?)`

```csharp
public ExecutionAbortedException(string? reason)
```

Stops a pipeline, saying why.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the pipeline was stopped; also the exception message. |

## Properties

### `Reason`

```csharp
public string Reason { get; }
```

Why the pipeline was stopped, as the aborting participant stated it.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `Value`

```csharp
public object? Value { get; }
```

What the aborting participant attached to the signal, if anything.

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object)
