---
title: "ICommandPreInterceptor<TCommand>"
description: "Runs before the handler of a TCommand and decides which command the rest of the pipeline sees."
sidebar:
  label: "ICommandPreInterceptor<TCommand>"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs before the handler of a `TCommand` and decides which command
the rest of the pipeline sees.

```csharp
public interface ICommandPreInterceptor<TCommand> : ICommand, IMessage, IAsyncPreInterceptor<TCommand>, IPreInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PreInterceptors/ICommandPreInterceptor%5BTCommand%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |

## Remarks

A pre-interceptor produces no result, so this form returns the command type itself
rather than [`object`](https://learn.microsoft.com/dotnet/api/system.object) — which is why `TCommand` is
invariant here. Returning a derived command is allowed and needs nothing extra: it is
still a `TCommand`. Use [`ICommandPreInterceptor`](/ergosfare.docs/api/commands-abstractions/icommandpreinterceptor) to
accept any command instead.

## Methods

### `HandleAsync(TCommand, ErgosfareContext)`

```csharp
ValueTask<TCommand> HandleAsync(TCommand command, ErgosfareContext context)
```

Processes `command` before its handler runs.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TCommand>` — The command the rest of the pipeline receives — either the one passed in or a replacement.
