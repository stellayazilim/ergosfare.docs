---
title: "ICommandPostInterceptor<TCommand>"
description: "Runs after the handler of a TCommand, without naming the result type."
sidebar:
  label: "ICommandPostInterceptor<TCommand>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs after the handler of a `TCommand`, without naming the result
type.

```csharp
public interface ICommandPostInterceptor<in TCommand> : ICommand, IMessage, IAsyncPostInterceptor<TCommand>, IPostInterceptor where TCommand : ICommand
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PostInterceptors/ICommandPostInterceptor%5BTCommand%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command type this interceptor accepts. |

## Remarks

Use this where the work applies to any result — logging or metrics, say — and the result
arrives as [`object`](https://learn.microsoft.com/dotnet/api/system.object). To read or replace a typed result, implement
[`ICommandPostInterceptor<TCommand, TResult>`](/ergosfare.docs/api/commands-abstractions/icommandpostinterceptor-2).
