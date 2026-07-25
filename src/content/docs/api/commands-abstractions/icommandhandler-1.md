---
title: "ICommandHandler<TCommand>"
description: "Represents a handler for commands implementing ICommand."
sidebar:
  label: "ICommandHandler<TCommand>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a handler for commands implementing [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand).

```csharp
public interface ICommandHandler<in TCommand> : ICommand, IMessage, IAsyncHandler<TCommand>, IHandler where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/Handlers/ICommandHandler%5BTCommand%5D.cs#L13)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command this handler processes. Must implement [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand). |

## Remarks

This interface is non-generic regarding the result type; the command may or may not produce a result.
For commands with a strongly typed result, consider using [`ICommandHandler<TCommand, TResult>`](/ergosfare.docs/api/commands-abstractions/icommandhandler-2).
