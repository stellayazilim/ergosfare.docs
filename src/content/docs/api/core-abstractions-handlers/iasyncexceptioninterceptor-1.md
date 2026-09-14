---
title: "IAsyncExceptionInterceptor<TMessage>"
description: "Handles a failure raised while dispatching a TMessage asynchronously, without naming the result type."
sidebar:
  label: "IAsyncExceptionInterceptor<TMessage>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Handles a failure raised while dispatching a `TMessage`
asynchronously, without naming the result type.

```csharp
public interface IAsyncExceptionInterceptor<in TMessage> : IExceptionInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IAsyncExceptionHandler%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |

## Remarks

Running is what marks the failure handled: once any exception interceptor runs, the
dispatch returns a result rather than throwing. To read a typed result, implement
[`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2) instead; these are separate
contracts and an interceptor implements one of them.

## Methods

### `HandleAsync(TMessage, object?, Exception, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TMessage message, object? messageResult, Exception exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message whose dispatch failed. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced so far, which is `null` when the main handler itself failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure being handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result that continues through the pipeline, which must be of the pipeline's result type. This value replaces the current result outright.
