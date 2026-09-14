---
title: "IAsyncExceptionInterceptor<TMessage, TResult>"
description: "Handles a failure raised while dispatching a TMessage asynchronously, and supplies the result the caller receives instead."
sidebar:
  label: "IAsyncExceptionInterceptor<TMessage, TResult>"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Handles a failure raised while dispatching a `TMessage`
asynchronously, and supplies the result the caller receives instead.

```csharp
public interface IAsyncExceptionInterceptor<in TMessage, in TResult> : IExceptionInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IAsyncExceptionHandler%5BTMessage%2CTResult%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |
| `TResult` | The result type this interceptor accepts. |

## Remarks

Running is what marks the failure handled: once any exception interceptor runs, the
dispatch returns a result rather than throwing. This is a contract in its own right; it
does not extend the synchronous [`IExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iexceptioninterceptor-2).

## Methods

### `HandleAsync(TMessage, TResult?, Exception, ErgosfareContext)`

```csharp
ValueTask<object?> HandleAsync(TMessage message, TResult? result, Exception exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message whose dispatch failed. |
| `result` | `TResult` | The result produced so far, which is the result type's default when the main handler itself failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure being handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result that continues through the pipeline. This value replaces the current result outright — producing `null` makes the result `null` rather than preserving what came before.
