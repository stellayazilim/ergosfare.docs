---
title: "ICommandPreInterceptor<TCommand>"
description: "Defines a type-safe pre-interceptor for a command."
sidebar:
  label: "ICommandPreInterceptor<TCommand>"
  order: 20
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Defines a type-safe pre-interceptor for a command. It runs before the handler and returns
the command that continues through the pipeline — the original instance, or a rewritten one.

```csharp
public interface ICommandPreInterceptor<TCommand> : ICommand, IMessage, IAsyncPreInterceptor<TCommand>, IPreInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PreInterceptors/ICommandPreInterceptor%5BTCommand%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command to intercept. |

## Remarks

A pre-interceptor carries no result, so — unlike the post/exception interceptors, whose
second type parameter is the result — the single-parameter form returns the command type
directly rather than [`object`](https://learn.microsoft.com/dotnet/api/system.object). Use the non-generic
[`ICommandPreInterceptor`](/ergosfare.docs/api/commands-abstractions/icommandpreinterceptor) to intercept any command (returning [`object`](https://learn.microsoft.com/dotnet/api/system.object)),
or [`ICommandPreInterceptor<TCommand, TModifiedCommand>`](/ergosfare.docs/api/commands-abstractions/icommandpreinterceptor-2) to return a different,
derived command type. `TCommand` is invariant because it is returned.

## Methods

### `HandleAsync(TCommand, IExecutionContext)`

```csharp
ValueTask<TCommand> HandleAsync(TCommand command, IExecutionContext context)
```

Handles the command before its handler runs and returns the command that continues
through the pipeline (the original, or a rewritten instance).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command to intercept. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

`ValueTask<TCommand>`
