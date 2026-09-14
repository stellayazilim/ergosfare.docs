---
title: "IStreamQuery<TResult>"
description: "Marks a type as a query whose handler streams TResult items back to the caller."
sidebar:
  label: "IStreamQuery<TResult>"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Marks a type as a query whose handler streams `TResult` items back
to the caller.

```csharp
public interface IStreamQuery<out TResult> : IQuery, IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/IStreamQuery%5BTResult%5D.cs#L13)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type of each streamed item. |

## Remarks

Use this where results arrive over time rather than all at once. Such a query is served
by an [`IStreamQueryHandler<TQuery, TResult>`](/ergosfare.docs/api/queries-abstractions/istreamqueryhandler-2), and items are produced as the
caller enumerates them.
