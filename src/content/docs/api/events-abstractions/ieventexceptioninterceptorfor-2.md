---
title: "IEventExceptionInterceptorFor<TEvent, TException>"
description: "Handles failures of type TException raised while publishing a TEvent."
sidebar:
  label: "IEventExceptionInterceptorFor<TEvent, TException>"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Handles failures of type `TException` raised while publishing a
`TEvent`.

```csharp
public interface IEventExceptionInterceptorFor<in TEvent, TException> : IEvent, IMessage, IAsyncExceptionInterceptor<TEvent, Unit>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TEvent : notnull where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptorFor%5BTEvent%2CTException%5D.cs#L23)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event type this interceptor accepts. Any non-null type will do — an event need not implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

The failure arrives already typed, so no type test is needed in the body. A failure this
interceptor rejects is left for another to accept, and one nothing accepts reaches the
publisher unchanged.

## Methods

### `HandleAsync(TEvent, TException, ErgosfareContext)`

```csharp
ValueTask HandleAsync(TEvent @event, TException exception, ErgosfareContext context)
```

Handles `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event whose publish failed. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
