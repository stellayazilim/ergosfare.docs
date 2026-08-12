---
title: "Stella.Ergosfare.Queries.Abstractions"
description: "Types in the Stella.Ergosfare.Queries.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Queries.Abstractions` namespace contains 22 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) | Interface | Represents a query message in the system, which can be dispatched through the query module. |
| [`IQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquery-1) | Interface | Represents a type-safe query message that produces a result of type `TResult`. |
| [`IQueryExceptionInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptor) | Interface | Represents a query exception interceptor that can handle multiple query types in a non-generic, non-type-safe manner. |
| [`IQueryExceptionInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptor-2) | Interface | Represents a type-safe exception interceptor for queries with a strongly-typed result. The interceptor can inspect the exception and modify or replace the query result. |
| [`IQueryExceptionInterceptorFor<TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-1) | Interface | A module-wide exception interceptor that runs for every query but only for exceptions of type `TException` — the filtered form of [`IQueryExceptionInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptor), and the shape a global error policy takes. |
| [`IQueryExceptionInterceptorFor<TQuery, TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-2) | Interface | A result-agnostic exception interceptor for a specific query type that runs only for exceptions of type `TException`. The exception arrives already typed — no `is` check in the interceptor body. |
| [`IQueryExceptionInterceptorFor<TQuery, TResult, TException>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryexceptioninterceptorfor-3) | Interface | A type-safe exception interceptor for queries with a strongly-typed result that runs only for exceptions of type `TException`. The exception arrives already typed — no `is` check in the interceptor body. |
| [`IQueryFinalInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iqueryfinalinterceptor) | Interface | Represents a non-generic final interceptor for queries, allowing custom logic to execute after all query handlers and other interceptors have completed. |
| [`IQueryFinalInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryfinalinterceptor-2) | Interface | Represents a type-safe final interceptor for queries, allowing custom logic to execute after all query handlers and other interceptors have completed. |
| [`IQueryHandler<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iqueryhandler-2) | Interface | Represents a type-safe asynchronous handler for a query of type `TQuery`, producing a result of type `TResult`. |
| [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) | Interface |  |
| [`IQueryPostInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor) | Interface | Represents a non-generic post-interceptor for queries, allowing custom logic to execute after any query handlers have been invoked. |
| [`IQueryPostInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor-2) | Interface | Represents a type-safe post-interceptor for queries with a strongly-typed result. Executes after the main query handler has completed and can modify the result before it propagates further through the pipeline. |
| [`IQueryPostInterceptor<TQuery>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor-1) | Interface | Represents a result-agnostic post-interceptor for a specific query type in the Stella.Ergosfare pipeline. |
| [`IQueryPreInterceptor`](/ergosfare.docs/preview/api/queries-abstractions/iquerypreinterceptor) | Interface | Represents a non-generic pre-interceptor for queries in the Stella.Ergosfare pipeline. |
| [`IQueryPreInterceptor<TQuery, TModifiedQuery>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypreinterceptor-2) | Interface | Represents a type-safe pre-interceptor for queries in the Stella.Ergosfare pipeline. |
| [`IQueryPreInterceptor<TQuery>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypreinterceptor-1) | Interface | Represents a type-safe pre-interceptor for query messages. It runs before the query handler and returns the query that continues through the pipeline — the original, or a rewritten one. |
| [`IStreamQuery<TResult>`](/ergosfare.docs/preview/api/queries-abstractions/istreamquery-1) | Interface | Represents a stream query message that produces multiple results of type `TResult` over time. |
| [`IStreamQueryHandler<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/istreamqueryhandler-2) | Interface | Represents a type-safe asynchronous handler for a stream query of type `TQuery`, producing a stream of results of type `TResult`. |
| [`QueryMediationSettings`](/ergosfare.docs/preview/api/queries-abstractions/querymediationsettings) | Class | Represents the configuration settings that control query mediation behavior. |
| [`QueryMediationSettings.QueryMediationFilters`](/ergosfare.docs/preview/api/queries-abstractions/querymediationsettings-querymediationfilters) | Class | Represents the filters to be applied during query mediation. |
| [`QueryMediatorExtensions`](/ergosfare.docs/preview/api/queries-abstractions/querymediatorextensions) | Class | Provides extension methods for [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) to simplify dispatching queries and stream queries with optional group filtering. |
