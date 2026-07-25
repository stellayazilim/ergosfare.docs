---
title: "IAsyncExceptionInterceptor<TMessage, TResult>"
description: "Asynchronous exception-interceptor contract for messages of type TMessage with strongly typed results of type TResult."
sidebar:
  label: "IAsyncExceptionInterceptor<TMessage, TResult>"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Asynchronous exception-interceptor contract for messages of type
`TMessage` with strongly typed results of type
`TResult`. Executed when the pipeline throws; may observe the
exception and replace the result.

```csharp
public interface IAsyncExceptionInterceptor<in TMessage, in TResult> : IExceptionInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IAsyncExceptionHandler%5BTMessage%2CTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |
| `TResult` | The type of result produced by the handler. |

## Remarks

This is a standalone asynchronous contract — it does not inherit the synchronous
[`IExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptor-2), and there is no object-typed
default implementation: the pipeline invokes [`IAsyncExceptionInterceptor<TMessage, TResult>.HandleAsync(TMessage, TResult?, Exception, IExecutionContext)`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2#handleasynctmessage-tresult-exception-iexecutioncontext) directly.

## Methods

### `HandleAsync(TMessage, TResult?, Exception, IExecutionContext)`

```csharp
ValueTask<object?> HandleAsync(TMessage message, TResult? result, Exception exception, IExecutionContext context)
```

Handles an exception thrown while processing the message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message whose processing threw. |
| `result` | `TResult` | The result produced so far, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception that was thrown. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) whose result is the (possibly replaced) result that continues through the pipeline, or `null` to keep the current result.
