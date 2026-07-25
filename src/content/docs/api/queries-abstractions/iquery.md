---
title: "IQuery"
description: "Represents a query message in the system, which can be dispatched through the query module."
sidebar:
  label: "IQuery"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents a query message in the system, which can be dispatched through the query module.

```csharp
public interface IQuery : IMessage
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/IQuery.cs#L17)

## Remarks

Any type implementing [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery) is considered a query and can be registered
within the query module, allowing it to be handled by query handlers and interceptors.

Queries are typically read-only operations that return a result, and they participate
in the query mediation pipeline.
