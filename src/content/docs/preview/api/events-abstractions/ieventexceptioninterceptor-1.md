---
title: "IEventExceptionInterceptor<TEvent>"
description: "Handles failures raised while publishing a TEvent."
sidebar:
  label: "IEventExceptionInterceptor<TEvent>"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Handles failures raised while publishing a `TEvent`.

```csharp
public interface IEventExceptionInterceptor<in TEvent> : IEvent, IMessage, IAsyncExceptionInterceptor<TEvent, Unit>, IExceptionInterceptor where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptor%5BTEvent%5D.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type this interceptor accepts. Any non-null type will do — an event need not implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |

## Remarks

Running is what marks the failure handled, and a failure no interceptor accepts reaches
the publisher unchanged. Because a publish has no result, handling here means the
publish completes rather than throwing. Use
[`IEventExceptionInterceptorFor<TEvent, TException>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptorfor-2) to accept only certain
failures.

## Methods

### `HandleAsync(TEvent, Exception, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TEvent @event, Exception exception, ErgosfareContext context)
```

Handles `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event whose publish failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure being handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
