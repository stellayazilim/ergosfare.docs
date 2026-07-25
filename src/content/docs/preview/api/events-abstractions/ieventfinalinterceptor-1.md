---
title: "IEventFinalInterceptor<TEvent>"
description: "Represents a final interceptor for events, allowing custom logic to be executed after all other event processing (handlers, pre-, post-interceptors) has comp…"
sidebar:
  label: "IEventFinalInterceptor<TEvent>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a final interceptor for events, allowing custom logic
to be executed after all other event processing (handlers, pre-, post-interceptors)
has completed.

```csharp
public interface IEventFinalInterceptor<in TEvent> : IEvent, IMessage, IAsyncFinalInterceptor<TEvent, ValueTask>, IFinalInterceptor where TEvent : IEvent
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/FinalInterceptors/IEventFinalInterceptor%5BTEvent%5D.cs#L25)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event being intercepted. Must implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |

## Remarks

Implementing [`IEventFinalInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventfinalinterceptor-1) allows the interceptor
to participate in the event mediation pipeline at the final stage, after
all handlers and other interceptors have run.

This interface inherits from [`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncfinalinterceptor-2),
so final-interceptor logic can be asynchronous and return a [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask).

The `TEvent` type must implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent).
