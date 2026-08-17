---
title: "IEventExceptionInterceptor"
description: "Exception interceptor for every event: the untyped counterpart of IEventExceptionInterceptor<TEvent>, reached for any published message."
sidebar:
  label: "IEventExceptionInterceptor"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Exception interceptor for every event: the untyped counterpart of
[`IEventExceptionInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor-1), reached for any published message.

```csharp
public interface IEventExceptionInterceptor : IEvent, IMessage, IAsyncExceptionInterceptor<IEvent, Unit>, IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptor.cs#L16)

## Remarks

Carries its own member rather than inheriting the stage contract's, so the resultless
slot the machinery threads never reaches an implementor — a publish has no result, and a
parameter that can only ever hold one fixed value is not a parameter.

## Methods

### `HandleAsync(IEvent, Exception, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, Exception exception, ErgosfareContext context)
```

Handles an exception asynchronously that occurred during the processing of the event.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event being processed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception thrown during event handling. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous exception handling operation.
