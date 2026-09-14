---
title: "IEventExceptionInterceptor"
description: "Handles failures raised while publishing an event that implements IEvent."
sidebar:
  label: "IEventExceptionInterceptor"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Handles failures raised while publishing an event that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent).

```csharp
public interface IEventExceptionInterceptor : IEvent, IMessage, IAsyncExceptionInterceptor<IEvent, Unit>, IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptor.cs#L15)

## Remarks

Running is what marks the failure handled, and a failure no interceptor accepts reaches
the publisher unchanged. Because a publish has no result, there is nothing to produce —
handling here means the publish completes rather than throwing. Use
[`IEventExceptionInterceptorFor<TException>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptorfor-1) to accept only certain failures.

## Methods

### `HandleAsync(IEvent, Exception, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, Exception exception, ErgosfareContext context)
```

Handles `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event whose publish failed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure being handled. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
