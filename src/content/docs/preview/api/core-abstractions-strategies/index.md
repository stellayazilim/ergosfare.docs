---
title: "Stella.Ergosfare.Core.Abstractions.Strategies"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Strategies namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Strategies` namespace contains 3 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`SingleAsyncHandlerMediationStrategy<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-strategies/singleasynchandlermediationstrategy-2) | Class | Implements a mediation strategy for a single asynchronous handler. Ensures that only one handler is executed for the message, invokes pre- and post-interceptors, handles exceptions, and applies final interceptors. Supports optional result adaptation. |
| [`SingleAsyncHandlerMediationStrategy<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-strategies/singleasynchandlermediationstrategy-1) | Class | Represents a mediation strategy that processes a message through a single asynchronous handler. |
| [`SingleStreamHandlerMediationStrategy<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-strategies/singlestreamhandlermediationstrategy-2) | Class | Implements a mediation strategy for a single asynchronous streaming handler. Ensures that only one handler is executed for the message, invokes pre- and post-interceptors, handles exceptions, and applies final interceptors. Supports chunked streaming results with optional result adaptation. |
