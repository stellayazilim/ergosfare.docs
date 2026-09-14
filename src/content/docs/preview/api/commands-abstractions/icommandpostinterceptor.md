---
title: "ICommandPostInterceptor"
description: "Runs after the handler of any command, whatever its type."
sidebar:
  label: "ICommandPostInterceptor"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs after the handler of any command, whatever its type.

```csharp
public interface ICommandPostInterceptor : ICommand, IMessage, IAsyncPostInterceptor<ICommand>, IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/PostInterceptors/ICommandPostInterceptor.cs#L13)

## Remarks

Because it accepts every command, this contract sees the command as
[`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) and its result as [`object`](https://learn.microsoft.com/dotnet/api/system.object). To work with a typed
result, implement [`ICommandPostInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor-2).
