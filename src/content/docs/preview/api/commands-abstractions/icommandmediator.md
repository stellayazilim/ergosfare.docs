---
title: "ICommandMediator"
description: "Sends commands to their handlers."
sidebar:
  label: "ICommandMediator"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions`](/ergosfare.docs/preview/api/commands-abstractions)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

Sends commands to their handlers.

```csharp
public interface ICommandMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ICommandMediator.cs#L13)

## Remarks

Everything a dispatch needs is passed as an argument. Only the four overloads that take
`IEnumerable<string>` groups or an [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) are abstract;
the rest are conveniences implemented in terms of those, so an implementation writes four
methods and inherits the others.

## Methods

### `SendAsync(ICommand, CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, CancellationToken cancellationToken = default)
```

Sends `command` through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, ErgosfareContext, GroupSet?)`

```csharp
ValueTask SendAsync(ICommand command, ErgosfareContext context, GroupSet? groups = null)
```

Sends `command` under an execution context supplied by the caller —
the shape a nested send uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to send. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The context to run under, typically a child opened with `using var scope = context.CreateScope();` and passed as `scope.Context`. The caller owns its lifetime, and cancellation comes from it. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, GroupSet, CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, GroupSet groups, CancellationToken cancellationToken = default)
```

Sends `command` to its handler and completes when the pipeline has
run.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to send. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. Reusing a [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) lets the cached pipeline be matched by reference. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync<TCommand, TResult>(TCommand, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
```

Sends `command` through its default pipeline, naming both types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command's own type. |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TCommand, TResult>(TCommand, ErgosfareContext, GroupSet?)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, ErgosfareContext context, GroupSet? groups = null) where TCommand : ICommand<TResult>
```

Sends `command` under a caller-owned context, naming both types.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command's own type. |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command to send. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TCommand, TResult>(TCommand, GroupSet, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, GroupSet groups, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
```

Sends `command` naming its own type alongside its result, so the
pipeline is reached through a pair of compile-time constants instead of the command's
type being read back at run time.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command's own type. |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` | The command to send. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

Both type arguments have to be named: `TResult` must be a type
parameter for the return type, and C# will not infer type arguments through a
constraint. That is why these overloads are additions rather than replacements —
`SendAsync<TResult>(ICommand<TResult>)` stays the short form, and a
command read off a queue genuinely does not know its type until run time.

The default implementation simply forwards to the untyped call, so an existing
implementation keeps working; the benefit comes from overriding it, as
`CommandMediator` does.

### `SendAsync<TResult>(ICommand<TResult>, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, CancellationToken cancellationToken = default)
```

Sends `command` through its default pipeline and returns its result.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` | The command to send. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TResult>(ICommand<TResult>, ErgosfareContext, GroupSet?)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, ErgosfareContext context, GroupSet? groups = null)
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
| `command` | `ICommand<TResult>` | The command to send. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The context to run under; the caller owns its lifetime. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.

### `SendAsync<TResult>(ICommand<TResult>, GroupSet, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, GroupSet groups, CancellationToken cancellationToken = default)
```

Sends `command` and returns the result its handler produced.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` | The command to send. |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) | The groups to run; an empty set runs the default group. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Token exposed on the execution context. |

**Returns**

`ValueTask<TResult>` — The result the handler produced.
