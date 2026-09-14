---
title: "IHandler<TMessage, TResult>"
description: "Handles messages of type TMessage synchronously and returns a TResult."
sidebar:
  label: "IHandler<TMessage, TResult>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Handles messages of type `TMessage` synchronously and returns a
`TResult`.

```csharp
public interface IHandler<in TMessage, out TResult> : IHandler where TMessage : notnull where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IHandler%5BTMessage%2CTResult%5D.cs#L13)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this handler accepts. |
| `TResult` | The result type this handler produces. |

## Remarks

Implement [`IAsyncHandler<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasynchandler-2) instead when handling involves
awaiting; the two are separate contracts and a handler implements one of them.

## Methods

### `Handle(TMessage, ErgosfareContext)`

```csharp
TResult Handle(TMessage message, ErgosfareContext context)
```

Handles `message` and returns the result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to handle. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`TResult` — The result of handling `message`.
