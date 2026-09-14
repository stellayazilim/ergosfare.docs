---
title: "IEventPreInterceptor"
description: "Runs before the handlers of any event that implements IEvent."
sidebar:
  label: "IEventPreInterceptor"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Runs before the handlers of any event that implements [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

```csharp
public interface IEventPreInterceptor : IEvent, IMessage, IAsyncPreInterceptor<IEvent>, IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/PreInterceptors/IEventPreInterceptor.cs#L14)

## Remarks

This form observes the event without being able to replace it — the event that reaches
the handlers is the one that arrived. To replace it, implement
[`IEventPreInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventpreinterceptor-1).

## Methods

### `HandleAsync(IEvent, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, ErgosfareContext executionContext)
```

Processes `event` before its handlers run.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event about to be delivered. |
| `executionContext` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
