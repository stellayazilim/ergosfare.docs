---
title: "Stella.Ergosfare.Events.Abstractions"
description: "Types in the Stella.Ergosfare.Events.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Events.Abstractions` namespace contains 14 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) | Interface | Marks a type as belonging to the event module — either an event that can be published, or a participant in an event pipeline. |
| [`IEventExceptionInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor) | Interface | Handles failures raised while publishing an event that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |
| [`IEventExceptionInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptor-1) | Interface | Handles failures raised while publishing a `TEvent`. |
| [`IEventExceptionInterceptorFor<TEvent, TException>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptorfor-2) | Interface | Handles failures of type `TException` raised while publishing a `TEvent`. |
| [`IEventExceptionInterceptorFor<TException>`](/ergosfare.docs/preview/api/events-abstractions/ieventexceptioninterceptorfor-1) | Interface | Handles failures of type `TException` raised while publishing any event that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) — the shape a module-wide error policy takes. |
| [`IEventFinalInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventfinalinterceptor) | Interface | Runs once the pipeline of an event that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) has settled, whether delivery succeeded or failed. |
| [`IEventFinalInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventfinalinterceptor-1) | Interface | Runs once the pipeline of a `TEvent` has settled, whether delivery succeeded or failed. |
| [`IEventHandler<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventhandler-1) | Interface | Handles events of type `TEvent`. |
| [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator) | Interface | Publishes events to their handlers. |
| [`IEventPostInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventpostinterceptor) | Interface | Runs after every handler of an event that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent) has been delivered to. |
| [`IEventPostInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventpostinterceptor-1) | Interface | Runs after every handler of a `TEvent` has been delivered to. |
| [`IEventPreInterceptor`](/ergosfare.docs/preview/api/events-abstractions/ieventpreinterceptor) | Interface | Runs before the handlers of any event that implements [`IEvent`](/ergosfare.docs/preview/api/events-abstractions/ievent). |
| [`IEventPreInterceptor<TEvent>`](/ergosfare.docs/preview/api/events-abstractions/ieventpreinterceptor-1) | Interface | Runs before the handlers of a `TEvent` and decides which event they receive. |
| [`IPublisher`](/ergosfare.docs/preview/api/events-abstractions/ipublisher) | Interface | Publishes events. An alternative name for [`IEventMediator`](/ergosfare.docs/preview/api/events-abstractions/ieventmediator), adding nothing of its own, for code that reads better asking a publisher to publish. |
