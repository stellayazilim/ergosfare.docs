---
title: "IQuery<TResult>"
description: "Marks a type as a query whose handler returns a TResult."
sidebar:
  label: "IQuery<TResult>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Marks a type as a query whose handler returns a `TResult`.

```csharp
public interface IQuery<TResult> : IQuery, IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/IQuery%5BTResult%5D.cs#L11)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type the handler returns. |

## Remarks

Declaring the result type on the query means the caller and the handler cannot disagree
about it. For a query that yields many results, implement
[`IStreamQuery<TResult>`](/ergosfare.docs/api/queries-abstractions/istreamquery-1) instead.
