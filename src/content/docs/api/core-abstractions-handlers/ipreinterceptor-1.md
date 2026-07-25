---
title: "IPreInterceptor<TMessage>"
description: "Synchronous pre-interceptor contract for messages of type TMessage."
sidebar:
  label: "IPreInterceptor<TMessage>"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Synchronous pre-interceptor contract for messages of type `TMessage`.
Executed before the main handler; may inspect, validate, enrich, or replace the message.

```csharp
public interface IPreInterceptor<in TMessage> : IPreInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/PreInterceptors/IPreInterceptor%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |

## Remarks

This is a standalone synchronous contract — asynchronous pre-interceptors implement
[`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpreinterceptor-1) instead; the pipeline dispatches each through
its own typed member with no object-typed bridge between them.

## Methods

### `Handle(TMessage, IExecutionContext)`

```csharp
object Handle(TMessage message, IExecutionContext context)
```

Handles a message before it reaches the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The input message to process. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The current execution context. |

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object) — The message that continues through the pipeline — either `message` itself or a modified instance of `TMessage`.
