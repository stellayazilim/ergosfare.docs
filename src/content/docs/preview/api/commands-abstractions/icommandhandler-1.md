---
title: "ICommandHandler<TCommand>"
description: "Handles commands of type TCommand that return nothing."
sidebar:
  label: "ICommandHandler<TCommand>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles commands of type `TCommand` that return nothing.

```csharp
public interface ICommandHandler<in TCommand> : ICommand, IMessage, IAsyncHandler<TCommand>, IHandler where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/Handlers/ICommandHandler%5BTCommand%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this handler accepts. |

## Remarks

A command is sent to exactly one handler, so registering two for the same command type
fails the dispatch. Implement [`ICommandHandler<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandhandler-2) for a
command that returns a value.
