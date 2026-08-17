---
title: "ICommandExceptionInterceptor"
description: "Represents a non-type-safe exception interceptor for commands."
sidebar:
  label: "ICommandExceptionInterceptor"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a non-type-safe exception interceptor for commands.

```csharp
public interface ICommandExceptionInterceptor : ICommand, IMessage, IAsyncExceptionInterceptor<ICommand>, IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ExceptionInterceptors/ICommandExceptionInterceptor.cs#L18)

## Remarks

This interceptor can handle any [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) without specifying a particular result type.
It returns [`object`](https://learn.microsoft.com/dotnet/api/system.object) from the `HandleAsync` method, making it suitable for
scenarios where you want to apply exception handling logic across multiple command types
in a generic pipeline without caring about the exact result type.

For scenarios where type safety is required, use the generic version:
[`ICommandExceptionInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-2).
