---
title: "Stella.Ergosfare.Events"
description: "Types in the Stella.Ergosfare.Events namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Events` namespace contains 2 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`AsyncBroadcastMediationStrategy<TMessage>`](/ergosfare.docs/preview/api/events/asyncbroadcastmediationstrategy-1) | Class | Represents a mediation strategy that broadcasts a message asynchronously to all registered handlers of the specified `TMessage`. |
| [`EventMediator`](/ergosfare.docs/preview/api/events/eventmediator) | Class | Mediates events through broadcast pipelines closed over each event's runtime type, so handlers are always invoked through their typed members — including for the interface-erased [`EventMediator.PublishAsync(IEvent, EventMediationSettings?, CancellationToken)`](/ergosfare.docs/preview/api/events/eventmediator#publishasyncievent-eventmediationsettings-cancellationtoken) overload. |
