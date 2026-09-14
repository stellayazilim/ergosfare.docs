---
title: "Stella.Ergosfare.Commands.Abstractions"
description: "Types in the Stella.Ergosfare.Commands.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Commands.Abstractions` namespace contains 19 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | Interface | Marks a type as a command: a message sent to exactly one handler to carry out an operation. |
| [`ICommand<TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommand-1) | Interface | Marks a type as a command whose handler returns a `TResult`. |
| [`ICommandExceptionInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor) | Interface | Handles failures raised while dispatching any command, whatever its type. |
| [`ICommandExceptionInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-2) | Interface | Handles failures raised while dispatching a `TCommand` and supplies the result the caller receives instead. |
| [`ICommandExceptionInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-1) | Interface | Handles failures raised while dispatching a `TCommand`, without naming the result type. |
| [`ICommandExceptionInterceptorFor<TCommand, TException>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptorfor-2) | Interface | Handles failures of type `TException` raised while dispatching a `TCommand`, without naming the result type. |
| [`ICommandExceptionInterceptorFor<TCommand, TResult, TException>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptorfor-3) | Interface | Handles failures of type `TException` raised while dispatching a `TCommand`, and supplies the result the caller receives instead. |
| [`ICommandExceptionInterceptorFor<TException>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptorfor-1) | Interface | Handles failures of type `TException` raised while dispatching any command — the shape a module-wide error policy takes. |
| [`ICommandFinalInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor) | Interface | Runs once the pipeline of any command has settled, whatever its type. |
| [`ICommandFinalInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor-2) | Interface | Runs once the pipeline of a `TCommand` has settled, reading its result as a `TResult`. |
| [`ICommandFinalInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor-1) | Interface | Runs once the pipeline of a `TCommand` has settled, whether it succeeded or failed. |
| [`ICommandHandler<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandhandler-2) | Interface | Handles commands of type `TCommand` and returns the `TResult` they declare. |
| [`ICommandHandler<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandhandler-1) | Interface | Handles commands of type `TCommand` that return nothing. |
| [`ICommandMediator`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator) | Interface | Sends commands to their handlers. |
| [`ICommandPostInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor) | Interface | Runs after the handler of any command, whatever its type. |
| [`ICommandPostInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor-2) | Interface | Runs after the handler of a `TCommand` and decides what result the caller receives. |
| [`ICommandPostInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor-1) | Interface | Runs after the handler of a `TCommand`, without naming the result type. |
| [`ICommandPreInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandpreinterceptor) | Interface | Runs before the handler of any command, whatever its type. |
| [`ICommandPreInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpreinterceptor-1) | Interface | Runs before the handler of a `TCommand` and decides which command the rest of the pipeline sees. |
