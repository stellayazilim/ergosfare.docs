---
title: "IPostInterceptor<TMessage, TResult>"
description: "Runs after the main handler of a TMessage and decides what result the rest of the pipeline sees."
sidebar:
  label: "IPostInterceptor<TMessage, TResult>"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs after the main handler of a `TMessage` and decides what
result the rest of the pipeline sees.

```csharp
public interface IPostInterceptor<in TMessage, in TResult> : IPostInterceptor where TMessage : notnull where TResult : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PostInterceptors/IPostInterceptor%5BTMessage%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |
| `TResult` | The result type this interceptor accepts. |

## Remarks

Implement [`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-1) or
[`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-2) instead when the work involves
awaiting; an interceptor implements one of these contracts.

## Methods

### `Handle(TMessage, TResult, ErgosfareContext)`

```csharp
object Handle(TMessage message, TResult messageResult, ErgosfareContext context)
```

Processes the result of handling `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was handled. |
| `messageResult` | `TResult` | The result as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object) — The result the rest of the pipeline receives — either `messageResult` or a replacement. The returned value must be a `TResult`; the pipeline casts it before passing it on. If the returned result carries a failure that the result type's adapter can read, the remaining post-interceptors are skipped and the pipeline moves to its exception stage.
