---
title: "IQuery"
description: "Marks a type as a query: a message sent to exactly one handler to read something."
sidebar:
  label: "IQuery"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Marks a type as a query: a message sent to exactly one handler to read something.

```csharp
public interface IQuery : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/IQuery.cs#L12)

## Remarks

A query is expected to read rather than change state. The interface declares no members;
implement [`IQuery<TResult>`](/ergosfare.docs/api/queries-abstractions/iquery-1) to declare what the query returns, or
[`IStreamQuery<TResult>`](/ergosfare.docs/api/queries-abstractions/istreamquery-1) to stream results back.
