---
title: "IAsyncPreInterceptor<TMessage>"
description: "Asynchronous pre-interceptor contract for messages of type TMessage."
sidebar:
  label: "IAsyncPreInterceptor<TMessage>"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Asynchronous pre-interceptor contract for messages of type `TMessage`.
Executed before the main handler; may inspect, validate, or replace the message.

```csharp
public interface IAsyncPreInterceptor<in TMessage> : IPreInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PreInterceptors/IAsyncPreInterceptor%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |

## Remarks

This is a standalone asynchronous contract — it does not inherit the synchronous
[`IPreInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ipreinterceptor-1), and there is no object-typed default
implementation: the pipeline invokes [`IAsyncPreInterceptor<TMessage>.HandleAsync(TMessage, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpreinterceptor-1#handleasynctmessage-ergosfarecontext) directly.

## Methods

### `HandleAsync(TMessage, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, ErgosfareContext context)
```

Handles a message asynchronously before it reaches the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The input message to be processed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) whose result is the message that continues through the pipeline — either the original message or a modified instance of `TMessage`.
