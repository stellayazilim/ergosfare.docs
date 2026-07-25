---
title: "ICommandExceptionInterceptor<TCommand, TResult>"
description: "Represents a type-safe exception interceptor for commands with a strongly-typed result."
sidebar:
  label: "ICommandExceptionInterceptor<TCommand, TResult>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a type-safe exception interceptor for commands with a strongly-typed result.
The interceptor can inspect the exception and modify or replace the command result.

```csharp
public interface ICommandExceptionInterceptor<in TCommand, TResult> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand, TResult>, IExceptionInterceptor where TCommand : ICommand<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptor%5BTCommand%2CTResult%5D.cs#L24)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type being intercepted. Must implement [`ICommand<TResult>`](/ergosfare.docs/api/commands-abstractions/icommand-1). |
| `TResult` | The result type of the command. Also, the type returned by the interceptor — for a narrower return type there is no third parameter anymore; return the base result type. |

## Remarks

`TCommand` is contravariant, matching the core
[`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2) contract the typed dispatch
matches against. `TResult` must stay invariant: the typed member
returns it.

## Methods

### `HandleAsync(TCommand, TResult?, Exception, IExecutionContext)`

```csharp
ValueTask<TResult?> HandleAsync(TCommand command, TResult? result, Exception exception, IExecutionContext context)
```

Handles the exception asynchronously, potentially modifying the command result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command being processed when the exception occurred. |
| `result` | `TResult` | The result produced before the exception occurred, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception thrown during pipeline execution. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the (possibly modified) result that continues through the pipeline.
