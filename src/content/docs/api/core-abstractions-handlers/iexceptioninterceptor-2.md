---
title: "IExceptionInterceptor<TMessage, TResult>"
description: "Synchronous exception-interceptor contract for messages of type TMessage with results of type TResult."
sidebar:
  label: "IExceptionInterceptor<TMessage, TResult>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Synchronous exception-interceptor contract for messages of type
`TMessage` with results of type `TResult`.
Executed when the pipeline throws; may observe the exception and replace the result.

```csharp
public interface IExceptionInterceptor<in TMessage, in TResult> : IExceptionInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionHandler%5BTMessage%2CTResult%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |
| `TResult` | The type of result produced by the handler. |

## Remarks

This is a standalone synchronous contract — asynchronous exception interceptors implement
[`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-1) or
[`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2) instead; the pipeline
dispatches each through its own typed member with no object-typed bridge between them.

## Methods

### `Handle(TMessage, TResult?, Exception, IExecutionContext)`

```csharp
object? Handle(TMessage message, TResult? messageResult, Exception exception, IExecutionContext context)
```

Handles an exception thrown while processing the message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message whose processing threw. |
| `messageResult` | `TResult` | The result produced so far, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception that was thrown. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object) — The (possibly replaced) result that continues through the pipeline, or `null` to keep the current result.
