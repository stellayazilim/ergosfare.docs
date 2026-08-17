---
title: "IEventFinalInterceptor"
description: "Final interceptor for every event: the untyped counterpart of IEventFinalInterceptor<TEvent>."
sidebar:
  label: "IEventFinalInterceptor"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Final interceptor for every event: the untyped counterpart of
[`IEventFinalInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventfinalinterceptor-1).

```csharp
public interface IEventFinalInterceptor : IEvent, IMessage, IAsyncFinalInterceptor<IEvent, Unit>, IFinalInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/FinalInterceptors/IEventFinalInterceptor.cs#L15)

## Remarks

Carries its own member rather than inheriting the stage contract's; see the typed
counterpart for why a publish's final stage takes no result.

## Methods

### `HandleAsync(IEvent, Exception?, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, Exception? exception, ErgosfareContext context)
```

Runs after the publish has settled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event that was published. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure the publish ended with, or `null` when it succeeded. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous operation.
