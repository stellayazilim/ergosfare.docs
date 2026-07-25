---
title: "ICommandFinalInterceptor"
description: "Represents a final interceptor for commands that can be registered without specifying a particular command type."
sidebar:
  label: "ICommandFinalInterceptor"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a final interceptor for commands that can be registered
without specifying a particular command type.

```csharp
public interface ICommandFinalInterceptor : ICommand, IMessage, IAsyncFinalInterceptor<ICommand>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/FinalInterceptors/ICommandFinalInterceptor.cs#L21)

## Remarks

This is a non-type-safe version of a command final interceptor.
It allows intercepting the final stage of any command pipeline regardless of the concrete command type.

Use this interface when you want to apply final logic (e.g., logging, cleanup) across multiple command types
without requiring a strongly typed command.

For scenarios requiring type safety, prefer using the generic version:
[`ICommandFinalInterceptor<TCommand>`](/ergosfare.docs/api/commands-abstractions/icommandfinalinterceptor-1) or
[`ICommandFinalInterceptor<TCommand, TResult>`](/ergosfare.docs/api/commands-abstractions/icommandfinalinterceptor-2).
