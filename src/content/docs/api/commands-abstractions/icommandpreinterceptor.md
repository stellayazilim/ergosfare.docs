---
title: "ICommandPreInterceptor"
description: "Runs before the handler of any command, whatever its type."
sidebar:
  label: "ICommandPreInterceptor"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Runs before the handler of any command, whatever its type.

```csharp
public interface ICommandPreInterceptor : ICommand, IMessage, IAsyncPreInterceptor<ICommand>, IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PreInterceptors/ICommandPreInterceptor.cs#L15)

## Remarks

Because it accepts every command, this contract sees them as [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) and
returns [`object`](https://learn.microsoft.com/dotnet/api/system.object). To work with one command type without casting — and to
return that type rather than [`object`](https://learn.microsoft.com/dotnet/api/system.object) — implement
[`ICommandPreInterceptor<TCommand>`](/ergosfare.docs/api/commands-abstractions/icommandpreinterceptor-1).
