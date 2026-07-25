---
title: "IEvent"
description: "Represents a message or handler that is recognized by the event module."
sidebar:
  label: "IEvent"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a message or handler that is recognized by the event module.

```csharp
public interface IEvent : IMessage
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/IEvent.cs#L30)

## Remarks

Any message type that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) is automatically treated as an event
by the messaging infrastructure.

Similarly, event handlers must implement or be decorated with [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent)
to be registered within the event module.

The event module also supports simple POCO objects (plain old CLR objects),
allowing them to be registered and used as events.

Events are typically used in pub/sub scenarios, broadcasting information
to multiple handlers without expecting a return value.

Implementing [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) indicates that a message or handler is
registrable and discoverable within the event module for event dispatching.
