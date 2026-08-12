---
title: "ICommandPostInterceptor<TCommand>"
description: "Represents a post-processing interceptor for commands."
sidebar:
  label: "ICommandPostInterceptor<TCommand>"
  order: 20
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a post-processing interceptor for commands.
This non-generic, non-type-safe version returns [`object`](https://learn.microsoft.com/dotnet/api/system.object) from the pipeline.

```csharp
public interface ICommandPostInterceptor<in TCommand> : ICommand, IMessage, IAsyncPostInterceptor<TCommand>, IPostInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PostInterceptors/ICommandPostInterceptor%5BTCommand%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The type of command this interceptor handles. Must implement [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand). |

## Remarks

Use this interface to register post-interceptors in the command pipeline without specifying a strongly-typed result.
For type-safe scenarios, prefer using the generic version:
[`ICommandPostInterceptor<TCommand, TResult>`](/ergosfare.docs/api/commands-abstractions/icommandpostinterceptor-2).
