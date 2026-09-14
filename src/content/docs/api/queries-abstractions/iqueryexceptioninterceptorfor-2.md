---
title: "IQueryExceptionInterceptorFor<TQuery, TException>"
description: "Handles failures of type TException raised while dispatching a TQuery, without naming the result type."
sidebar:
  label: "IQueryExceptionInterceptorFor<TQuery, TException>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Handles failures of type `TException` raised while dispatching a
`TQuery`, without naming the result type.

```csharp
public interface IQueryExceptionInterceptorFor<in TQuery, TException> : IQuery, IMessage, IAsyncExceptionInterceptor<TQuery>, IExceptionInterceptor, IExceptionInterceptorFilter<TException>, IExceptionInterceptorFilter where TQuery : IQuery where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/ExceptionInterceptors/IQueryExceptionInterceptorFor%5BTQuery%2CTException%5D.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this interceptor accepts. |
| `TException` | The failure type this interceptor accepts. Matching follows `catch` semantics, so derived types match too. |

## Remarks

The failure arrives already typed, so no type test is needed in the body. For a typed
result, implement
[`IQueryExceptionInterceptorFor<TQuery, TResult, TException>`](/ergosfare.docs/api/queries-abstractions/iqueryexceptioninterceptorfor-3).

## Methods

### `HandleAsync(TQuery, object?, TException, ErgosfareContext)`

```csharp
ValueTask<object> HandleAsync(TQuery query, object? messageResult, TException exception, ErgosfareContext context)
```

Handles `exception` and produces the result to continue with.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `query` | `TQuery` | The query whose dispatch failed. |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result produced before the failure, if any. |
| `exception` | `TException` | The failure being handled, already typed. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`ValueTask<object>` — The result the rest of the pipeline receives, which must be of the pipeline's result type.
