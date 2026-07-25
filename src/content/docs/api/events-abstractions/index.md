---
title: "Stella.Ergosfare.Events.Abstractions"
description: "Types in the Stella.Ergosfare.Events.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Events.Abstractions` namespace contains 16 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`EventMediationSettings`](/ergosfare.docs/api/events-abstractions/eventmediationsettings) | Class | Represents the settings used for event mediation. |
| [`EventMediationSettings.EventMediationFilters`](/ergosfare.docs/api/events-abstractions/eventmediationsettings-eventmediationfilters) | Class | Represents the filtering options applied during event mediation to select which handlers should be invoked. |
| [`EventMediatorExtensions`](/ergosfare.docs/api/events-abstractions/eventmediatorextensions) | Class | Provides extension methods for [`IEventMediator`](/ergosfare.docs/api/events-abstractions/ieventmediator) to simplify event publishing. |
| [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent) | Interface | Represents a message or handler that is recognized by the event module. |
| [`IEventExceptionInterceptor`](/ergosfare.docs/api/events-abstractions/ieventexceptioninterceptor) | Interface | Represents a non-generic exception interceptor for events, allowing custom logic to execute when an exception occurs during the handling of any [`IEvent`](/ergosfare.docs/api/events-abstractions/ievent). |
| [`IEventExceptionInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventexceptioninterceptor-1) | Interface | Represents an asynchronous exception interceptor for events, allowing custom logic to execute when an exception occurs during event handling. |
| [`IEventFinalInterceptor`](/ergosfare.docs/api/events-abstractions/ieventfinalinterceptor) | Interface | Represents a non-generic final interceptor for events, allowing custom logic to execute after all event handlers and other interceptors have completed. |
| [`IEventFinalInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventfinalinterceptor-1) | Interface | Represents a final interceptor for events, allowing custom logic to be executed after all other event processing (handlers, pre-, post-interceptors) has completed. |
| [`IEventHandler<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventhandler-1) | Interface | Represents an asynchronous handler for a specific event type. |
| [`IEventMediator`](/ergosfare.docs/api/events-abstractions/ieventmediator) | Interface | Represents the mediator interface for publishing events within the application. |
| [`IEventPostInterceptor`](/ergosfare.docs/api/events-abstractions/ieventpostinterceptor) | Interface | Represents a non-generic post-interceptor for events, allowing custom logic to execute after any event handlers have been invoked. |
| [`IEventPostInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventpostinterceptor-1) | Interface | Represents a type-safe asynchronous post-interceptor for events, allowing custom logic to execute after the event handlers have been invoked. |
| [`IEventPreInterceptor`](/ergosfare.docs/api/events-abstractions/ieventpreinterceptor) | Interface | Represents a non-generic pre-interceptor for events, allowing custom logic to execute before any event handlers are invoked. |
| [`IEventPreInterceptor<TEvent, TModifiedEvent>`](/ergosfare.docs/api/events-abstractions/ieventpreinterceptor-2) | Interface | Represents a type-safe pre-interceptor for events that can optionally modify the event before it reaches its handlers. |
| [`IEventPreInterceptor<TEvent>`](/ergosfare.docs/api/events-abstractions/ieventpreinterceptor-1) | Interface | Represents a type-safe pre-interceptor for events. It runs before the event handlers and returns the event that continues through the pipeline — the original, or a rewritten one. |
| [`IPublisher`](/ergosfare.docs/api/events-abstractions/ipublisher) | Interface | Represents the mediator interface for publishing events within the application. |
