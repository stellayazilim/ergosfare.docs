---
title: "IEventExceptionInterceptor<TEvent>"
description: "Represents an asynchronous exception interceptor for events, allowing custom logic to execute when an exception occurs during event handling."
sidebar:
  label: "IEventExceptionInterceptor<TEvent>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Events.Abstractions`](/ergosfare.docs/api/events-abstractions)  
**Assembly:** `Stella.Ergosfare.Events.Abstractions.dll`

Represents an asynchronous exception interceptor for events, allowing custom logic
to execute when an exception occurs during event handling.

```csharp
public interface IEventExceptionInterceptor<in TEvent> : IEvent, IMessage, IAsyncExceptionInterceptor<TEvent, ValueTask>, IExceptionInterceptor where TEvent : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Events.Abstractions/ExceptionInterceptors/IEventExceptionInterceptor%5BTEvent%5D.cs#L26)

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The type of event being intercepted. Must be non-nullable and implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |

## Remarks

Implementing this interface allows the interceptor to participate in the event mediation
pipeline when an exception is thrown during the handling of `TEvent`.

This interface inherits from [`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-1), enabling
asynchronous exception handling logic.

The `TEvent` type must be non-nullable and implement [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent).

## Methods

### `HandleAsync(TEvent, ValueTask, Exception, IExecutionContext)`

```csharp
ValueTask HandleAsync(TEvent @event, ValueTask result, Exception exception, IExecutionContext context)
```

Handles an exception asynchronously that occurred during the processing of the event.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `event` | `TEvent` | The event being processed. |
| `result` | [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) | The result returned by the main handlers, or `null` if the event does not produce a result. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception thrown during event handling. |
| `context` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The execution context for the current mediation pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) — A [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) representing the asynchronous exception handling operation.
