---
title: "CommandMediator"
description: "Mediates command messages through the pipeline executor closed over the command's runtime type: handlers are always invoked through their typed members, and…"
sidebar:
  label: "CommandMediator"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands`](/ergosfare.docs/preview/api/commands)  
**Assembly:** `Stella.Ergosfare.Commands.dll`

Mediates command messages through the pipeline executor closed over the command's
runtime type: handlers are always invoked through their typed members, and the dispatch
path carries no object-typed bridge, options object, or erased strategy.

```csharp
public class CommandMediator : ICommandMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands/CommandMediator.cs#L10)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`ICommandMediator`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator)

## Constructors

### `CommandMediator(IMessageMediator)`

```csharp
public CommandMediator(IMessageMediator messageMediator)
```

Mediates command messages through the pipeline executor closed over the command's
runtime type: handlers are always invoked through their typed members, and the dispatch
path carries no object-typed bridge, options object, or erased strategy.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageMediator` | [`IMessageMediator`](/ergosfare.docs/preview/api/core-abstractions/imessagemediator) |  |

## Methods

### `SendAsync(ICommand, CommandMediationSettings?, CancellationToken)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, CommandMediationSettings? commandMediationSettings = null, CancellationToken cancellationToken = default)
```

Sends a void command through the executor pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, IExecutionContext, CommandMediationSettings?)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, IExecutionContext context, CommandMediationSettings? commandMediationSettings = null)
```

Sends a void command under an externally owned execution context — the
nested-dispatch path: a handler opens a scope on its own context and passes the
child here. The caller owns the context's lifetime; cancellation flows from the
context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) |  |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync<TResult>(ICommand<TResult>, CommandMediationSettings?, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, CommandMediationSettings? commandMediationSettings = null, CancellationToken cancellationToken = default)
```

Sends a typed command through the executor pipeline and returns its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the command. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` | The command to send. |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Optional settings for command mediation, such as filtering or additional items. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for aborting the operation. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous operation and containing the command result.

### `SendAsync<TResult>(ICommand<TResult>, IExecutionContext, CommandMediationSettings?)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, IExecutionContext context, CommandMediationSettings? commandMediationSettings = null)
```

Result-producing counterpart of
[`CommandMediator.SendAsync(ICommand, IExecutionContext, CommandMediationSettings?)`](/ergosfare.docs/preview/api/commands/commandmediator#sendasyncicommand-iexecutioncontext-commandmediationsettings).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) |  |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) |  |

**Returns**

`ValueTask<TResult>`
