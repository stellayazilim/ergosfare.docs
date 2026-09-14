---
title: "IAsyncPreInterceptor<TMessage>"
description: "Runs before the main handler of a TMessage asynchronously, and decides what the rest of the pipeline sees."
sidebar:
  label: "IAsyncPreInterceptor<TMessage>"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs before the main handler of a `TMessage` asynchronously, and
decides what the rest of the pipeline sees.

```csharp
public interface IAsyncPreInterceptor<in TMessage> : IPreInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PreInterceptors/IAsyncPreInterceptor%5BTMessage%5D.cs#L13)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |

## Remarks

This is a contract in its own right; it does not extend the synchronous
[`IPreInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ipreinterceptor-1), and an interceptor implements one of the two.

## Methods

### `HandleAsync(TMessage, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, ErgosfareContext context)
```

Processes `message` before it reaches the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The message the rest of the pipeline receives — either `message` or a replacement. The produced value must be a `TMessage`; the pipeline casts it before passing it on.
