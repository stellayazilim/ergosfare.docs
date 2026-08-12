---
title: "ICommandExceptionInterceptorFor<TCommand, TResult, TException>"
description: "A type-safe exception interceptor for commands with a strongly-typed result that runs only for exceptions of type TException."
sidebar:
  label: "ICommandExceptionInterceptorFor<TCommand, TResult, TException>"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

A type-safe exception interceptor for commands with a strongly-typed result that runs
only for exceptions of type `TException`. The exception arrives
already typed — no `is` check in the interceptor body.

```csharp
public interface ICommandExceptionInterceptorFor<in TCommand, TResult, TException> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand, TResult>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TCommand : ICommand<TResult> where TResult : notnull where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptorFor%5BTCommand%2CTResult%2CTException%5D.cs#L30)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type being intercepted. Must implement [`ICommand<TResult>`](/ergosfare.docs/api/commands-abstractions/icommand-1). |
| `TResult` | The result type of the command. Also the type returned by the interceptor — an interceptor that declines to replace the result returns `null`. |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

Filtering does not reorder anything: matching interceptors run in the pipeline's
existing order (weight descending, then type name), and the result threads through them
exactly as it does through the unfiltered
[`ICommandExceptionInterceptor<TCommand, TResult>`](/ergosfare.docs/api/commands-abstractions/icommandexceptioninterceptor-2). When no interceptor
accepts the thrown exception, it leaves the pipeline unwrapped with its original stack.

## Methods

### `HandleAsync(TCommand, TResult?, TException, ErgosfareContext)`

```csharp
ValueTask<TResult?> HandleAsync(TCommand command, TResult? result, TException exception, ErgosfareContext context)
```

Handles the exception asynchronously, potentially modifying the command result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command being processed when the exception occurred. |
| `result` | `TResult` | The result produced before the exception occurred, if any. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the (possibly modified) result that continues through the pipeline.
