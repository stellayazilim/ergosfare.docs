---
title: "IAsyncHandler<TMessage, TResult>"
description: "Handles messages of type TMessage asynchronously and produces a TResult."
sidebar:
  label: "IAsyncHandler<TMessage, TResult>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Handles messages of type `TMessage` asynchronously and produces a
`TResult`.

```csharp
public interface IAsyncHandler<in TMessage, TResult> : IHandler where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IAsyncHandler%5BTMessage%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this handler accepts. |
| `TResult` | The result type this handler produces. |

## Remarks

A handler that completes synchronously allocates nothing by returning the value
directly, and one that already holds a [`Task<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1) can wrap it with
`new ValueTask<TResult>(task)`.

## Methods

### `HandleAsync(TMessage, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TMessage message, ErgosfareContext context)
```

Handles `message` and produces the result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to handle. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<TResult>` — The result of handling `message`.
