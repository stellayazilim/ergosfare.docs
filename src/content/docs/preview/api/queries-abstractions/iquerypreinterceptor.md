---
title: "IQueryPreInterceptor"
description: "Runs before the handler of any query, whatever its type."
sidebar:
  label: "IQueryPreInterceptor"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Runs before the handler of any query, whatever its type.

```csharp
public interface IQueryPreInterceptor : IQuery, IMessage, IAsyncPreInterceptor<IQuery>, IPreInterceptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/PreInterceptors/IQueryPreInterceptor.cs#L14)

## Remarks

Because it accepts every query, this contract sees them as [`IQuery`](/ergosfare.docs/preview/api/queries-abstractions/iquery) and
returns [`object`](https://learn.microsoft.com/dotnet/api/system.object). To work with one query type without casting — and to
return that type rather than [`object`](https://learn.microsoft.com/dotnet/api/system.object) — implement
[`IQueryPreInterceptor<TQuery>`](/ergosfare.docs/preview/api/queries-abstractions/iquerypreinterceptor-1).
