---
title: "ICommandExceptionInterceptorFor<TCommand, TResult, TException>"
description: "Handles failures of type TException raised while dispatching a TCommand, and supplies the result the caller receives instead."
sidebar:
  label: "ICommandExceptionInterceptorFor<TCommand, TResult, TException>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles failures of type `TException` raised while dispatching a
`TCommand`, and supplies the result the caller receives instead.

```csharp
public interface ICommandExceptionInterceptorFor<in TCommand, TResult, TException> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand, TResult>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TCommand : ICommand<TResult> where TResult : notnull where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptorFor%5BTCommand%2CTResult%2CTException%5D.cs#L23)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |
| `TResult` | The result type the command declares. |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

The failure arrives already typed, so no type test is needed in the body. Filtering
changes nothing about order: the interceptors that accept a failure run in the stage's
usual order, by descending weight and then type name, threading the result through each.
A failure no interceptor accepts reaches the caller with its original stack.

## Methods

### `HandleAsync(TCommand, TResult?, TException, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TCommand command, TResult? result, TException exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command whose dispatch failed. |
| `result` | `TResult` | The result produced before the failure, which is the result type's default when the handler itself failed. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TResult>` — The result the caller receives.

Running this method is what marks the failure handled, and a handled failure has to
leave a result behind: the call site locked the result type when it dispatched. To
leave a failure for the caller, do not accept it — narrow
`TException` so this interceptor never sees it, and a failure no
interceptor accepts reaches the caller unchanged.
