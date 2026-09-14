---
title: "IAsyncPostInterceptor<TMessage, TResult>"
description: "Runs after the main handler of a TMessage asynchronously and decides what result the rest of the pipeline sees."
sidebar:
  label: "IAsyncPostInterceptor<TMessage, TResult>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs after the main handler of a `TMessage` asynchronously and
decides what result the rest of the pipeline sees.

```csharp
public interface IAsyncPostInterceptor<in TMessage, in TResult> : IPostInterceptor where TMessage : notnull where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IAsyncPostInterceptor%5BTMessage%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |
| `TResult` | The result type this interceptor accepts. |

## Remarks

This is a contract in its own right; it does not extend the synchronous
[`IPostInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ipostinterceptor-2), and an interceptor implements one of
the post-interceptor contracts.

## Methods

### `HandleAsync(TMessage, TResult, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, TResult messageResult, ErgosfareContext context)
```

Processes the result of handling `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was handled. |
| `messageResult` | `TResult` | The result as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result the rest of the pipeline receives — either `messageResult` or a replacement. The produced value must be a `TResult`; the pipeline casts it before passing it on. If it carries a failure the result type's adapter can read, the remaining post-interceptors are skipped and the pipeline moves to its exception stage.
