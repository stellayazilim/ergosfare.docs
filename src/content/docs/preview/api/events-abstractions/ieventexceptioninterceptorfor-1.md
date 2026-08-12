---
title: "IEventExceptionInterceptorFor<TException>"
description: "A module-wide exception interceptor that runs for every event but only for exceptions of type TException — the filtered form of IEventExceptionInterceptor, a…"
sidebar:
  label: "IEventExceptionInterceptorFor<TException>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

A module-wide exception interceptor that runs for every event but only for exceptions of
type `TException` — the filtered form of
[`IEventExceptionInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor), and the shape a global error policy takes.

```csharp
public interface IEventExceptionInterceptorFor<TException> : IEvent, IMessage, IAsyncExceptionInterceptor<IEvent, Unit>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptorFor%5BTException%5D.cs#L21)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

Being message-agnostic, this interceptor joins the exception stage of every event
pipeline in the module; the filter is what keeps it from swallowing exceptions it was
not written for.

## Methods

### `HandleAsync(IEvent, TException, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, TException exception, ErgosfareContext context)
```

Handles an exception thrown while an event was being published.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event being processed when the exception occurred. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous exception handling operation.
