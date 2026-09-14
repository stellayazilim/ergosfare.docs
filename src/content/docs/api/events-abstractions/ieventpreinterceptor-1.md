---
title: "IEventPreInterceptor<TEvent>"
description: "Runs before the handlers of a TEvent and decides which event they receive."
sidebar:
  label: "IEventPreInterceptor<TEvent>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Runs before the handlers of a `TEvent` and decides which event they
receive.

```csharp
public interface IEventPreInterceptor<TEvent> : IEvent, IMessage, IAsyncPreInterceptor<TEvent>, IPreInterceptor where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/PreInterceptors/IEventPreInterceptor%5BTEvent%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type this interceptor accepts. Any non-null type will do — an event need not implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |

## Remarks

The event returned is delivered to every handler, so replacing it here replaces it for
all of them. `TEvent` is invariant because it is returned.

## Methods

### `HandleAsync(TEvent, ErgosfareContext)`

```csharp
ValueTask<TEvent> HandleAsync(TEvent @event, ErgosfareContext context)
```

Processes `event` before its handlers run.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

`ValueTask<TEvent>` — The event the handlers receive — either the one passed in or a replacement.
