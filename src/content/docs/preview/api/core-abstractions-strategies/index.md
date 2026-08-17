---
title: "Stella.Ergosfare.Core.Abstractions.Strategies"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Strategies namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Strategies` namespace contains 1 public type.

| Type | Kind | Summary |
| --- | --- | --- |
| [`SingleStreamHandlerMediationStrategy<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-strategies/singlestreamhandlermediationstrategy-2) | Class | Implements a mediation strategy for a single asynchronous streaming handler. Ensures that only one handler is executed for the message, invokes pre- and post-interceptors, handles exceptions, and applies final interceptors. Supports chunked streaming results with optional result adaptation. |
