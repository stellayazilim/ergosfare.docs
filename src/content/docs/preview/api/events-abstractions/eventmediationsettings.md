---
title: "EventMediationSettings"
description: "Represents the settings used for event mediation."
sidebar:
  label: "EventMediationSettings"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents the settings used for event mediation.

```csharp
public sealed class EventMediationSettings
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/EventMediationSettiongs.cs#L5)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### `Filters`

```csharp
public EventMediationSettings.EventMediationFilters Filters { get; }
```

Gets the filters that control which handlers will receive the event.

**Returns**

[`EventMediationSettings.EventMediationFilters`](/ergosfare.docs/preview/api/events-abstractions/eventmediationsettings-eventmediationfilters)

### `Items`

```csharp
public IDictionary<object, object?> Items { get; init; }
```

Gets or sets a collection of arbitrary key/value items that can be used
to pass contextual information through the event mediation pipeline.

**Returns**

`IDictionary<object, object>`

### `ThrowIfNoHandlerFound`

```csharp
public bool ThrowIfNoHandlerFound { get; init; }
```

Gets or sets a value indicating whether an exception should be thrown
if no handlers are found for a published event.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

Covers every way a publish can reach nobody: an event type absent from the
registry, a registered one with no handlers, and a registered one whose handlers
are all filtered out. Left unset, a publish that reaches nobody is a silent no-op —
fire-and-forget is the point of an event, and a publisher that must know whether
anyone listened wants this flag.
