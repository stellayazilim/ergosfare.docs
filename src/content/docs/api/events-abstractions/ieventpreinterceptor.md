---
title: "IEventPreInterceptor"
description: "Represents a non-generic pre-interceptor for events, allowing custom logic to execute before any event handlers are invoked."
sidebar:
  label: "IEventPreInterceptor"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a non-generic pre-interceptor for events, allowing custom logic
to execute before any event handlers are invoked.

```csharp
public interface IEventPreInterceptor : IEvent, IMessage, IAsyncPreInterceptor<IEvent>, IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/PreInterceptors/IEventPreInterceptor.cs#L24)

## Remarks

This interface is a non-generic version of [`IEventPreInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventpreinterceptor-1),
applying to all events implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

It inherits from [`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpreinterceptor-1), enabling asynchronous
pre-processing of events before they are dispatched to their handlers.

Event handlers and messages that implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) will recognize
this interceptor automatically in the event mediation pipeline.

## Methods

### `HandleAsync(IEvent, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, ErgosfareContext executionContext)
```

Handles the event asynchronously before the main handlers are invoked.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event to be processed. |
| `executionContext` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous pre-processing operation.
