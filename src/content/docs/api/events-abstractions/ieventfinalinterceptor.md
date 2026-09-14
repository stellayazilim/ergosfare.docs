---
title: "IEventFinalInterceptor"
description: "Runs once the pipeline of an event that implements IEvent has settled, whether delivery succeeded or failed."
sidebar:
  label: "IEventFinalInterceptor"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Runs once the pipeline of an event that implements [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) has settled,
whether delivery succeeded or failed.

```csharp
public interface IEventFinalInterceptor : IEvent, IMessage, IAsyncFinalInterceptor<IEvent, Unit>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/FinalInterceptors/IEventFinalInterceptor.cs#L15)

## Remarks

It observes the outcome and cannot change it, and a publish stopped by
`context.Abort()` runs no final interceptors. Because a publish has no result, the
only outcome to observe is the failure, which is why the typed method takes just that.

## Methods

### `HandleAsync(IEvent, Exception?, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, Exception? exception, ErgosfareContext context)
```

Observes how the publish settled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event that was published. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure that ended the publish, or `null` when it succeeded. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
