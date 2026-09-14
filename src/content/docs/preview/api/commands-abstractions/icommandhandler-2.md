---
title: "ICommandHandler<TCommand, TResult>"
description: "Handles commands of type TCommand and returns the TResult they declare."
sidebar:
  label: "ICommandHandler<TCommand, TResult>"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles commands of type `TCommand` and returns the
`TResult` they declare.

```csharp
public interface ICommandHandler<in TCommand, TResult> : ICommand, IMessage, IAsyncHandler<TCommand, TResult>, IHandler where TCommand : ICommand<TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/Handlers/ICommandHandler%5BTCommand%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this handler accepts. |
| `TResult` | The result type the command declares. |

## Remarks

The result type comes from the command itself, so the caller and the handler cannot
disagree about it. A command is sent to exactly one handler.
