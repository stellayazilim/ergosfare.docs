---
title: "IAsyncHandler<TMessage, TResult>"
description: "Represents an interface for asynchronously handling messages and producing a result of type TResult."
sidebar:
  label: "IAsyncHandler<TMessage, TResult>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents an interface for asynchronously handling messages and producing a result of type
`TResult`.

```csharp
public interface IAsyncHandler<in TMessage, TResult> : IHandler where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IAsyncHandler%5BTMessage%2CTResult%5D.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | Specifies the type of messages that this handler is capable of handling. |
| `TResult` | Specifies the type of result produced by the handler after successfully processing a message. |

## Remarks

Implementations of this interface should provide the logic for handling messages of type
`TMessage` in an asynchronous manner, producing a
[`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1). Synchronously completing handlers pay no allocation;
implementations that already hold a [`Task<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1) can wrap it
allocation-free via `new ValueTask<TResult>(task)`.

## Methods

### `HandleAsync(TMessage, ErgosfareContext)`

```csharp
ValueTask<TResult> HandleAsync(TMessage message, ErgosfareContext context)
```

Defines a method to handle messages asynchronously and produce a result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to be handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | Current execution context |

**Returns**

`ValueTask<TResult>` — A task representing the asynchronous handling operation. Upon successful completion of the task, it yields the result of the handling process, facilitating further operations or workflows based on the result.

Implementers should define the handling logic within this method, providing asynchronous operations to process the
message effectively and produce a result that can be used in subsequent stages of the workflow.
