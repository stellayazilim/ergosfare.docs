---
title: "ICommandPostInterceptor<TCommand, TResult>"
description: "Runs after the handler of a TCommand and decides what result the caller receives."
sidebar:
  label: "ICommandPostInterceptor<TCommand, TResult>"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs after the handler of a `TCommand` and decides what result the
caller receives.

```csharp
public interface ICommandPostInterceptor<in TCommand, TResult> : ICommand, IMessage, IAsyncPostInterceptor<TCommand, TResult>, IPostInterceptor where TCommand : ICommand<TResult> where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PostInterceptors/ICommandPostInterceptor%5BTCommand%2CTResult%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |
| `TResult` | The result type the command declares. |

## Remarks

The interceptor returns the same result type it was given; to narrow a result, return
the declared type carrying the narrower value. `TCommand` is
contravariant, so an interceptor written against a base command type also runs for the
commands derived from it, while `TResult` stays invariant because
it is returned.

## Methods

### `HandleAsync(TCommand, TResult, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TCommand command, TResult commandResult, ErgosfareContext context)
```

Processes the result of handling `command`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command that was handled. |
| `commandResult` | `TResult` | The result as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TResult>` — The result the rest of the pipeline receives — either the one passed in or a replacement.
