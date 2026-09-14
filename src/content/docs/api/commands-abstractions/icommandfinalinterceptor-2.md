---
title: "ICommandFinalInterceptor<TCommand, TResult>"
description: "Runs once the pipeline of a TCommand has settled, reading its result as a TResult."
sidebar:
  label: "ICommandFinalInterceptor<TCommand, TResult>"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs once the pipeline of a `TCommand` has settled, reading its
result as a `TResult`.

```csharp
public interface ICommandFinalInterceptor<in TCommand, in TResult> : ICommand, IMessage, IAsyncFinalInterceptor<TCommand, TResult>, IFinalInterceptor where TCommand : ICommand<in TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/FinalInterceptors/ICommandFinalInterceptor%5BTCommand%2CTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |
| `TResult` | The result type the command declares. |

## Remarks

It runs after the pre-, post- and exception stages and sees the command, the result and
any failure, but cannot change the outcome. A pipeline stopped by `context.Abort()`
runs no final interceptors.
