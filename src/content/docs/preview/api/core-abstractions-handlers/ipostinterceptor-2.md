---
title: "IPostInterceptor<TMessage, TResult>"
description: "Synchronous post-interceptor contract for messages of type TMessage producing results of type TResult."
sidebar:
  label: "IPostInterceptor<TMessage, TResult>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Synchronous post-interceptor contract for messages of type `TMessage`
producing results of type `TResult`. Executes after the main handler
and may observe or replace the result.

```csharp
public interface IPostInterceptor<in TMessage, in TResult> : IPostInterceptor where TMessage : notnull where TResult : notnull
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IPostInterceptor%5BTMessage%2CTResult%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. Must be non-nullable. |
| `TResult` | The type of result produced by the handler. Must be non-nullable. |

## Remarks

This is a standalone synchronous contract — asynchronous post-interceptors implement
[`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-1) or
[`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-2) instead; the pipeline dispatches
each through its own typed member with no object-typed bridge between them.

## Methods

### `Handle(TMessage, TResult, IExecutionContext)`

```csharp
object Handle(TMessage message, TResult messageResult, IExecutionContext context)
```

Handles a message after it has been processed by the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was handled by the main handler. |
| `messageResult` | `TResult` | The result produced by the main handler. |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object) — The (possibly replaced) result that continues through the pipeline.
