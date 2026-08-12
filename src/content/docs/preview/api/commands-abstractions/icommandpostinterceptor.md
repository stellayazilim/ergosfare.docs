---
title: "ICommandPostInterceptor"
description: "Represents a post-processing interceptor for commands that executes after any ICommand is handled."
sidebar:
  label: "ICommandPostInterceptor"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a post-processing interceptor for commands that executes after any [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) is handled.

```csharp
public interface ICommandPostInterceptor : ICommand, IMessage, IAsyncPostInterceptor<ICommand>, IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/PostInterceptors/ICommandPostInterceptor.cs#L19)

## Remarks

This interceptor is non-generic and non-type-safe. It can be registered to run for multiple command types
without specifying a particular result type. The
    HandleAsync

method returns [`object`](https://learn.microsoft.com/dotnet/api/system.object),
so any result modifications are handled via object references and casting.

For scenarios where type safety is required, use the generic version:
[`ICommandPostInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor-2).
