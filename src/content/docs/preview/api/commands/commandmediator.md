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

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands/CommandMediator.cs#L11)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`ICommandMediator`](/ergosfare.docs/preview/api/commands-abstractions/icommandmediator)

## Constructors

### `CommandMediator(MessageDispatchEngine, IServiceProvider)`

```csharp
public CommandMediator(MessageDispatchEngine engine, IServiceProvider serviceProvider)
```

Engine-backed construction: dispatches go straight to the process-wide engine with
`serviceProvider` as the handler-resolution scope, making the
facade the only object built per resolution.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `engine` | [`MessageDispatchEngine`](/ergosfare.docs/preview/api/core/messagedispatchengine) | The singleton dispatch engine. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope this facade serves. |

## Methods

### `SendAsync(ICommand, CancellationToken)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, CancellationToken cancellationToken = default)
```

Sends a command through its default pipeline.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

The conveniences are declared here as well as on the interface. They used to be
extension methods, which a concrete-typed receiver finds; a default interface method is
not, so carrying them only on the interface would have broken every call made through
this class.

### `SendAsync(ICommand, ErgosfareContext, IEnumerable<string>?)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Sends under an externally owned execution context — the nested-dispatch path: a
handler opens a scope on its own context (`using var scope = context.CreateScope();`)
and passes `scope.Context` here. The caller owns the context's lifetime;
cancellation flows from the context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, GroupSet, CancellationToken)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, GroupSet groups, CancellationToken cancellationToken = default)
```

Sends under a canonical group filter; an empty set routes to the group-less lane.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, IEnumerable<string>?, CancellationToken)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Sends a command that produces no result to its handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `groups` | `IEnumerable<string>` | The group filter, or `null` for the default pipeline. A reused [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) matches the cached pipeline on a single reference check. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | Cancellation token for the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync(ICommand, string[], CancellationToken)`

```csharp
public ValueTask SendAsync(ICommand commandConstruct, string[] groups, CancellationToken cancellationToken = default)
```

Sends under a group filter given as a plain array.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand) |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### `SendAsync<TCommand, TResult>(TCommand, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
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
| `commandConstruct` | `TCommand` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TCommand, TResult>(TCommand, ErgosfareContext, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, ErgosfareContext context, IEnumerable<string>? groups = null) where TCommand : ICommand<TResult>
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
| `commandConstruct` | `TCommand` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TCommand, TResult>(TCommand, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, GroupSet groups, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
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
| `commandConstruct` | `TCommand` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TCommand, TResult>(TCommand, IEnumerable<string>?, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, IEnumerable<string>? groups, CancellationToken cancellationToken) where TCommand : ICommand<TResult>
```

Typed send: both the command's own type and its result reach the engine as type
arguments, so the executor is a static generic field read instead of a lookup keyed
by the command's run-time type.

**Type parameters**

| Name | Description |
| --- | --- |
| `TCommand` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `TCommand` |  |
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
public ValueTask<TResult> SendAsync<TCommand, TResult>(TCommand commandConstruct, string[] groups, CancellationToken cancellationToken = default) where TCommand : ICommand<TResult>
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
| `commandConstruct` | `TCommand` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, CancellationToken cancellationToken = default)
```

Result-producing counterpart of the default send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, ErgosfareContext, IEnumerable<string>?)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, ErgosfareContext context, IEnumerable<string>? groups = null)
```

Result-producing counterpart of the context send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |
| `groups` | `IEnumerable<string>` |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, GroupSet, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, GroupSet groups, CancellationToken cancellationToken = default)
```

Result-producing counterpart of the canonical group-filter send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `groups` | [`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, IEnumerable<string>?, CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, IEnumerable<string>? groups, CancellationToken cancellationToken)
```

Result-producing counterpart of the full void send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `groups` | `IEnumerable<string>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`

### `SendAsync<TResult>(ICommand<TResult>, string[], CancellationToken)`

```csharp
public ValueTask<TResult> SendAsync<TResult>(ICommand<TResult> commandConstruct, string[] groups, CancellationToken cancellationToken = default)
```

Result-producing counterpart of the array group-filter send.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `commandConstruct` | `ICommand<TResult>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`ValueTask<TResult>`
