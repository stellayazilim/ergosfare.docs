---
title: "IAsyncHandler<TMessage>"
description: "Handles messages of type TMessage asynchronously without producing a result."
sidebar:
  label: "IAsyncHandler<TMessage>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Handles messages of type `TMessage` asynchronously without
producing a result.

```csharp
public interface IAsyncHandler<in TMessage> : IHandler where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IAsyncHandler%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this handler accepts. |

## Remarks

This is a contract in its own right, not a specialization of
[`IHandler<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ihandler-2). A handler that already holds a
[`Task`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task) can wrap it with `new ValueTask(task)`; an `async` method
body needs nothing special.

## Methods

### `HandleAsync(TMessage, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TMessage message, ErgosfareContext context)
```

Handles `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to handle. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when handling is done.
