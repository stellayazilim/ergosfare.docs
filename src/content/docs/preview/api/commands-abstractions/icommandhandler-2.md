---
title: "ICommandHandler<TCommand, TResult>"
description: "Represents a handler for commands that produce a strongly-typed result."
sidebar:
  label: "ICommandHandler<TCommand, TResult>"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a handler for commands that produce a strongly-typed result.

```csharp
public interface ICommandHandler<in TCommand, TResult> : ICommand, IMessage, IAsyncHandler<TCommand, TResult>, IHandler where TCommand : ICommand<TResult>
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/Handlers/ICommandHandler%5BTCommand%2CTResult%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command this handler processes. Must implement [`ICommand<TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommand-1). |
| `TResult` | The type of result produced by the command. |

## Remarks

Use this interface when you want type-safe handling of commands with a specific result type.
The handler processes the command asynchronously and returns the strongly-typed result.
