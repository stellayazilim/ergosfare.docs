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

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/ICommandMediator.cs#L22)

## Remarks

The command mediator is responsible for routing commands to their appropriate handlers
    and orchestrating the command handling pipeline. It ensures that commands are processed
    by exactly one handler and provides methods for sending commands both with and without
    expected results.

    Everything a dispatch can be told is a parameter. A settings object used to carry the
    same two things, and carrying them that way meant allocating one per dispatch and
    reading it at dispatch time — a shape nothing can be compiled from. The conveniences
    below are default implementations over the full calls, so an implementation writes
    four methods and inherits the rest.

## Methods

### `SendAsync(ICommand, CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, CancellationToken cancellationToken = default)
```

Sends a command through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask SendAsync(ICommand command, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Sends under an externally owned execution context — the nested-dispatch path: a
handler opens a scope on its own context (`using var scope = context.CreateScope();`)
and passes `scope.Context` here. The caller owns the context's lifetime;
cancellation flows from the context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, GroupSet, CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, GroupSet groups, CancellationToken cancellationToken = default)
```

Sends under a canonical group filter. Define the set once, statically, and the cached
pipeline matches it on a single reference check; [`GroupSet.Empty`](/ergosfare.docs/preview/api/core-abstractions/groupset#empty)
dispatches the default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, IEnumerable<string>?, CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Sends a command that produces no result to its handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) | The command to send. |
| `groups` | `IEnumerable<string>` | The group filter, or `null` for the default pipeline. A reused [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) matches the cached pipeline on a single reference check. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, string[], CancellationToken)`

```csharp
ValueTask SendAsync(ICommand command, string[] groups, CancellationToken cancellationToken = default)
```

Sends under a group filter given as a plain array.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync<TCommand, TResult>(TCommand, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
```

Typed send through the default pipeline.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TCommand, TResult>(TCommand, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, ErgosfareContext context, IEnumerable<string>? groups = null) where TCommand : ICommand<TResult>
```

Typed counterpart of the context send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TCommand, TResult>(TCommand, GroupSet, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, GroupSet groups, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
```

Typed counterpart of the canonical group-filter send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TCommand, TResult>(TCommand, IEnumerable<string>?, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, IEnumerable<string>? groups, CancellationToken cancellationToken) where TCommand : ICommand<TResult>
```

Sends a command whose own type is named alongside its result, so the dispatch
reaches its pipeline through a compile-time constant pair rather than reading the
command's type back at run time.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` | The command's own type. |
| `TResult` | The result the command declares. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

Every other lane already takes the message as its type argument; this one could
    not, because `TResult` has to be a type parameter for the
    return type and C# does not infer type arguments through constraints. Naming
    both is the price, and it is why these are additions rather than replacements:
    `SendAsync<TResult>(ICommand<TResult>)` stays the terse form,
    and dispatching a command read off a queue is a legitimate shape whose concrete
    type genuinely is a run-time fact.

    Default implementations over the untyped calls, so an existing implementation
    keeps compiling and simply forwards. What is gained is gained by overriding
    them — `CommandMediator` does.

### `SendAsync<TCommand, TResult>(TCommand, string[], CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand command, string[] groups, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
```

Typed counterpart of the array group-filter send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `TCommand` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, CancellationToken cancellationToken = default)
```

Result-producing counterpart of [`ICommandMediator.SendAsync(ICommand, CancellationToken)`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator#sendasyncicommand-cancellationtoken).

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, ErgosfareContext, IEnumerable<string>?)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Result-producing counterpart of the context send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, GroupSet, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, GroupSet groups, CancellationToken cancellationToken = default)
```

Result-producing counterpart of the canonical group-filter send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, IEnumerable<string>?, CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Result-producing counterpart of the full void send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, string[], CancellationToken)`

```csharp
ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> command, string[] groups, CancellationToken cancellationToken = default)
```

Result-producing counterpart of the array group-filter send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `command` | `ICommand<TResult>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`
