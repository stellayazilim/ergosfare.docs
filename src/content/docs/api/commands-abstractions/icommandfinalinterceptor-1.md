---
title: "ICommandFinalInterceptor<TCommand>"
description: "Represents a final interceptor for commands in the pipeline."
sidebar:
  label: "ICommandFinalInterceptor<TCommand>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a final interceptor for commands in the pipeline.

```csharp
public interface ICommandFinalInterceptor<in TCommand> : ICommand, IMessage, IAsyncFinalInterceptor<TCommand>, IFinalInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/FinalInterceptors/ICommandFinalInterceptor%5BTCommand%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command this interceptor handles. Must implement [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand). |

## Remarks

A final interceptor is always executed at the end of the pipeline, after pre-, post-, and exception interceptors.
It can observe the message, result, or exception, but should not modify the result directly.

Use this interface to perform logging, cleanup, or any last-step operations in the command pipeline.
