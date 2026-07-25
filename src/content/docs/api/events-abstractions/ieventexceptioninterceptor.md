---
title: "IEventExceptionInterceptor"
description: "Represents a non-generic exception interceptor for events, allowing custom logic to execute when an exception occurs during the handling of any IEvent."
sidebar:
  label: "IEventExceptionInterceptor"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a non-generic exception interceptor for events, allowing custom logic
to execute when an exception occurs during the handling of any [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

```csharp
public interface IEventExceptionInterceptor : IEvent, IMessage, IAsyncExceptionInterceptor<IEvent, ValueTask>, IExceptionInterceptor
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptor.cs#L23)

## Remarks

This interface is a non-generic version of [`IEventExceptionInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventexceptioninterceptor-1),
applying to all events implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

It inherits from [`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2), enabling
asynchronous exception handling after event handlers have been invoked.

Event handlers and messages that implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) will recognize
this interceptor automatically in the event mediation pipeline.
