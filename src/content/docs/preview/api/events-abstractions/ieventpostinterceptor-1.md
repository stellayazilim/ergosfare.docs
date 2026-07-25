---
title: "IEventPostInterceptor<TEvent>"
description: "Represents a type-safe asynchronous post-interceptor for events, allowing custom logic to execute after the event handlers have been invoked."
sidebar:
  label: "IEventPostInterceptor<TEvent>"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/preview/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents a type-safe asynchronous post-interceptor for events, allowing custom logic
to execute after the event handlers have been invoked.

```csharp
public interface IEventPostInterceptor<in TEvent> : IEvent, IMessage, IAsyncPostInterceptor<TEvent>, IPostInterceptor where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Events.Abstractions/PostInterceptors/IEventPostInterceptor%5BTEvent%5D.cs#L24)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event being intercepted. Must implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |

## Remarks

Implementing this interface allows post-processing logic to participate in the
event mediation pipeline after the main handlers have executed.

This interface inherits from [`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpostinterceptor-1),
so post-interceptor logic can be asynchronous.

The `TEvent` type must be non-nullable and implement [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent).

## Methods

### `HandleAsync(TEvent, ValueTask, IExecutionContext)`

```csharp
ValueTask HandleAsync(TEvent @event, ValueTask result, IExecutionContext executionContext)
```

Handles the event asynchronously after the main handlers have executed.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event being processed. |
| `result` | [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) | The result returned by the main handlers, or `null` if the event does not produce a result. |
| `executionContext` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous post-processing operation.
