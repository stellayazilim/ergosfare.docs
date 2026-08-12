---
title: "IAsyncHandler<TMessage>"
description: "Represents an asynchronous handler for messages of type TMessage."
sidebar:
  label: "IAsyncHandler<TMessage>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents an asynchronous handler for messages of type `TMessage`.
Produces a [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) as the result, allowing for asynchronous workflows.

```csharp
public interface IAsyncHandler<in TMessage> : IHandler where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IAsyncHandler%5BTMessage%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message to handle. Must be non-nullable. |

## Remarks

This interface extends the generic [`IHandler<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ihandler-2) with
set to [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask), enabling asynchronous message processing.
Implementations that already hold a [`Task`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task) can wrap it allocation-free via
`new ValueTask(task)`; async method bodies work unchanged.
The explicit interface implementation maps the generic [`IHandler<TMessage, TResult>.Handle(TMessage, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/ihandler-2#handletmessage-ergosfarecontext) method
to the strongly-typed [`IAsyncHandler<TMessage>.HandleAsync(TMessage, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasynchandler-1#handleasynctmessage-ergosfarecontext) method.

## Methods

### `HandleAsync(TMessage, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TMessage message, ErgosfareContext context)
```

Handles a message of type `TMessage` asynchronously.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to handle. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous handling operation.
