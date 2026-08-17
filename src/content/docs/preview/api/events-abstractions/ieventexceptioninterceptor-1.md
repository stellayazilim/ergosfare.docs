---
title: "IEventExceptionInterceptor<TEvent>"
description: "Represents an asynchronous exception interceptor for events, allowing custom logic to execute when an exception occurs during event handling."
sidebar:
  label: "IEventExceptionInterceptor<TEvent>"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents an asynchronous exception interceptor for events, allowing custom logic
to execute when an exception occurs during event handling.

```csharp
public interface IEventExceptionInterceptor<in TEvent> : IEvent, IMessage, IAsyncExceptionInterceptor<TEvent, Unit>, IExceptionInterceptor where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptor%5BTEvent%5D.cs#L23)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event being intercepted. Must be non-nullable and implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |

## Remarks

Implementing this interface allows the interceptor to participate in the event mediation
pipeline when an exception is thrown during the handling of `TEvent`.

A publish produces no result, so this member takes none. The pipeline's resultless slot
is an implementation detail of the stage machinery and never carried anything an
interceptor could read — it only ever held a completed task.

## Methods

### `HandleAsync(TEvent, Exception, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TEvent @event, Exception exception, ErgosfareContext context)
```

Handles an exception asynchronously that occurred during the processing of the event.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event being processed. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception thrown during event handling. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous exception handling operation.
