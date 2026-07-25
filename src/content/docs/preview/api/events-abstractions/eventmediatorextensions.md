---
title: "EventMediatorExtensions"
description: "Provides extension methods for IEventMediator to simplify event publishing."
sidebar:
  label: "EventMediatorExtensions"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Provides extension methods for [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator) to simplify event publishing.

```csharp
public static class EventMediatorExtensions
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/EventMediatorExtensions.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `PublishAsync(IEventMediator, IEvent, CancellationToken)`

```csharp
public static ValueTask PublishAsync(this IEventMediator eventMediator, IEvent @event, CancellationToken cancellationToken = default)
```

Publishes the specified event asynchronously to all registered handlers.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `eventMediator` | [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator) | The [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator) used to publish the event. |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | An optional [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to cancel the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous publish operation.

### `PublishAsync(IEventMediator, IEvent, string[], CancellationToken)`

```csharp
public static ValueTask PublishAsync(this IEventMediator eventMediator, IEvent @event, string[] groups, CancellationToken cancellationToken = default)
```

Publishes the specified event asynchronously to all registered handlers,
restricting delivery to the specified groups.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `eventMediator` | [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator) | The [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator) used to publish the event. |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event to publish. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | An array of group names to filter which handlers will receive the event. Only handlers belonging to these groups will be invoked. |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) | An optional [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to cancel the operation. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous publish operation.
