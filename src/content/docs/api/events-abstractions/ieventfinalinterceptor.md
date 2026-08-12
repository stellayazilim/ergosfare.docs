---
title: "IEventFinalInterceptor"
description: "Represents a non-generic final interceptor for events, allowing custom logic to execute after all event handlers and other interceptors have completed."
sidebar:
  label: "IEventFinalInterceptor"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a non-generic final interceptor for events, allowing custom logic
to execute after all event handlers and other interceptors have completed.

```csharp
public interface IEventFinalInterceptor : IEvent, IMessage, IAsyncFinalInterceptor<IEvent, Unit>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/FinalInterceptors/IEventFinalInterceptor.cs#L25)

## Remarks

This interface is a non-generic version of [`IEventFinalInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventfinalinterceptor-1),
applying to all events implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

It inherits from [`IAsyncFinalInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-1),
enabling asynchronous final processing of events after they are dispatched to their handlers.

Event handlers and messages that implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) will recognize
this interceptor automatically in the event mediation pipeline.
