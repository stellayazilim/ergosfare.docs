---
title: "ICommandExceptionInterceptor<TCommand, TResult>"
description: "Handles failures raised while dispatching a TCommand and supplies the result the caller receives instead."
sidebar:
  label: "ICommandExceptionInterceptor<TCommand, TResult>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles failures raised while dispatching a `TCommand` and supplies
the result the caller receives instead.

```csharp
public interface ICommandExceptionInterceptor<in TCommand, TResult> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand, TResult>, IExceptionInterceptor where TCommand : ICommand<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptor%5BTCommand%2CTResult%5D.cs#L21)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |
| `TResult` | The result type the command declares. |

## Remarks

`TCommand` is contravariant, so an interceptor written against a
base command type also runs for the commands derived from it;
`TResult` stays invariant because it is returned. Add
[`IExceptionInterceptorFilter<TException>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iexceptioninterceptorfilter-1) — or implement
[`ICommandExceptionInterceptorFor<TCommand, TResult, TException>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptorfor-3) — to accept
only certain failures.

## Methods

### `HandleAsync(TCommand, TResult?, Exception, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TCommand command, TResult? result, Exception exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command whose dispatch failed. |
| `result` | `TResult` | The result produced before the failure, which is the result type's default when the handler itself failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure being handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TResult>` — The result the caller receives.

Running this method is what marks the failure handled, and a handled failure has to
leave a result behind: the call site locked the result type when it dispatched, so
nothing may answer it with nothing. To leave a failure for the caller, do not accept
it — a failure no interceptor accepts reaches the caller unchanged. Where absence is
a legitimate answer, express it in the result type, as `Result<T>` does.
