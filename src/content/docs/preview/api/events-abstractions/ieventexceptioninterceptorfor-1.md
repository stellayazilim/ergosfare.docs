---
title: "IEventExceptionInterceptorFor<TException>"
description: "Handles failures of type TException raised while publishing any event that implements IEvent — the shape a module-wide error policy takes."
sidebar:
  label: "IEventExceptionInterceptorFor<TException>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Handles failures of type `TException` raised while publishing any
event that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) — the shape a module-wide error policy takes.

```csharp
public interface IEventExceptionInterceptorFor<TException> : IEvent, IMessage, IAsyncExceptionInterceptor<IEvent, Unit>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptorFor%5BTException%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

Accepting every event means joining the exception stage of every event pipeline in the
module; the filter is what keeps it from handling failures it was not written for. The
failure arrives already typed, so no type test is needed in the body.

## Methods

### `HandleAsync(IEvent, TException, ErgosfareContext)`

```csharp
ValueTask HandleAsync(IEvent @event, TException exception, ErgosfareContext context)
```

Handles `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | The event whose publish failed. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this publish. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A task that completes when the interceptor is done.
