---
title: "ICommandExceptionInterceptorFor<TCommand, TException>"
description: "A result-agnostic exception interceptor for a specific command type that runs only for exceptions of type TException."
sidebar:
  label: "ICommandExceptionInterceptorFor<TCommand, TException>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

A result-agnostic exception interceptor for a specific command type that runs only for
exceptions of type `TException`. The exception arrives already
typed — no `is` check in the interceptor body.

```csharp
public interface ICommandExceptionInterceptorFor<in TCommand, TException> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TCommand : ICommand where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptorFor%5BTCommand%2CTException%5D.cs#L24)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command being intercepted. Must implement [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand). |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

The result-agnostic base is deliberate, for the same reason it is on
[`ICommandExceptionInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-1): a result-typed base is invisible to
the pipeline's pattern match whenever the pipeline result is a value type. For a
strongly-typed result use
[`ICommandExceptionInterceptorFor<TCommand, TResult, TException>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptorfor-3).

## Methods

### `HandleAsync(TCommand, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TCommand command, object? messageResult, TException exception, ErgosfareContext context)
```

Handles the exception asynchronously, potentially replacing the pipeline result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command being processed when the exception occurred. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the exception occurred, if any. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the result that continues through the pipeline.
