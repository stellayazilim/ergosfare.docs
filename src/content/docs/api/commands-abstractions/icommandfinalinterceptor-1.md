---
title: "ICommandFinalInterceptor<TCommand>"
description: "Runs once the pipeline of a TCommand has settled, whether it succeeded or failed."
sidebar:
  label: "ICommandFinalInterceptor<TCommand>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs once the pipeline of a `TCommand` has settled, whether it
succeeded or failed.

```csharp
public interface ICommandFinalInterceptor<in TCommand> : ICommand, IMessage, IAsyncFinalInterceptor<TCommand>, IFinalInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/FinalInterceptors/ICommandFinalInterceptor%5BTCommand%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |

## Remarks

It runs after the pre-, post- and exception stages and sees the command, the result and
any failure, but cannot change the outcome. A pipeline stopped by `context.Abort()`
runs no final interceptors. Use it for logging, cleanup and other last steps.
