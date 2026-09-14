---
title: "IPublisher"
description: "Publishes events."
sidebar:
  label: "IPublisher"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Publishes events. An alternative name for [`IEventMediator`](/ergosfare.docs/api/events-abstractions/ieventmediator), adding nothing
of its own, for code that reads better asking a publisher to publish.

```csharp
public interface IPublisher : IEventMediator
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/IPublisher.cs#L6)
