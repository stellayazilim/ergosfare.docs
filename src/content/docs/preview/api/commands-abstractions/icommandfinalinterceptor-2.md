---
title: "ICommandFinalInterceptor<TCommand, TResult>"
description: "Represents a final interceptor for commands in the pipeline with a strongly typed result."
sidebar:
  label: "ICommandFinalInterceptor<TCommand, TResult>"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a final interceptor for commands in the pipeline with a strongly typed result.

```csharp
public interface ICommandFinalInterceptor<in TCommand, in TResult> : ICommand, IMessage, IAsyncFinalInterceptor<TCommand, TResult>, IFinalInterceptor where TCommand : ICommand<in TResult>
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/FinalInterceptors/ICommandFinalInterceptor%5BTCommand%2CTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command this interceptor handles. Must implement [`ICommand<TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommand-1). |
| `TResult` | The type of the result produced by the command. |

## Remarks

A final interceptor is executed at the end of the pipeline, after pre-, post-, and exception interceptors.
It can observe the command, its result, or any exception thrown, but it should not directly modify the result.

Use this interface to perform logging, cleanup, or any last-step operations while preserving the type safety of the command's result.
