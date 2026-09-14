---
title: "IEventHandler<TEvent>"
description: "Handles events of type TEvent."
sidebar:
  label: "IEventHandler<TEvent>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Handles events of type `TEvent`.

```csharp
public interface IEventHandler<in TEvent> : IEvent, IMessage, IAsyncHandler<TEvent>, IHandler where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/Handlers/IEventHandler.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type this handler accepts. Any non-null type will do — an event need not implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |

## Remarks

Unlike a command, an event may have any number of handlers, and every one of them
receives it. Handlers run one after another in the order the pipeline settled on, and
none of them returns anything to the publisher.
