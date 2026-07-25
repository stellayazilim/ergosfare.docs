---
title: "IAsyncFinalInterceptor<TMessage>"
description: "Asynchronous final-interceptor contract for messages of type TMessage that is agnostic of the result type."
sidebar:
  label: "IAsyncFinalInterceptor<TMessage>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Asynchronous final-interceptor contract for messages of type `TMessage`
that is agnostic of the result type. Always executed at the end of the pipeline,
regardless of success or failure — for cleanup, auditing, or logging.

```csharp
public interface IAsyncFinalInterceptor<in TMessage> : IFinalInterceptor
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IAsyncFinalInterceptor%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |

## Remarks

This is a standalone asynchronous contract — it does not inherit the synchronous
[`IFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ifinalinterceptor-2), and there is no object-typed default
implementation: the pipeline invokes [`IAsyncFinalInterceptor<TMessage>.HandleAsync(TMessage, object?, Exception?, IExecutionContext)`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-1#handleasynctmessage-object-exception-iexecutioncontext) directly.

## Methods

### `HandleAsync(TMessage, object?, Exception?, IExecutionContext)`

```csharp
ValueTask HandleAsync(TMessage message, object? result, Exception? exception, IExecutionContext context)
```

Handles the end of the pipeline for the given message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was processed. |
| `result` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The final result, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception that terminated the pipeline, if any. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous operation.
