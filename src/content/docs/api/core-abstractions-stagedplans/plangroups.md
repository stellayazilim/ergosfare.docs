---
title: "PlanGroups"
description: "The group tests generated plans call before each participant."
sidebar:
  label: "PlanGroups"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The group tests generated plans call before each participant.

```csharp
public static class PlanGroups
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/PlanGroups.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

A plan compiled for a known group set needs none of these — which participants run was
decided at compile time. These serve the other case, a dispatch whose groups are only
known at runtime, where the pipeline can still be straight-line code with a test in
front of each call.

## Methods

### `Matches(IReadOnlyList<string>, string)`

```csharp
public static bool Matches(IReadOnlyList<string> requested, string declared)
```

Reports whether a participant that declares one group runs under
`requested`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `requested` | `IReadOnlyList<string>` | The groups the dispatch asked for. |
| `declared` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The group the participant declared. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the declared group was asked for.

Declaring a single group is the common shape, so it is spelled without an array and
the generated guard is a string comparison over the request.

### `Matches(IReadOnlyList<string>, string[])`

```csharp
public static bool Matches(IReadOnlyList<string> requested, string[] declared)
```

Reports whether a participant that declares several groups runs under
`requested`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `requested` | `IReadOnlyList<string>` | The groups the dispatch asked for. |
| `declared` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The groups the participant declared. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when any declared group was asked for.

### `MatchesDefault(IReadOnlyList<string>)`

```csharp
public static bool MatchesDefault(IReadOnlyList<string> requested)
```

Reports whether a participant that declares no groups runs under
`requested`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `requested` | `IReadOnlyList<string>` | The groups the dispatch asked for. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the default group was asked for, either by naming it or by asking for nothing.
