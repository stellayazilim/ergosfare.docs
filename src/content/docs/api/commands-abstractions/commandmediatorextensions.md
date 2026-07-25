---
title: "CommandMediatorExtensions"
description: "Provides extension methods for ICommandMediator to simplify sending commands."
sidebar:
  label: "CommandMediatorExtensions"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Provides extension methods for [`ICommandMediator`](/ergosfare.docs/api/commands-abstractions/icommandmediator) to simplify sending commands.

```csharp
public static class CommandMediatorExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands.Abstractions/CommandMediatorExtensions.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `SendAsync(ICommandMediator, ICommand, CancellationToken)`

```csharp
public static ValueTask SendAsync(this ICommandMediator commandMediator, ICommand command, CancellationToken cancellationToken = default)
```

Sends a command asynchronously without specifying groups.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandMediator` | [`ICommandMediator`](/ergosfare.docs/api/commands-abstractions/icommandmediator) | The command mediator instance. |
| `command` | [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous operation.

### `SendAsync(ICommandMediator, ICommand, string[], CancellationToken)`

```csharp
public static ValueTask SendAsync(this ICommandMediator commandMediator, ICommand command, string[] groups, CancellationToken cancellationToken = default)
```

Sends a command asynchronously with the specified groups for filtering.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandMediator` | [`ICommandMediator`](/ergosfare.docs/api/commands-abstractions/icommandmediator) | The command mediator instance. |
| `command` | [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) | The command to send. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The groups used to filter command handlers. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous operation.

### `SendAsync<TResult>(ICommandMediator, ICommand<TResult>, CancellationToken)`

```csharp
public static ValueTask<TResult> SendAsync<TResult>(this ICommandMediator commandMediator, ICommand<TResult> command, CancellationToken cancellationToken = default)
```

Sends a command that returns a result asynchronously without specifying groups.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of result returned by the command. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandMediator` | [`ICommandMediator`](/ergosfare.docs/api/commands-abstractions/icommandmediator) | The command mediator instance. |
| `command` | `ICommand<TResult>` | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous operation returning the result.

### `SendAsync<TResult>(ICommandMediator, ICommand<TResult>, string[], CancellationToken)`

```csharp
public static ValueTask<TResult> SendAsync<TResult>(this ICommandMediator commandMediator, ICommand<TResult> command, string[] groups, CancellationToken cancellationToken = default)
```

Sends a command that returns a result asynchronously with the specified groups for filtering.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of result returned by the command. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandMediator` | [`ICommandMediator`](/ergosfare.docs/api/commands-abstractions/icommandmediator) | The command mediator instance. |
| `command` | `ICommand<TResult>` | The command to send. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The groups used to filter command handlers. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Optional cancellation token. |

**Returns**

`ValueTask<TResult>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) representing the asynchronous operation returning the result.
