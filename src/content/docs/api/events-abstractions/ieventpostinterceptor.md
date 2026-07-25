---
title: "IEventPostInterceptor"
description: "Represents a non-generic post-interceptor for events, allowing custom logic to execute after any event handlers have been invoked."
sidebar:
  label: "IEventPostInterceptor"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a non-generic post-interceptor for events, allowing custom logic
to execute after any event handlers have been invoked.

```csharp
public interface IEventPostInterceptor : IEvent, IMessage, IAsyncPostInterceptor<IEvent>, IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/PostInterceptors/IEventPostInterceptor.cs#L26)

## Remarks

This interface is a non-generic version of [`IEventPostInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventpostinterceptor-1),
applying to all events implementing [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

It inherits from [`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpostinterceptor-1), enabling asynchronous
post-processing of events after they are dispatched to their handlers.

Event handlers and messages that implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) will recognize
this interceptor automatically in the event mediation pipeline.

## Methods

### `HandleAsync(IEvent, ValueTask, IExecutionContext)`

```csharp
ValueTask HandleAsync(IEvent @event, ValueTask result, IExecutionContext executionContext)
```

Handles the event asynchronously after the main handlers have executed.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | The event being processed. |
| `result` | [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) | The result returned by the main handlers, or `null` if the event does not produce a result. |
| `executionContext` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous post-processing operation.
