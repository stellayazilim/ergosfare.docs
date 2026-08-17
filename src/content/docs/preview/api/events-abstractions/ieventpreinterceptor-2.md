---
title: "IEventPreInterceptor<TEvent, TModifiedEvent>"
description: "Represents a type-safe pre-interceptor for events that can optionally modify the event before it reaches its handlers."
sidebar:
  label: "IEventPreInterceptor<TEvent, TModifiedEvent>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a type-safe pre-interceptor for events that can optionally modify
the event before it reaches its handlers.

```csharp
public interface IEventPreInterceptor<in TEvent, TModifiedEvent> : IAsyncPreInterceptor<TEvent>, IPreInterceptor where TEvent : notnull where TModifiedEvent : TEvent
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/PreInterceptors/IEventPreInterceptor%5BTEvent%2CTEvent%5D.cs#L26)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of the original event being intercepted. Must implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |
| `TModifiedEvent` | The type of event returned after pre-processing. Must be the same or derived from `TEvent`. |

## Remarks

Implementing this interface allows pre-processing logic to run before the event
is dispatched to its handlers and optionally return a modified version of the event.

This interface inherits from [`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpreinterceptor-1), enabling
asynchronous pre-processing in the event mediation pipeline.

## Methods

### `HandleAsync(TEvent, ErgosfareContext)`

```csharp
ValueTask<TModifiedEvent> HandleAsync(TEvent @event, ErgosfareContext context)
```

Represents a type-safe pre-interceptor for events that can optionally modify
the event before it reaches its handlers.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) |  |

**Returns**

`ValueTask<TModifiedEvent>`

Implementing this interface allows pre-processing logic to run before the event
is dispatched to its handlers and optionally return a modified version of the event.

This interface inherits from [`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpreinterceptor-1), enabling
asynchronous pre-processing in the event mediation pipeline.
