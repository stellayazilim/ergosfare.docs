---
title: "ICommandMediator"
description: "Represents the mediator interface for sending commands within the application."
sidebar:
  label: "ICommandMediator"
  order: 17
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

### `SendAsync(ICommand, ErgosfareContext, CommandMediationSettings?)`

```csharp
ValueTask SendAsync(ICommand command, ErgosfareContext context, CommandMediationSettings? commandMediationSettings = null)
```

Sends a void command under an externally owned execution context — the
nested-dispatch path: a handler opens a scope on its own context
(`using var scope = context.CreateScope();`) and passes `scope.Context`
here. The caller owns the context's lifetime; cancellation flows from the context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to send. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The externally owned execution context to dispatch under. |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Optional mediation settings (groups etc.). |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, GroupSet, CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, GroupSet groups, CancellationToken cancellationToken = default)
```

Sends a void command under a canonical group filter. With a reused
[`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) (define filters once, statically) the
grouped dispatch caches match on a single reference check and the call
allocates no settings object. The default implementation routes through the
settings overload, so foreign mediator implementations keep working unchanged.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to send. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The canonical group filter; [`GroupSet.Empty`](/ergosfare.docs/preview/api/core-abstractions/groupset#empty) dispatches the default pipeline. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync<TResult>(ICommand<TResult>, CommandMediationSettings?, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, CommandMediationSettings? commandMediationSettings = null, CancellationToken cancellationToken = default)
```

Asynchronously sends a command for mediation and returns a result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of the result returned by the command. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` | The command to be sent. |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Optional settings for command mediation that control aspects such as handler filtering. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation that can be used to cancel the command processing. |

**Returns**

`ValueTask<TResult>` — A task representing the asynchronous operation with a result of type `TResult`.

This method is used for commands that produce a result of type `TResult`.
The command is routed to its appropriate handler based on its type, and the command handling pipeline
is executed, including pre-handlers, the main handler, post-handlers, and error handlers if exceptions occur.
The result produced by the handler is returned to the caller.

### `SendAsync<TResult>(ICommand<TResult>, ErgosfareContext, CommandMediationSettings?)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, ErgosfareContext context, CommandMediationSettings? commandMediationSettings = null)
```

Result-producing counterpart of
[`ICommandMediator.SendAsync(ICommand, ErgosfareContext, CommandMediationSettings?)`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator#sendasyncicommand-ergosfarecontext-commandmediationsettings).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the command. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` | The command to send. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The externally owned execution context to dispatch under. |
| `commandMediationSettings` | [`CommandMediationSettings`](/ergosfare.docs/preview/api/commands-abstractions/commandmediationsettings) | Optional mediation settings (groups etc.). |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, GroupSet, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, GroupSet groups, CancellationToken cancellationToken = default)
```

Result-producing counterpart of
[`ICommandMediator.SendAsync(ICommand, GroupSet, CancellationToken)`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator#sendasyncicommand-groupset-cancellationtoken).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected result type of the command. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` | The command to send. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The canonical group filter. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

`ValueTask<TResult>`
