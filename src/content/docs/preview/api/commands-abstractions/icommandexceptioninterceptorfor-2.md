---
title: "ICommandExceptionInterceptorFor<TCommand, TException>"
description: "Handles failures of type TException raised while dispatching a TCommand, without naming the result type."
sidebar:
  label: "ICommandExceptionInterceptorFor<TCommand, TException>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles failures of type `TException` raised while dispatching a
`TCommand`, without naming the result type.

```csharp
public interface ICommandExceptionInterceptorFor<in TCommand, TException> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TCommand : ICommand where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptorFor%5BTCommand%2CTException%5D.cs#L22)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

The failure arrives already typed, so no type test is needed in the body. Staying
result-agnostic is what lets this serve a void command, whose pipeline carries a
[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) in its result slot; for a typed result,
implement [`ICommandExceptionInterceptorFor<TCommand, TResult, TException>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptorfor-3).

## Methods

### `HandleAsync(TCommand, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TCommand command, object? messageResult, TException exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command whose dispatch failed. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the failure, if any. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result the rest of the pipeline receives, which must be of the pipeline's result type.
