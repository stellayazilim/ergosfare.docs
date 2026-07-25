---
title: "ICommandPostInterceptor<TCommand, TResult>"
description: "Represents a type-safe post-interceptor for commands with a strongly-typed result."
sidebar:
  label: "ICommandPostInterceptor<TCommand, TResult>"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a type-safe post-interceptor for commands with a strongly-typed result.
Executes after the command handler has completed and can modify the result before it
propagates further through the pipeline.

```csharp
public interface ICommandPostInterceptor<in TCommand, TResult> : ICommand, IMessage, IAsyncPostInterceptor<TCommand, TResult>, IPostInterceptor where TCommand : ICommand<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/PostInterceptors/ICommandPostInterceptor%5BTCommand%2CTResult%5D.cs#L22)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type being intercepted. Must implement [`ICommand<TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommand-1). |
| `TResult` | The result type of the command. Also the type returned by the interceptor — for a narrower return type there is no third parameter anymore; return the base result type. |

## Remarks

`TCommand` is contravariant, matching the core
[`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-2) contract the typed dispatch
matches against. `TResult` must stay invariant: the typed member
returns it.

## Methods

### `HandleAsync(TCommand, TResult, IExecutionContext)`

```csharp
ValueTask<TResult> HandleAsync(TCommand command, TResult commandResult, IExecutionContext context)
```

Handles the post-processing of a command asynchronously.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command that was executed. |
| `commandResult` | `TResult` | The result produced by the command handler. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the (possibly modified) result that continues through the pipeline.
