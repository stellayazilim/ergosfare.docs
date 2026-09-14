---
title: "IQueryPostInterceptor"
description: "Runs after the handler of any query, whatever its type."
sidebar:
  label: "IQueryPostInterceptor"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Runs after the handler of any query, whatever its type.

```csharp
public interface IQueryPostInterceptor : IQuery, IMessage, IAsyncPostInterceptor<IQuery>, IPostInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/PostInterceptors/IQueryPostInterceptor.cs#L13)

## Remarks

Because it accepts every query, this contract sees the query as [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery) and
its result as [`object`](https://learn.microsoft.com/dotnet/api/system.object). To work with a typed result, implement
[`IQueryPostInterceptor<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/iquerypostinterceptor-2).
