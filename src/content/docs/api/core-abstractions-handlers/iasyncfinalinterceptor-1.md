---
title: "IAsyncFinalInterceptor<TMessage>"
description: "Runs asynchronously once a TMessage pipeline has settled, without naming the result type."
sidebar:
  label: "IAsyncFinalInterceptor<TMessage>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs asynchronously once a `TMessage` pipeline has settled,
without naming the result type.

```csharp
public interface IAsyncFinalInterceptor<in TMessage> : IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IAsyncFinalInterceptor%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |

## Remarks

Use this when the work applies to any result. A final interceptor observes the outcome
and cannot change it, and a pipeline stopped by [`ErgosfareContext.Abort()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#abort)
runs none. To read a typed result, implement
[`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-2) instead.

## Methods

### `HandleAsync(TMessage, object?, Exception?, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TMessage message, object? result, Exception? exception, ErgosfareContext context)
```

Observes how the pipeline for `message` settled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was dispatched. |
| `result` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result, or `null` when the pipeline failed. Void pipelines pass a completed task here, which carries no meaning. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure that ended the pipeline, or `null` when it succeeded. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
