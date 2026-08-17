---
title: "PlanGroups"
description: "The group test a group-filtering plan bakes around each participant — the runtime shape-builder's MatchesAnyGroup, called from generated code instead of bein…"
sidebar:
  label: "PlanGroups"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The group test a group-filtering plan bakes around each participant — the runtime
shape-builder's `MatchesAnyGroup`, called from generated code instead of being
walked over a materialized composition.

```csharp
public static class PlanGroups
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/PlanGroups.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

A plan keyed by a proven group set needs none of this: its participants are decided at
compile time. This serves the other case — a dispatch whose filter is a runtime value —
where the set cannot key a plan but the pipeline can still be straight-line code with a
boolean in front of each call.

## Methods

### `Matches(IReadOnlyList<string>, string)`

```csharp
public static bool Matches(IReadOnlyList<string> requested, string declared)
```

Whether a participant declaring exactly one group runs under the requested set — the
overwhelmingly common shape, spelled without an array so the emitted guard is a
string compare over the request.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `requested` | `IReadOnlyList<string>` |  |
| `declared` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

### `Matches(IReadOnlyList<string>, string[])`

```csharp
public static bool Matches(IReadOnlyList<string> requested, string[] declared)
```

Any-of × any-of, for a participant declaring several groups.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `requested` | `IReadOnlyList<string>` |  |
| `declared` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

### `MatchesDefault(IReadOnlyList<string>)`

```csharp
public static bool MatchesDefault(IReadOnlyList<string> requested)
```

Whether a participant declaring no `[Group]` runs under the requested set: it
belongs to the default group, and an empty request IS the default group.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `requested` | `IReadOnlyList<string>` |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)
