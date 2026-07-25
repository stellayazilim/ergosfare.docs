---
title: "ICommandPreInterceptor"
description: "Represents a pre-interceptor for commands that is invoked before the command enters the pipeline."
sidebar:
  label: "ICommandPreInterceptor"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents a pre-interceptor for commands that is invoked before the command
enters the pipeline. Can be used to modify the command or perform preparatory actions.

```csharp
public interface ICommandPreInterceptor : ICommand, IMessage, IAsyncPreInterceptor<ICommand>, IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/PreInterceptors/ICommandPreInterceptor.cs#L16)

## Remarks

This is a non-generic, non-type-safe version of a pre-interceptor. It works with any
command implementing [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand). For type-safe interception, consider
using [`ICommandPreInterceptor<TCommand>`](/ergosfare.docs/api/commands-abstractions/icommandpreinterceptor-1) or
[`ICommandPreInterceptor<TCommand, TModifiedCommand>`](/ergosfare.docs/api/commands-abstractions/icommandpreinterceptor-2).
