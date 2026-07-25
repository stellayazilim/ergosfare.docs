---
title: "IEventHandler<TEvent>"
description: "Represents an asynchronous handler for a specific event type."
sidebar:
  label: "IEventHandler<TEvent>"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents an asynchronous handler for a specific event type.

```csharp
public interface IEventHandler<in TEvent> : IEvent, IMessage, IAsyncHandler<TEvent>, IHandler where TEvent : notnull
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/Handlers/IEventHandler.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event to handle. Must implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |

## Remarks

Implementing [`IEventHandler<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventhandler-1) allows the handler to be automatically
registered and invoked by the event mediation pipeline whenever an event of type `TEvent` is published.

Handlers should implement the [`IAsyncHandler<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasynchandler-1) interface to provide
asynchronous processing logic for the event.
