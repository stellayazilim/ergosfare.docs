---
title: "IEventPreInterceptor<TEvent>"
description: "Represents a type-safe pre-interceptor for events."
sidebar:
  label: "IEventPreInterceptor<TEvent>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a type-safe pre-interceptor for events. It runs before the event handlers and
returns the event that continues through the pipeline — the original, or a rewritten one.

```csharp
public interface IEventPreInterceptor<TEvent> : IEvent, IMessage, IAsyncPreInterceptor<TEvent>, IPreInterceptor where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/PreInterceptors/IEventPreInterceptor%5BTEvent%5D.cs#L18)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event being intercepted. |

## Remarks

A pre-interceptor carries no result, so the single-parameter form returns the event type
directly rather than [`object`](https://learn.microsoft.com/dotnet/api/system.object). Use the non-generic
[`IEventPreInterceptor`](/ergosfare.docs/api/events-abstractions/ieventpreinterceptor) to intercept any event, or
[`IEventPreInterceptor<TEvent, TModifiedEvent>`](/ergosfare.docs/api/events-abstractions/ieventpreinterceptor-2) to return a different, derived
event type. `TEvent` is invariant because it is returned.

## Methods

### `HandleAsync(TEvent, ErgosfareContext)`

```csharp
ValueTask<TEvent> HandleAsync(TEvent @event, ErgosfareContext context)
```

Handles the event before its handlers run and returns the event that continues through
the pipeline (the original, or a rewritten instance).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event to intercept. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<TEvent>`
