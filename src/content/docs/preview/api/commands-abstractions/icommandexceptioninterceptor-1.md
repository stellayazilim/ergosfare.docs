---
title: "ICommandExceptionInterceptor<TCommand>"
description: "Handles failures raised while dispatching a TCommand, without naming the result type."
sidebar:
  label: "ICommandExceptionInterceptor<TCommand>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles failures raised while dispatching a `TCommand`, without
naming the result type.

```csharp
public interface ICommandExceptionInterceptor<in TCommand> : ICommand, IMessage, IAsyncExceptionInterceptor<TCommand>, IExceptionInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptor%5BTCommand%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |

## Remarks

Use this for commands that return nothing, and for work that applies whatever the result
is. It must stay result-agnostic to serve a void command: those pipelines carry a
[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) in their result slot, which a
result-typed contract would not match. For a typed result, implement
[`ICommandExceptionInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-2).
