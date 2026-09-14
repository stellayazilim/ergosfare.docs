---
title: "ICommand<TResult>"
description: "Marks a type as a command whose handler returns a TResult."
sidebar:
  label: "ICommand<TResult>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Marks a type as a command whose handler returns a `TResult`.

```csharp
public interface ICommand<TResult> : ICommand, IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ICommand%5BTResult%5D.cs#L11)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type the handler returns. |

## Remarks

Use this where the caller needs something back from the operation — a generated
identifier, a computed value, an outcome to act on. A command that only changes state
implements [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) instead.
