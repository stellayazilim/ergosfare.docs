---
title: "IPublisher"
description: "Represents the mediator interface for publishing events within the application."
sidebar:
  label: "IPublisher"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents the mediator interface for publishing events within the application.

```csharp
public interface IPublisher : IEventMediator
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/IPublisher.cs#L3)

## Remarks

The event mediator is responsible for broadcasting events to all registered handlers
and orchestrating the event handling pipeline. Unlike commands, which are handled by
exactly one handler, events can be handled by multiple handlers, allowing for decoupled
communication between different parts of the application.
In the publish-subscribe pattern, events represent notifications about something that
has happened in the system. The event mediator helps maintain separation between the
event publishers and the event subscribers (handlers).
