---
title: "QueryMediationSettings"
description: "Represents the configuration settings that control query mediation behavior."
sidebar:
  label: "QueryMediationSettings"
  order: 17
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

Represents the configuration settings that control query mediation behavior.

```csharp
public sealed class QueryMediationSettings
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/QueryMediationSettings.cs#L10)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

QueryMediationSettings allows customizing how queries are processed in the pipeline,
including filtering which handlers participate in query processing.
These settings can be provided when sending queries through the IQueryMediator.

## Properties

### `Filters`

```csharp
public QueryMediationSettings.QueryMediationFilters Filters { get; }
```

Gets the filters to be applied during query mediation.

**Returns**

[`QueryMediationSettings.QueryMediationFilters`](/ergosfare.docs/api/queries-abstractions/querymediationsettings-querymediationfilters)

Filters determine which handlers participate in the query processing pipeline.

### `Items`

```csharp
public IDictionary<object, object?> Items { get; init; }
```

Gets a key/value collection that can be used to share data within the scope of this execution.

**Returns**

`IDictionary<object, object>`

This collection allows handlers to share data with each other during the execution of a single
mediation operation.
