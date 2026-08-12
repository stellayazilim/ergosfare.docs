---
title: "IAsyncPostInterceptor<TMessage>"
description: "Asynchronous post-interceptor contract for messages of type TMessage that is agnostic of the result type."
sidebar:
  label: "IAsyncPostInterceptor<TMessage>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Asynchronous post-interceptor contract for messages of type `TMessage`
that is agnostic of the result type. Executes after the main handler has processed the message.

```csharp
public interface IAsyncPostInterceptor<in TMessage> : IPostInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IAsyncPostInterceptor%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message being handled. |

## Remarks

This is a standalone asynchronous contract — it does not inherit the synchronous
[`IPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ipostinterceptor-2), and there is no object-typed default
implementation: the pipeline invokes [`IAsyncPostInterceptor<TMessage>.HandleAsync(TMessage, object, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-1#handleasynctmessage-object-ergosfarecontext) directly.

## Methods

### `HandleAsync(TMessage, object, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, object messageResult, ErgosfareContext context)
```

Handles a message asynchronously after it has been processed by the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was handled by the main handler. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced so far by the pipeline. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) whose result is the (possibly replaced) result that continues through the pipeline.
