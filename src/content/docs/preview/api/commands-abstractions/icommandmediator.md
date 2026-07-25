---
title: "ICommandMediator"
description: "Represents the mediator interface for sending commands within the application."
sidebar:
  label: "ICommandMediator"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Represents the mediator interface for sending commands within the application.

```csharp
public interface ICommandMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ICommandMediator.cs#L14)

## Remarks

The command mediator is responsible for routing commands to their appropriate handlers
and orchestrating the command handling pipeline. It ensures that commands are processed
by exactly one handler and provides methods for sending commands both with and without
expected results.
In the CQRS pattern, commands represent intentions to change the system state. The command
mediator helps maintain separation between the command issuers and the command handlers.

## Methods

### `SendAsync(ICommand, CommandMediationSettings?, CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, CommandMediationSettings? commandMediationSettings = null, CancellationToken cancellationToken = default)
```

Asynchronously sends a command for mediation.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to be sent. |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Optional settings for command mediation that control aspects such as handler filtering. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation that can be used to cancel the command processing. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task representing the asynchronous operation.

This method is used for commands that do not produce a result. The command is routed to its
appropriate handler based on its type, and the command handling pipeline is executed, including
pre-handlers, the main handler, post-handlers, and error handlers if exceptions occur.

### `SendAsync(ICommand, IExecutionContext, CommandMediationSettings?)`

```csharp
ValueTask SendAsync(ICommand command, IExecutionContext context, CommandMediationSettings? commandMediationSettings = null)
```

Asynchronously sends a command for mediation and returns a result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to be sent. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The externally owned execution context to dispatch under. |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Optional settings for command mediation that control aspects such as handler filtering. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task representing the asynchronous operation with a result of type `TResult`.

This method is used for commands that produce a result of type `TResult`.
The command is routed to its appropriate handler based on its type, and the command handling pipeline
is executed, including pre-handlers, the main handler, post-handlers, and error handlers if exceptions occur.
The result produced by the handler is returned to the caller.

### `SendAsync<TResult>(ICommand<TResult>, CommandMediationSettings?, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, CommandMediationSettings? commandMediationSettings = null, CancellationToken cancellationToken = default)
```

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` |  |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, IExecutionContext, CommandMediationSettings?)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, IExecutionContext context, CommandMediationSettings? commandMediationSettings = null)
```

Result-producing counterpart of
[`ICommandMediator.SendAsync(ICommand, IExecutionContext, CommandMediationSettings?)`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator#sendasyncicommand-iexecutioncontext-commandmediationsettings).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the command. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` | The command to send. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The externally owned execution context to dispatch under. |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Optional mediation settings (groups etc.). |

**Returns**

`ValueTask<TResult>`
