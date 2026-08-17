---
title: "IEventExceptionInterceptorFor<TEvent, TException>"
description: "An exception interceptor for a specific event type that runs only for exceptions of type TException."
sidebar:
  label: "IEventExceptionInterceptorFor<TEvent, TException>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

An exception interceptor for a specific event type that runs only for exceptions of type
`TException`. The exception arrives already typed — no `is`
check in the interceptor body.

```csharp
public interface IEventExceptionInterceptorFor<in TEvent, TException> : IEvent, IMessage, IAsyncExceptionInterceptor<TEvent, Unit>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TEvent : notnull where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptorFor%5BTEvent%2CTException%5D.cs#L24)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event being intercepted. Must implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

A publish produces no result, so — unlike
[`IEventExceptionInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor-1), which still carries a vestigial
[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) parameter — the handled member takes only the event, the
exception and the context. When no interceptor accepts the thrown exception, it leaves
the pipeline unwrapped with its original stack.

## Methods

### `HandleAsync(TEvent, TException, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TEvent @event, TException exception, ErgosfareContext context)
```

Handles an exception thrown while the event was being published.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event being processed when the exception occurred. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous exception handling operation.
