---
title: "IAsyncFinalInterceptor<TMessage, TResult>"
description: "Asynchronous final-interceptor contract for messages of type TMessage with strongly typed results of type TResult."
sidebar:
  label: "IAsyncFinalInterceptor<TMessage, TResult>"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Asynchronous final-interceptor contract for messages of type `TMessage`
with strongly typed results of type `TResult`. Always executed at the
end of the pipeline, regardless of success or failure — for cleanup, auditing, or logging.

```csharp
public interface IAsyncFinalInterceptor<in TMessage, in TResult> : IFinalInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IAsyncFinalInterceptor%5BTMessage%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |
| `TResult` | The type of result produced by the handler. |

## Remarks

This is a standalone asynchronous contract — it does not inherit the synchronous
[`IFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ifinalinterceptor-2), and there is no object-typed default
implementation: the pipeline invokes [`IAsyncFinalInterceptor<TMessage, TResult>.HandleAsync(TMessage, TResult?, Exception?, IExecutionContext)`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-2#handleasynctmessage-tresult-exception-iexecutioncontext) directly.

## Methods

### `HandleAsync(TMessage, TResult?, Exception?, IExecutionContext)`

```csharp
ValueTask HandleAsync(TMessage message, TResult? result, Exception? exception, IExecutionContext context)
```

Handles the end of the pipeline for the given message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was processed. |
| `result` | `TResult` | The final result, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception that terminated the pipeline, if any. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous operation.
