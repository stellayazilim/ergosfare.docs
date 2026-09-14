---
title: "IAsyncPostInterceptor<TMessage>"
description: "Runs after the main handler of a TMessage asynchronously, without naming the result type."
sidebar:
  label: "IAsyncPostInterceptor<TMessage>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs after the main handler of a `TMessage` asynchronously,
without naming the result type.

```csharp
public interface IAsyncPostInterceptor<in TMessage> : IPostInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IAsyncPostInterceptor%5BTMessage%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |

## Remarks

Use this when the interceptor works for any result — logging or metrics, say. To read
or replace a typed result, implement
[`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-2) instead. These are separate
contracts and an interceptor implements one of them.

## Methods

### `HandleAsync(TMessage, object, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, object messageResult, ErgosfareContext context)
```

Processes the result of handling `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was handled. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result as the previous stage left it. Void pipelines pass a completed task here, which carries no meaning. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result the rest of the pipeline receives — either `messageResult` or a replacement, which must be of the pipeline's result type. If it carries a failure the result type's adapter can read, the remaining post-interceptors are skipped and the pipeline moves to its exception stage.
