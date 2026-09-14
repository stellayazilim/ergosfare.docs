---
title: "ICommandExceptionInterceptorFor<TException>"
description: "Handles failures of type TException raised while dispatching any command — the shape a module-wide error policy takes."
sidebar:
  label: "ICommandExceptionInterceptorFor<TException>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles failures of type `TException` raised while dispatching any
command — the shape a module-wide error policy takes.

```csharp
public interface ICommandExceptionInterceptorFor<TException> : ICommand, IMessage, IAsyncExceptionInterceptor<ICommand>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptorFor%5BTException%5D.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

Accepting every command means joining the exception stage of every command pipeline in
the module; the filter is what keeps it from handling failures it was not written for.
The failure arrives already typed, so no type test is needed in the body.

## Methods

### `HandleAsync(ICommand, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(ICommand command, object? messageResult, TException exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) | The command whose dispatch failed. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the failure, if any. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result the rest of the pipeline receives, which must be of the pipeline's result type.
