---
title: "QueryMediationSettings.QueryMediationFilters"
description: "Represents the filters to be applied during query mediation."
sidebar:
  label: "QueryMediationSettings.QueryMediationFilters"
  order: 18
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents the filters to be applied during query mediation.

```csharp
public sealed class QueryMediationSettings.QueryMediationFilters
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/QueryMediationSettings.cs#L36)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Query mediation filters allow for selective inclusion of handlers in the query processing pipeline
based on their metadata such as tags.

## Properties

### `Groups`

```csharp
public IEnumerable<string> Groups { get; set; }
```

Gets or sets the collection of tags used to filter query handlers (pre-handlers, main handlers, and post-handlers)
during mediation.

**Returns**

`IEnumerable<string>`

When tags are specified, only handlers marked with at least one matching tag will participate in query processing.
If the collection is empty, all registered handlers will be considered.
