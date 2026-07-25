---
title: "IAsyncPostInterceptor<TMessage, TResult>"
description: "Asynchronous post-interceptor contract for messages of type TMessage producing results of type TResult."
sidebar:
  label: "IAsyncPostInterceptor<TMessage, TResult>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Asynchronous post-interceptor contract for messages of type `TMessage`
producing results of type `TResult`. Executes after the main handler
and may observe or replace the result.

```csharp
public interface IAsyncPostInterceptor<in TMessage, in TResult> : IPostInterceptor where TMessage : notnull where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IAsyncPostInterceptor%5BTMessage%2CTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message being handled. |
| `TResult` | The type of result produced by the handler. |

## Remarks

This is a standalone asynchronous contract — it does not inherit the synchronous
[`IPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ipostinterceptor-2), and there is no object-typed default
implementation: the pipeline invokes [`IAsyncPostInterceptor<TMessage, TResult>.HandleAsync(TMessage, TResult, IExecutionContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-2#handleasynctmessage-tresult-iexecutioncontext) directly.

## Methods

### `HandleAsync(TMessage, TResult, IExecutionContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, TResult messageResult, IExecutionContext context)
```

Handles a message asynchronously after it has been processed by the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was handled by the main handler. |
| `messageResult` | `TResult` | The result produced by the main handler. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) whose result is the (possibly replaced) result that continues through the pipeline.
