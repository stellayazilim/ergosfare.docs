---
title: "Stella.Ergosfare.Commands.Abstractions"
description: "Types in the Stella.Ergosfare.Commands.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Commands.Abstractions` namespace contains 20 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Class | Represents the configuration settings that control command mediation behavior. |
| [`CommandMediationSettings.CommandMediationFilters`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings-commandmediationfilters) | Class | Represents the filters to be applied during command mediation. |
| [`CommandMediatorExtensions`](/ergosfare.docs/preview/api/commands-abstractions/commandmediatorextensions) | Class | Provides extension methods for [`ICommandMediator`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator) to simplify sending commands. |
| [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | Interface | Base command and a marker interface that can be registered by command module |
| [`ICommand<TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommand-1) | Interface | Represents a command that produces a result of type `TResult` when handled. |
| [`ICommandExceptionInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor) | Interface | Represents a non-type-safe exception interceptor for commands. |
| [`ICommandExceptionInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-2) | Interface | Represents a type-safe exception interceptor for commands with a strongly-typed result. The interceptor can inspect the exception and modify or replace the command result. |
| [`ICommandExceptionInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandexceptioninterceptor-1) | Interface | Marker interface for asynchronous exception interceptors for commands. Inherits the result-agnostic [`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-1) and [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) to allow registration within the command module. This interface does not modify the behavior or return type; interception logic is handled by [`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-1). |
| [`ICommandFinalInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor) | Interface | Represents a final interceptor for commands that can be registered without specifying a particular command type. |
| [`ICommandFinalInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor-2) | Interface | Represents a final interceptor for commands in the pipeline with a strongly typed result. |
| [`ICommandFinalInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandfinalinterceptor-1) | Interface | Represents a final interceptor for commands in the pipeline. |
| [`ICommandHandler<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandhandler-2) | Interface | Represents a handler for commands that produce a strongly-typed result. |
| [`ICommandHandler<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandhandler-1) | Interface | Represents a handler for commands implementing [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand). |
| [`ICommandMediator`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator) | Interface | Represents the mediator interface for sending commands within the application. |
| [`ICommandPostInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor) | Interface | Represents a post-processing interceptor for commands that executes after any [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) is handled. |
| [`ICommandPostInterceptor<TCommand, TResult>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor-2) | Interface | Represents a type-safe post-interceptor for commands with a strongly-typed result. Executes after the command handler has completed and can modify the result before it propagates further through the pipeline. |
| [`ICommandPostInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpostinterceptor-1) | Interface | Represents a post-processing interceptor for commands. This non-generic, non-type-safe version returns [`object`](https://learn.microsoft.com/dotnet/api/system.object) from the pipeline. |
| [`ICommandPreInterceptor`](/ergosfare.docs/preview/api/commands-abstractions/icommandpreinterceptor) | Interface | Represents a pre-interceptor for commands that is invoked before the command enters the pipeline. Can be used to modify the command or perform preparatory actions. |
| [`ICommandPreInterceptor<TCommand, TModifiedCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpreinterceptor-2) | Interface | Represents a type-safe pre-interceptor for commands, allowing modification of the command before it enters the pipeline. |
| [`ICommandPreInterceptor<TCommand>`](/ergosfare.docs/preview/api/commands-abstractions/icommandpreinterceptor-1) | Interface | Defines a type-safe pre-interceptor for a command. It runs before the handler and returns the command that continues through the pipeline — the original instance, or a rewritten one. |
