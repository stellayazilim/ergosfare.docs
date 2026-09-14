---
title: "ICommandExceptionInterceptor"
description: "Handles failures raised while dispatching any command, whatever its type."
sidebar:
  label: "ICommandExceptionInterceptor"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Handles failures raised while dispatching any command, whatever its type.

```csharp
public interface ICommandExceptionInterceptor : ICommand, IMessage, IAsyncExceptionInterceptor<ICommand>, IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptor.cs#L17)

## Remarks

Because it accepts every command, this contract sees the command as
[`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) and its result as [`object`](https://learn.microsoft.com/dotnet/api/system.object). Running is what marks the
failure handled, so an interceptor this broad handles everything it is registered for —
use [`ICommandExceptionInterceptorFor<TException>`](/ergosfare.docs/api/commands-abstractions/icommandexceptioninterceptorfor-1) to narrow it by exception
type, or [`ICommandExceptionInterceptor<TCommand, TResult>`](/ergosfare.docs/api/commands-abstractions/icommandexceptioninterceptor-2) for a typed
result.
