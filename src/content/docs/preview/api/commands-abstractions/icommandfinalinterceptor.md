---
title: "ICommandFinalInterceptor"
description: "Runs once the pipeline of any command has settled, whatever its type."
sidebar:
  label: "ICommandFinalInterceptor"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs once the pipeline of any command has settled, whatever its type.

```csharp
public interface ICommandFinalInterceptor : ICommand, IMessage, IAsyncFinalInterceptor<ICommand>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/FinalInterceptors/ICommandFinalInterceptor.cs#L16)

## Remarks

Use this for work that applies across command types — logging, metrics, cleanup. It
observes the outcome and cannot change it, and a pipeline stopped by
`context.Abort()` runs no final interceptors. For a typed command or result,
implement [`ICommandFinalInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor-1) or
[`ICommandFinalInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor-2).
