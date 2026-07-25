---
title: "ICommandPreInterceptor<TCommand, TModifiedCommand>"
description: "Represents a type-safe pre-interceptor for commands, allowing modification of the command before it enters the pipeline."
sidebar:
  label: "ICommandPreInterceptor<TCommand, TModifiedCommand>"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a type-safe pre-interceptor for commands, allowing modification of the command
before it enters the pipeline.

```csharp
public interface ICommandPreInterceptor<in TCommand, TModifiedCommand> : ICommand, IMessage, IAsyncPreInterceptor<TCommand>, IPreInterceptor where TCommand : ICommand where TModifiedCommand : TCommand
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PreInterceptors/ICommandPreInterceptor%5BTCommand%2CTCommand%5D.cs#L23)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command being intercepted. Must implement [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand). |
| `TModifiedCommand` | The type of the command returned after interception. Must be assignable from `TCommand`. This allows modifying or replacing the original command in a type-safe way. |

## Remarks

This interface is the type-safe variant of [`ICommandPreInterceptor`](/ergosfare.docs/api/commands-abstractions/icommandpreinterceptor).
Use this when you want to ensure compile-time type safety while allowing the command
to be modified before entering the pipeline.

The `HandleAsync` method is called before the command is processed. The returned
`TModifiedCommand` will continue through the pipeline as the new command.

## Methods

### `HandleAsync(TCommand, IExecutionContext)`

```csharp
ValueTask<TModifiedCommand> HandleAsync(TCommand command, IExecutionContext context)
```

Asynchronously handles the pre-processing of the command.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command to intercept. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

`ValueTask<TModifiedCommand>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the modified command of type `TModifiedCommand`.
