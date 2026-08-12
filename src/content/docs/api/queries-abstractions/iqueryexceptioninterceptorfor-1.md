---
title: "IQueryExceptionInterceptorFor<TException>"
description: "A module-wide exception interceptor that runs for every query but only for exceptions of type TException — the filtered form of IQueryExceptionInterceptor, a…"
sidebar:
  label: "IQueryExceptionInterceptorFor<TException>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

A module-wide exception interceptor that runs for every query but only for exceptions of
type `TException` — the filtered form of
[`IQueryExceptionInterceptor`](/ergosfare.docs/api/queries-abstractions/iqueryexceptioninterceptor), and the shape a global error policy takes.

```csharp
public interface IQueryExceptionInterceptorFor<TException> : IQuery, IMessage, IAsyncExceptionInterceptor<IQuery>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptorFor%5BTException%5D.cs#L21)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The exception type this interceptor accepts, matched with `catch` semantics: derived exception types match too. |

## Remarks

Being message- and result-agnostic, this interceptor joins the exception stage of every
query pipeline in the module; the filter is what keeps it from swallowing exceptions it
was not written for.

## Methods

### `HandleAsync(IQuery, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(IQuery query, object? messageResult, TException exception, ErgosfareContext context)
```

Handles the exception asynchronously, potentially replacing the pipeline result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery) | The query being processed when the exception occurred. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the exception occurred, if any. |
| `exception` | `TException` | The exception thrown during pipeline execution. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`ValueTask<object>` — A [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) producing the result that continues through the pipeline.
