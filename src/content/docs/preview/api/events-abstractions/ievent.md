---
title: "IEvent"
description: "Marks a type as belonging to the event module — either an event that can be published, or a participant in an event pipeline."
sidebar:
  label: "IEvent"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Marks a type as belonging to the event module — either an event that can be published,
or a participant in an event pipeline.

```csharp
public interface IEvent : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/IEvent.cs#L20)

## Remarks

Events are published rather than sent: every registered handler receives one, and the
publisher gets nothing back. Handlers and interceptors carry this interface too, which
is how registration recognizes them as part of the module.

A plain object can be an event without implementing anything: the handler contracts
accept any non-null type, so the interface is not a requirement for the message itself.
