---
title: "CommandMediator"
description: "The command mediator an application resolves: it holds the scope it was resolved from and hands every send to the container's dispatch engine."
sidebar:
  label: "CommandMediator"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands`](/ergosfare.docs/api/commands)  
**Assembly:** `Stella.Ergosfare.Commands.dll`

The command mediator an application resolves: it holds the scope it was resolved from and
hands every send to the container's dispatch engine.

```csharp
public class CommandMediator : ICommandMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Commands/CommandMediator.cs#L14)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`ICommandMediator`](/ergosfare.docs/api/commands-abstractions/icommandmediator)

## Remarks

The engine is shared across the process and this facade is the only object built per
resolution.

## Methods

### `SendAsync(ICommand, CancellationToken)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, CancellationToken cancellationToken = default)
```

Sends `commandConstruct` through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

The conveniences are declared on this class as well as on the interface. A call made
through the concrete type does not find a default interface method, so declaring them
only on the interface would leave those calls without an overload to bind to.

### `SendAsync(ICommand, ErgosfareContext, GroupSet?)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, ErgosfareContext context, GroupSet? groups = null)
```

Sends `command` under an execution context supplied by the caller —
the shape a nested send uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under, typically a child opened with `using var scope = context.CreateScope();` and passed as `scope.Context`. The caller owns its lifetime, and cancellation comes from it. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, GroupSet, CancellationToken)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, GroupSet groups, CancellationToken cancellationToken = default)
```

Sends `command` to its handler and completes when the pipeline has
run.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/api/commands-abstractions/icommand) |  |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. Reusing a [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) lets the cached pipeline be matched by reference. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync<TCommand, TResult>(TCommand, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
```

Sends `commandConstruct` through its default pipeline, naming both
types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command's own type. |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `TCommand` | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TCommand, TResult>(TCommand, ErgosfareContext, GroupSet?)`

```csharp
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, ErgosfareContext context, GroupSet? groups = null) where TCommand : ICommand<TResult>
```

Sends `commandConstruct` under a caller-owned context, naming both
types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command's own type. |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `TCommand` | The command to send. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TCommand, TResult>(TCommand, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, GroupSet groups, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
```

Sends `commandConstruct` naming both its own type and its result, so
the pipeline is found through a static generic field rather than a lookup on the
command's runtime type.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command's own type. |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `TCommand` | The command to send. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TResult>(ICommand<TResult>, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, CancellationToken cancellationToken = default)
```

Sends `commandConstruct` through its default pipeline and returns
its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TResult>(ICommand<TResult>, ErgosfareContext, GroupSet?)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, ErgosfareContext context, GroupSet? groups = null)
```

Sends `command` under a caller-owned execution context and returns
its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TResult>(ICommand<TResult>, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, GroupSet groups, CancellationToken cancellationToken = default)
```

Sends `command` and returns the result its handler produced.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.
