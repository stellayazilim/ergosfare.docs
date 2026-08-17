---
title: "ICommandExceptionInterceptor<TCommand>"
description: "Marker interface for asynchronous exception interceptors for commands."
sidebar:
  label: "ICommandExceptionInterceptor<TCommand>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Marker interface for asynchronous exception interceptors for commands.
Inherits the result-agnostic [`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-1) and
[`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) to allow registration within the command module.
This interface does not modify the behavior or return type; interception logic
is handled by [`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-1).

```csharp
public interface ICommandExceptionInterceptor<in TCommand> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand>, IExceptionInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptor%5BTCommand%5D.cs#L25)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command being intercepted. Must implement [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |

## Remarks

The result-agnostic base is deliberate: a result-typed base (the previous
`IAsyncExceptionInterceptor<TCommand, object>`) is invisible to the
pipeline's pattern match whenever the pipeline result is a value type — void command
pipelines carry a [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) result internally, so
the exception stage failed with [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) the moment
it ran. For a strongly-typed result use
[`ICommandExceptionInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-2).
