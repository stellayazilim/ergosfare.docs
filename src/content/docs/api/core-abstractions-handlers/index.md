---
title: "Stella.Ergosfare.Core.Abstractions.Handlers"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Handlers namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Handlers` namespace contains 22 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`IAsyncExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-2) | Interface | Handles a failure raised while dispatching a `TMessage` asynchronously, and supplies the result the caller receives instead. |
| [`IAsyncExceptionInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncexceptioninterceptor-1) | Interface | Handles a failure raised while dispatching a `TMessage` asynchronously, without naming the result type. |
| [`IAsyncFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-2) | Interface | Runs asynchronously once a `TMessage` pipeline has settled, reading the result as a `TResult`. |
| [`IAsyncFinalInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncfinalinterceptor-1) | Interface | Runs asynchronously once a `TMessage` pipeline has settled, without naming the result type. |
| [`IAsyncHandler<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasynchandler-2) | Interface | Handles messages of type `TMessage` asynchronously and produces a `TResult`. |
| [`IAsyncHandler<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasynchandler-1) | Interface | Handles messages of type `TMessage` asynchronously without producing a result. |
| [`IAsyncPostInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpostinterceptor-2) | Interface | Runs after the main handler of a `TMessage` asynchronously and decides what result the rest of the pipeline sees. |
| [`IAsyncPostInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpostinterceptor-1) | Interface | Runs after the main handler of a `TMessage` asynchronously, without naming the result type. |
| [`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/iasyncpreinterceptor-1) | Interface | Runs before the main handler of a `TMessage` asynchronously, and decides what the rest of the pipeline sees. |
| [`IExceptionInterceptor`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptor) | Interface | Marks a type as an exception interceptor, for registration and storage. |
| [`IExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptor-2) | Interface | Handles a failure raised while dispatching a `TMessage`, and supplies the result the caller receives instead. |
| [`IExceptionInterceptorFilter`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptorfilter) | Interface | Narrows an exception interceptor to the failures it accepts. |
| [`IExceptionInterceptorFilter<TException>`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptorfilter-1) | Interface | Narrows an exception interceptor to `TException` and the types derived from it, the way a `catch` clause does. |
| [`IFinalInterceptor`](/ergosfare.docs/api/core-abstractions-handlers/ifinalinterceptor) | Interface | Marks a type as a final interceptor, for registration and storage. |
| [`IFinalInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ifinalinterceptor-2) | Interface | Runs once a `TMessage` pipeline has settled, whether it produced a result or failed — for cleanup, auditing or logging. |
| [`IHandler`](/ergosfare.docs/api/core-abstractions-handlers/ihandler) | Interface | Marks a type as a main message handler, for registration and storage. |
| [`IHandler<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ihandler-2) | Interface | Handles messages of type `TMessage` synchronously and returns a `TResult`. |
| [`IPostInterceptor`](/ergosfare.docs/api/core-abstractions-handlers/ipostinterceptor) | Interface | Marks a type as a post-interceptor, for registration and storage. |
| [`IPostInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/ipostinterceptor-2) | Interface | Runs after the main handler of a `TMessage` and decides what result the rest of the pipeline sees. |
| [`IPreInterceptor`](/ergosfare.docs/api/core-abstractions-handlers/ipreinterceptor) | Interface | Marks a type as a pre-interceptor, for registration and storage. |
| [`IPreInterceptor<TMessage>`](/ergosfare.docs/api/core-abstractions-handlers/ipreinterceptor-1) | Interface | Runs before the main handler of a `TMessage` and decides what the rest of the pipeline sees. |
| [`IStreamHandler<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/istreamhandler-2) | Interface | Handles messages of type `TMessage` by streaming `TResult` items back to the caller. |
