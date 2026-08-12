---
title: "IAsyncExceptionInterceptor<TMessage>"
description: "Asynchronous exception-interceptor contract for messages of type TMessage that is agnostic of the result type."
sidebar:
  label: "IAsyncExceptionInterceptor<TMessage>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Asynchronous exception-interceptor contract for messages of type
`TMessage` that is agnostic of the result type.
Executed when the pipeline throws; may observe the exception and replace the result.

```csharp
public interface IAsyncExceptionInterceptor<in TMessage> : IExceptionInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IAsyncExceptionHandler%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |

## Remarks

This is a standalone asynchronous contract — it does not inherit the synchronous
[`IExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iexceptioninterceptor-2), and there is no object-typed
default implementation: the pipeline invokes [`IAsyncExceptionInterceptor<TMessage>.HandleAsync(TMessage, object?, Exception, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncexceptioninterceptor-1#handleasynctmessage-object-exception-ergosfarecontext) directly.

## Methods

### `HandleAsync(TMessage, object?, Exception, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, object? messageResult, Exception exception, ErgosfareContext context)
```

Handles an exception thrown while processing the message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message whose processing threw. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced so far, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception that was thrown. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) whose result is the (possibly replaced) result that continues through the pipeline.
