---
title: "ICommandExceptionInterceptorFor<TException>"
description: "A module-wide exception interceptor that runs for every command but only for exceptions of type TException — the filtered form of ICommandExceptionIntercepto…"
sidebar:
  label: "ICommandExceptionInterceptorFor<TException>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

A module-wide exception interceptor that runs for every command but only for exceptions
of type `TException` — the filtered form of
[`ICommandExceptionInterceptor`](/ergosfare.docs/api/commands-abstractions/icommandexceptioninterceptor), and the shape a global error policy takes.

```csharp
public interface ICommandExceptionInterceptorFor<TException> : ICommand, IMessage, IAsyncExceptionInterceptor<ICommand>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptorFor%5BTException%5D.cs#L21)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

Being message- and result-agnostic, this interceptor joins the exception stage of every
command pipeline in the module; the filter is what keeps it from swallowing exceptions
it was not written for.

## Methods

### `HandleAsync(ICommand, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(ICommand command, object? messageResult, TException exception, ErgosfareContext context)
```

Handles the exception asynchronously, potentially replacing the pipeline result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) | The command being processed when the exception occurred. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the exception occurred, if any. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the result that continues through the pipeline.
