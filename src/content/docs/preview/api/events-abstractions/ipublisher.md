---
title: "IPublisher"
description: "Represents the mediator interface for publishing events within the application."
sidebar:
  label: "IPublisher"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents the mediator interface for publishing events within the application.

```csharp
public interface IPublisher : IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/IPublisher.cs#L3)

## Remarks

The event mediator is responsible for broadcasting events to all registered handlers
    and orchestrating the event handling pipeline. Unlike commands, which are handled by
    exactly one handler, events can be handled by multiple handlers, allowing for decoupled
    communication between different parts of the application.

    Everything a publish can be told is a parameter. A settings object used to carry the
    same three things, and carrying them that way meant allocating one per publish and
    reading it at dispatch time — a shape nothing can be compiled from. The conveniences
    below are default implementations over the full call, so an implementation of this
    interface writes three methods and inherits the rest.
