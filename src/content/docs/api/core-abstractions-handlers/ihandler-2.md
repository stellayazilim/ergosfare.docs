---
title: "IHandler<TMessage, TResult>"
description: "Represents a strongly-typed handler for processing messages of type TMessage and producing a result of type TResult."
sidebar:
  label: "IHandler<TMessage, TResult>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents a strongly-typed handler for processing messages of type `TMessage`
and producing a result of type `TResult`.

```csharp
public interface IHandler<in TMessage, out TResult> : IHandler where TMessage : notnull where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IHandler%5BTMessage%2CTResult%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message to handle. Must be non-nullable. |
| `TResult` | The type of the result produced by the handler. Must be non-nullable. |

## Remarks

Implementations of this interface provide synchronous handling logic and return the
typed result directly — there is no object-typed bridge member; the pipeline invokes
handlers exclusively through their typed members.

## Methods

### `Handle(TMessage, ErgosfareContext)`

```csharp
TResult Handle(TMessage message, ErgosfareContext context)
```

Handles a message of type `TMessage` and returns a strongly-typed result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to handle. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`TResult` — The result of type `TResult` produced by handling the message.
