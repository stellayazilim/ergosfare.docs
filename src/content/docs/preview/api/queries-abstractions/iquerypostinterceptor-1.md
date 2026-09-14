---
title: "IQueryPostInterceptor<TQuery>"
description: "Runs after the handler of a TQuery, without naming the result type."
sidebar:
  label: "IQueryPostInterceptor<TQuery>"
  order: 14
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Runs after the handler of a `TQuery`, without naming the result
type.

```csharp
public interface IQueryPostInterceptor<in TQuery> : IQuery, IMessage, IAsyncPostInterceptor<TQuery>, IPostInterceptor where TQuery : IQuery
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/PostInterceptors/IQueryPostInterceptor%5BTQuery%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type this interceptor accepts. |

## Remarks

Use this where the work applies to any result — logging or metrics, say — and the result
arrives as [`object`](https://learn.microsoft.com/dotnet/api/system.object). To read or replace a typed result, implement
[`IQueryPostInterceptor<TQuery, TResult>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypostinterceptor-2).
