---
title: "IEventFinalInterceptor<TEvent>"
description: "Runs once the pipeline of a TEvent has settled, whether delivery succeeded or failed."
sidebar:
  label: "IEventFinalInterceptor<TEvent>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Runs once the pipeline of a `TEvent` has settled, whether delivery
succeeded or failed.

```csharp
public interface IEventFinalInterceptor<in TEvent> : IEvent, IMessage, IAsyncFinalInterceptor<TEvent, Unit>, IFinalInterceptor where TEvent : IEvent
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/FinalInterceptors/IEventFinalInterceptor%5BTEvent%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type this interceptor accepts. Unlike the other event interceptors, this one requires the event to implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |

## Remarks

It observes the outcome and cannot change it, and a publish stopped by
`context.Abort()` runs no final interceptors. Because a publish has no result, the
only outcome to observe is the failure.

## Methods

### `HandleAsync(TEvent, Exception?, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TEvent @event, Exception? exception, ErgosfareContext context)
```

Observes how the publish settled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event that was published. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure that ended the publish, or `null` when it succeeded. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
