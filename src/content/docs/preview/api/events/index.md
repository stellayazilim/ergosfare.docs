---
title: "Stella.Ergosfare.Events"
description: "Types in the Stella.Ergosfare.Events namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Events` namespace contains 1 public type.

| Type | Kind | Summary |
| --- | --- | --- |
| [`EventMediator`](/ergosfare.docs/preview/api/events/eventmediator) | Class | Mediates events through frozen publish pipelines closed over each event's runtime type, so handlers are always invoked through their typed members — including for the interface-erased [`EventMediator.PublishAsync(IEvent, IEnumerable<string>?, CancellationToken)`](/ergosfare.docs/preview/api/events/eventmediator#publishasyncievent-ienumerablestring-cancellationtoken) overload. |
