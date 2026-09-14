---
title: "IEventPostInterceptor"
description: "Runs after every handler of an event that implements IEvent has been delivered to."
sidebar:
  label: "IEventPostInterceptor"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Runs after every handler of an event that implements [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) has been
delivered to.

```csharp
public interface IEventPostInterceptor : IEvent, IMessage, IAsyncPostInterceptor<IEvent>, IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/PostInterceptors/IEventPostInterceptor.cs#L14)

## Remarks

A publish produces no result, so there is nothing here to read or replace — this stage
exists to act on the fact that delivery finished.

## Methods

### `HandleAsync(IEvent, ValueTask, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, ValueTask result, ErgosfareContext executionContext)
```

Runs once the event has been delivered to every handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event that was delivered. |
| `result` | [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) | A completed task, standing in for a result a publish does not have. It carries no information. |
| `executionContext` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
