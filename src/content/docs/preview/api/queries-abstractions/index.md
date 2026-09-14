---
title: "Stella.Ergosfare.Queries.Abstractions"
description: "Types in the Stella.Ergosfare.Queries.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Queries.Abstractions` namespace contains 19 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) | Interface | Marks a type as a query: a message sent to exactly one handler to read something. |
| [`IQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquery-1) | Interface | Marks a type as a query whose handler returns a `TResult`. |
| [`IQueryExceptionInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptor) | Interface | Handles failures raised while dispatching any query, whatever its type. |
| [`IQueryExceptionInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptor-2) | Interface | Handles failures raised while dispatching a `TQuery` and supplies the result the caller receives instead. |
| [`IQueryExceptionInterceptorFor<TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-1) | Interface | Handles failures of type `TException` raised while dispatching any query — the shape a module-wide error policy takes. |
| [`IQueryExceptionInterceptorFor<TQuery, TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-2) | Interface | Handles failures of type `TException` raised while dispatching a `TQuery`, without naming the result type. |
| [`IQueryExceptionInterceptorFor<TQuery, TResult, TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-3) | Interface | Handles failures of type `TException` raised while dispatching a `TQuery`, and supplies the result the caller receives instead. |
| [`IQueryFinalInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iqueryfinalinterceptor) | Interface | Runs once the pipeline of any query has settled, whatever its type. |
| [`IQueryFinalInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryfinalinterceptor-2) | Interface | Runs once the pipeline of a `TQuery` has settled, reading its result as a `TResult`. |
| [`IQueryHandler<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryhandler-2) | Interface | Handles queries of type `TQuery` and returns the `TResult` they declare. |
| [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) | Interface | Executes queries against their handlers. |
| [`IQueryPostInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor) | Interface | Runs after the handler of any query, whatever its type. |
| [`IQueryPostInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor-2) | Interface | Runs after the handler of a `TQuery` and decides what result the caller receives. |
| [`IQueryPostInterceptor<TQuery>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor-1) | Interface | Runs after the handler of a `TQuery`, without naming the result type. |
| [`IQueryPreInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iquerypreinterceptor) | Interface | Runs before the handler of any query, whatever its type. |
| [`IQueryPreInterceptor<TQuery>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypreinterceptor-1) | Interface | Runs before the handler of a `TQuery` and decides which query the rest of the pipeline sees. |
| [`IStreamQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/istreamquery-1) | Interface | Marks a type as a query whose handler streams `TResult` items back to the caller. |
| [`IStreamQueryHandler<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/istreamqueryhandler-2) | Interface | Handles queries of type `TQuery` by streaming `TResult` items back to the caller. |
| [`StreamRevision`](/ergosfare.docs/preview/api/queries-abstractions/streamrevision) | Class | The warning the streaming entry points carry while the shape of stream messaging is being reworked. |
