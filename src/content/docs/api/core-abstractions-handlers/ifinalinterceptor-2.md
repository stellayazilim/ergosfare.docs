---
title: "IFinalInterceptor<TMessage, TResult>"
description: "Synchronous final-interceptor contract for messages of type TMessage with results of type TResult."
sidebar:
  label: "IFinalInterceptor<TMessage, TResult>"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Synchronous final-interceptor contract for messages of type `TMessage`
with results of type `TResult`. Always executed at the end of the
pipeline, regardless of success or failure — for cleanup, auditing, or logging.

```csharp
public interface IFinalInterceptor<in TMessage, in TResult> : IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/FinalInterceptor/IFinalInterceptor%5BTMessage%2CTResult%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message this interceptor handles. |
| `TResult` | The type of result produced by the handler. |

## Remarks

Final interceptors observe the pipeline outcome but cannot alter it — hence
[`IFinalInterceptor<TMessage, TResult>.Handle(TMessage, TResult?, Exception?, ErgosfareContext)`](/ergosfare.docs/api/core-abstractions-handlers/ifinalinterceptor-2#handletmessage-tresult-exception-ergosfarecontext) returns nothing. Asynchronous final interceptors implement
[`IAsyncFinalInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-1) or
[`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-2) instead; the pipeline dispatches
each through its own typed member with no object-typed bridge between them.

## Methods

### `Handle(TMessage, TResult?, Exception?, ErgosfareContext)`

```csharp
void Handle(TMessage message, TResult? result, Exception? exception, ErgosfareContext executionContext)
```

Handles the end of the pipeline for the given message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message that was processed. |
| `result` | `TResult` | The final result, if any. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception that terminated the pipeline, if any. |
| `executionContext` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The current execution context. |
