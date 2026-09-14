---
title: "ICommand"
description: "Marks a type as a command: a message sent to exactly one handler to carry out an operation."
sidebar:
  label: "ICommand"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Marks a type as a command: a message sent to exactly one handler to carry out an
operation.

```csharp
public interface ICommand : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ICommand.cs#L13)

## Remarks

The interface declares no members. Implement [`ICommand<TResult>`](/ergosfare.docs/api/commands-abstractions/icommand-1) instead
when the caller needs a value back.
