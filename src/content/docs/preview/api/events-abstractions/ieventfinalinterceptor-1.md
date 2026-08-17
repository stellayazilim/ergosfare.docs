---
title: "IEventFinalInterceptor<TEvent>"
description: "Final interceptor for TEvent: runs after the publish settles, whether it succeeded or failed, and is skipped only by an abort."
sidebar:
  label: "IEventFinalInterceptor<TEvent>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Final interceptor for `TEvent`: runs after the publish settles,
whether it succeeded or failed, and is skipped only by an abort.

```csharp
public interface IEventFinalInterceptor<in TEvent> : IEvent, IMessage, IAsyncFinalInterceptor<TEvent, Unit>, IFinalInterceptor where TEvent : IEvent
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/FinalInterceptors/IEventFinalInterceptor%5BTEvent%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event being intercepted. |

## Remarks

Carries its own member rather than inheriting the stage contract's, so the resultless
slot the machinery threads never reaches an implementor — a publish has no result, and a
parameter that can only ever hold one fixed value is not a parameter.

## Methods

### `HandleAsync(TEvent, Exception?, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TEvent @event, Exception? exception, ErgosfareContext context)
```

Runs after the publish has settled.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event that was published. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure the publish ended with, or `null` when it succeeded. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous operation.
