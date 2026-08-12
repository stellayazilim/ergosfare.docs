---
title: "EventMediationSettings.EventMediationFilters"
description: "Represents the filtering options applied during event mediation to select which handlers should be invoked."
sidebar:
  label: "EventMediationSettings.EventMediationFilters"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents the filtering options applied during event mediation to select
which handlers should be invoked.

```csharp
public sealed class EventMediationSettings.EventMediationFilters
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/EventMediationSettiongs.cs#L38)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### `Groups`

```csharp
public IEnumerable<string> Groups { get; set; }
```

Gets or sets the collection of group names used to filter event handlers.
Only handlers belonging to these groups will receive the event.

**Returns**

`IEnumerable<string>`

### `HandlerPredicate`

```csharp
public Func<Type, bool> HandlerPredicate { get; set; }
```

Gets or sets a predicate function to filter handlers by their type.
By default, all handler types are included.

**Returns**

`Func<Type, bool>`
