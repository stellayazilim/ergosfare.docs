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
| [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery) | Interface | Represents a query message in the system, which can be dispatched through the query module. |
| [`IQuery<TResult>`](/ergosfare.docs/api/queries-abstractions/iquery-1) | Interface | Represents a type-safe query message that produces a result of type `TResult`. |
| [`IQueryExceptionInterceptor`](/ergosfare.docs/api/queries-abstractions/iqueryexceptioninterceptor) | Interface | Represents a query exception interceptor that can handle multiple query types in a non-generic, non-type-safe manner. |
| [`IQueryExceptionInterceptor<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/iqueryexceptioninterceptor-2) | Interface | Represents a type-safe exception interceptor for queries with a strongly-typed result. The interceptor can inspect the exception and modify or replace the query result. |
| [`IQueryFinalInterceptor`](/ergosfare.docs/api/queries-abstractions/iqueryfinalinterceptor) | Interface | Represents a non-generic final interceptor for queries, allowing custom logic to execute after all query handlers and other interceptors have completed. |
| [`IQueryFinalInterceptor<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/iqueryfinalinterceptor-2) | Interface | Represents a type-safe final interceptor for queries, allowing custom logic to execute after all query handlers and other interceptors have completed. |
| [`IQueryHandler<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/iqueryhandler-2) | Interface | Represents a type-safe asynchronous handler for a query of type `TQuery`, producing a result of type `TResult`. |
| [`IQueryMediator`](/ergosfare.docs/api/queries-abstractions/iquerymediator) | Interface |  |
| [`IQueryPostInterceptor`](/ergosfare.docs/api/queries-abstractions/iquerypostinterceptor) | Interface | Represents a non-generic post-interceptor for queries, allowing custom logic to execute after any query handlers have been invoked. |
| [`IQueryPostInterceptor<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/iquerypostinterceptor-2) | Interface | Represents a type-safe post-interceptor for queries with a strongly-typed result. Executes after the main query handler has completed and can modify the result before it propagates further through the pipeline. |
| [`IQueryPostInterceptor<TQuery>`](/ergosfare.docs/api/queries-abstractions/iquerypostinterceptor-1) | Interface | Represents a non-generic post-interceptor for queries in the Stella.Ergosfare pipeline. |
| [`IQueryPreInterceptor`](/ergosfare.docs/api/queries-abstractions/iquerypreinterceptor) | Interface | Represents a non-generic pre-interceptor for queries in the Stella.Ergosfare pipeline. |
| [`IQueryPreInterceptor<TQuery, TModifiedQuery>`](/ergosfare.docs/api/queries-abstractions/iquerypreinterceptor-2) | Interface | Represents a type-safe pre-interceptor for queries in the Stella.Ergosfare pipeline. |
| [`IQueryPreInterceptor<TQuery>`](/ergosfare.docs/api/queries-abstractions/iquerypreinterceptor-1) | Interface | Represents a type-safe pre-interceptor for query messages. It runs before the query handler and returns the query that continues through the pipeline — the original, or a rewritten one. |
| [`IStreamQuery<TResult>`](/ergosfare.docs/api/queries-abstractions/istreamquery-1) | Interface | Represents a stream query message that produces multiple results of type `TResult` over time. |
| [`IStreamQueryHandler<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/istreamqueryhandler-2) | Interface | Represents a type-safe asynchronous handler for a stream query of type `TQuery`, producing a stream of results of type `TResult`. |
| [`QueryMediationSettings`](/ergosfare.docs/api/queries-abstractions/querymediationsettings) | Class | Represents the configuration settings that control query mediation behavior. |
| [`QueryMediationSettings.QueryMediationFilters`](/ergosfare.docs/api/queries-abstractions/querymediationsettings-querymediationfilters) | Class | Represents the filters to be applied during query mediation. |
| [`QueryMediatorExtensions`](/ergosfare.docs/api/queries-abstractions/querymediatorextensions) | Class | Provides extension methods for [`IQueryMediator`](/ergosfare.docs/api/queries-abstractions/iquerymediator) to simplify dispatching queries and stream queries with optional group filtering. |
