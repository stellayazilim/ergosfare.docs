---
title: "IExceptionInterceptor<TMessage, TResult>"
description: "Handles a failure raised while dispatching a TMessage, and supplies the result the caller receives instead."
sidebar:
  label: "IExceptionInterceptor<TMessage, TResult>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Handles a failure raised while dispatching a `TMessage`, and
supplies the result the caller receives instead.

```csharp
public interface IExceptionInterceptor<in TMessage, in TResult> : IExceptionInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionHandler%5BTMessage%2CTResult%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |
| `TResult` | The result type this interceptor accepts. |

## Remarks

Running is what marks the failure handled: once any exception interceptor runs, the
dispatch returns a result rather than throwing. Implement
[`IExceptionInterceptorFilter<TException>`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptorfilter-1) alongside this contract to accept
only certain exceptions, or one of the asynchronous contracts when the work involves
awaiting.

## Methods

### `Handle(TMessage, TResult?, Exception, ErgosfareContext)`

```csharp
object? Handle(TMessage message, TResult? messageResult, Exception exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message whose dispatch failed. |
| `messageResult` | `TResult` | The result produced so far, which is the result type's default when the main handler itself failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure being handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object) — The result that continues through the pipeline. This value replaces the current result outright — returning `null` makes the result `null` rather than preserving what came before.
