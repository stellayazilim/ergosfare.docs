---
title: "ICommand<TResult>"
description: "Represents a command that produces a result of type TResult when handled."
sidebar:
  label: "ICommand<TResult>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a command that produces a result of type `TResult` when handled.

```csharp
public interface ICommand<TResult> : ICommand, IMessage
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ICommand%5BTResult%5D.cs#L11)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of result that will be returned when the command is processed. |

## Remarks

This interface extends the base [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) interface to support commands that need to return
data to the caller. While regular commands are used for state-changing operations without returning data,
commands with results allow for obtaining computed values or status information from the handler.
