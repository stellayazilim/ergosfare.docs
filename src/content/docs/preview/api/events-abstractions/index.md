---
title: "Stella.Ergosfare.Events.Abstractions"
description: "Types in the Stella.Ergosfare.Events.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Events.Abstractions` namespace contains 15 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | Interface | Represents a message or handler that is recognized by the event module. |
| [`IEventExceptionInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor) | Interface | Exception interceptor for every event: the untyped counterpart of [`IEventExceptionInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor-1), reached for any published message. |
| [`IEventExceptionInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor-1) | Interface | Represents an asynchronous exception interceptor for events, allowing custom logic to execute when an exception occurs during event handling. |
| [`IEventExceptionInterceptorFor<TEvent, TException>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptorfor-2) | Interface | An exception interceptor for a specific event type that runs only for exceptions of type `TException`. The exception arrives already typed — no `is` check in the interceptor body. |
| [`IEventExceptionInterceptorFor<TException>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptorfor-1) | Interface | A module-wide exception interceptor that runs for every event but only for exceptions of type `TException` — the filtered form of [`IEventExceptionInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor), and the shape a global error policy takes. |
| [`IEventFinalInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventfinalinterceptor) | Interface | Final interceptor for every event: the untyped counterpart of [`IEventFinalInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventfinalinterceptor-1). |
| [`IEventFinalInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventfinalinterceptor-1) | Interface | Final interceptor for `TEvent`: runs after the publish settles, whether it succeeded or failed, and is skipped only by an abort. |
| [`IEventHandler<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventhandler-1) | Interface | Represents an asynchronous handler for a specific event type. |
| [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator) | Interface | Represents the mediator interface for publishing events within the application. |
| [`IEventPostInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventpostinterceptor) | Interface | Represents a non-generic post-interceptor for events, allowing custom logic to execute after any event handlers have been invoked. |
| [`IEventPostInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventpostinterceptor-1) | Interface | Represents a type-safe asynchronous post-interceptor for events, allowing custom logic to execute after the event handlers have been invoked. |
| [`IEventPreInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventpreinterceptor) | Interface | Represents a non-generic pre-interceptor for events, allowing custom logic to execute before any event handlers are invoked. |
| [`IEventPreInterceptor<TEvent, TModifiedEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventpreinterceptor-2) | Interface | Represents a type-safe pre-interceptor for events that can optionally modify the event before it reaches its handlers. |
| [`IEventPreInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventpreinterceptor-1) | Interface | Represents a type-safe pre-interceptor for events. It runs before the event handlers and returns the event that continues through the pipeline — the original, or a rewritten one. |
| [`IPublisher`](/ergosfare.docs/preview/api/events-abstractions/ipublisher) | Interface | Represents the mediator interface for publishing events within the application. |
