---
title: "IEventPostInterceptor<TEvent>"
description: "Runs after every handler of a TEvent has been delivered to."
sidebar:
  label: "IEventPostInterceptor<TEvent>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Runs after every handler of a `TEvent` has been delivered to.

```csharp
public interface IEventPostInterceptor<in TEvent> : IEvent, IMessage, IAsyncPostInterceptor<TEvent>, IPostInterceptor where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/PostInterceptors/IEventPostInterceptor%5BTEvent%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type this interceptor accepts. Any non-null type will do — an event need not implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |

## Remarks

A publish produces no result, so there is nothing here to read or replace — this stage
exists to act on the fact that delivery finished.

## Methods

### `HandleAsync(TEvent, ValueTask, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TEvent @event, ValueTask result, ErgosfareContext executionContext)
```

Runs once the event has been delivered to every handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event that was delivered. |
| `result` | [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) | A completed task, standing in for a result a publish does not have. It carries no information. |
| `executionContext` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
