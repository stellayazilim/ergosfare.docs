---
title: "IAsyncFinalInterceptor<TMessage, TResult>"
description: "Runs asynchronously once a TMessage pipeline has settled, reading the result as a TResult."
sidebar:
  label: "IAsyncFinalInterceptor<TMessage, TResult>"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs asynchronously once a `TMessage` pipeline has settled,
reading the result as a `TResult`.

```csharp
public interface IAsyncFinalInterceptor<in TMessage, in TResult> : IFinalInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IAsyncFinalInterceptor%5BTMessage%2CTResult%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |
| `TResult` | The result type this interceptor accepts. |

## Remarks

A final interceptor observes the outcome and cannot change it, and a pipeline stopped
by [`ErgosfareContext.Abort()`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext#abort) runs none. This is a contract in its own
right; it does not extend the synchronous
[`IFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ifinalinterceptor-2).

## Methods

### `HandleAsync(TMessage, TResult?, Exception?, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TMessage message, TResult? result, Exception? exception, ErgosfareContext context)
```

Observes how the pipeline for `message` settled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was dispatched. |
| `result` | `TResult` | The result, or `null` when the pipeline failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure that ended the pipeline, or `null` when it succeeded. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
