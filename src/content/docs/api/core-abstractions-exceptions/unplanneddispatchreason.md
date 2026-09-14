---
title: "UnplannedDispatchReason"
description: "Why a dispatch had no compiled plan to run; carried by UnplannedDispatchException so callers and tests can tell the cases apart without parsing the message."
sidebar:
  label: "UnplannedDispatchReason"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Why a dispatch had no compiled plan to run; carried by
[`UnplannedDispatchException`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchexception) so callers and tests can tell the cases apart
without parsing the message.

```csharp
public enum UnplannedDispatchReason
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/UnplannedDispatchReason.cs#L8)

## Fields

### `CompositionDiverged`

```csharp
CompositionDiverged = 2
```

A plan exists, but the live pipeline is not the one it was compiled against — a
participant registered at runtime, a missing one, or a changed order.

**Returns**

[`UnplannedDispatchReason`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchreason)

### `ForeignDependenciesFactory`

```csharp
ForeignDependenciesFactory = 5
```

The container uses a dependencies factory the engine does not know, so nothing the
plan was compiled against can be verified.

**Returns**

[`UnplannedDispatchReason`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchreason)

### `NoCompiledPlan`

```csharp
NoCompiledPlan = 0
```

The generator produced nothing for the message type — it never saw the type, or saw
it and could not model its pipeline.

**Returns**

[`UnplannedDispatchReason`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchreason)

### `NoDispatchRoot`

```csharp
NoDispatchRoot = 1
```

The generator produced no dispatch root for the message type, so the dispatch could
not even be constructed for it.

**Returns**

[`UnplannedDispatchReason`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchreason)

### `UnplannedGroupSet`

```csharp
UnplannedGroupSet = 6
```

The dispatch named a group set that no compiled plan serves and the filtering plan
cannot be verified for.

**Returns**

[`UnplannedDispatchReason`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchreason)

### `UnplannedResultAdapter`

```csharp
UnplannedResultAdapter = 4
```

A result adapter is bound that the plan was not compiled against.

**Returns**

[`UnplannedDispatchReason`](/ergosfare.docs/api/core-abstractions-exceptions/unplanneddispatchreason)
