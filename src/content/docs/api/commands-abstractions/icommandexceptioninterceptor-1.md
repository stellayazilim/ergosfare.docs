---
title: "ICommandExceptionInterceptor<TCommand>"
description: "Marker interface for asynchronous exception interceptors for commands."
sidebar:
  label: "ICommandExceptionInterceptor<TCommand>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Marker interface for asynchronous exception interceptors for commands.
Inherits [`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2) and [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand)
to allow registration within the command module.
This interface does not modify the behavior or return type; interception logic
is handled by [`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2).

```csharp
public interface ICommandExceptionInterceptor<in TCommand> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand, object>, IExceptionInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptor%5BTCommand%5D.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command being intercepted. Must implement [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) |

## Remarks

`ICommandExceptionInterceptor<in TCommand, in ValueTask, ValueTask>`
or other type-safe variants, which preserve the exact result type.
