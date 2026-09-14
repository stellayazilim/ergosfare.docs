---
title: "IFinalInterceptor<TMessage, TResult>"
description: "Runs once a TMessage pipeline has settled, whether it produced a result or failed — for cleanup, auditing or logging."
sidebar:
  label: "IFinalInterceptor<TMessage, TResult>"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs once a `TMessage` pipeline has settled, whether it produced a
result or failed — for cleanup, auditing or logging.

```csharp
public interface IFinalInterceptor<in TMessage, in TResult> : IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IFinalInterceptor%5BTMessage%2CTResult%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |
| `TResult` | The result type this interceptor accepts. |

## Remarks

A final interceptor observes the outcome and cannot change it, which is why
[`IFinalInterceptor<TMessage, TResult>.Handle(TMessage, TResult?, Exception?, ErgosfareContext)`](/ergosfare.docs/api/core-abstractions-handlers/ifinalinterceptor-2#handletmessage-tresult-exception-ergosfarecontext) returns nothing. A pipeline stopped by
[`ErgosfareContext.Abort()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#abort) runs no final interceptors. Implement
[`IAsyncFinalInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-1) or
[`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-2) instead when the work involves
awaiting.

## Methods

### `Handle(TMessage, TResult?, Exception?, ErgosfareContext)`

```csharp
void Handle(TMessage message, TResult? result, Exception? exception, ErgosfareContext executionContext)
```

Observes how the pipeline for `message` settled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was dispatched. |
| `result` | `TResult` | The result, or `null` when the pipeline failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure that ended the pipeline, or `null` when it succeeded. |
| `executionContext` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |
