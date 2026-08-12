---
title: "FrozenCompositionCatalog"
description: "One container's view of the process-wide frozen composition table: the table is compiled once for the whole closure, but which of its participant rows an app…"
sidebar:
  label: "FrozenCompositionCatalog"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

One container's view of the process-wide frozen composition table: the table is
compiled once for the whole closure, but which of its participant rows an application
actually runs is that application's own choice — the constructs it registered.

```csharp
public sealed class FrozenCompositionCatalog
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/FrozenCompositionCatalog.cs#L25)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The table itself lives in [`GeneratedDispatchRoots`](/ergosfare.docs/api/core-abstractions-dispatchroots/generateddispatchroots) — process-wide, appended
at load time, never per container. This type adds the selection layer the message
registry used to provide implicitly by only ever containing what someone registered.
Registration names its participants (the generated registration code passes them
explicitly, a hand-written `Register<T>()` names one), so selection is
recorded type by type and no discovery-key pattern has to survive into the runtime:
a row whose participant this container never registered is not part of its pipeline,
and asking the container to resolve it would fail.

Selection is the whole answer, including when it is empty: a container that registered
nothing runs nothing, and a message it never registered a handler for has no pipeline.
Admitting the unfiltered table instead would hand every application every participant
the closure happens to compile — including ones it cannot resolve.

## Properties

### `Selections`

```csharp
public IReadOnlyCollection<Type> Selections { get; }
```

Everything registration has named so far — messages and participants alike, in no
particular order. The raw selection, before it is matched against the table; see
[`FrozenCompositionCatalog.SelectedParticipants()`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencompositioncatalog#selectedparticipants) for the part that names a pipeline participant.

**Returns**

`IReadOnlyCollection<Type>`

## Methods

### `Add(FrozenComposition)`

```csharp
public void Add(FrozenComposition composition)
```

Adds a composition this container serves itself, overriding whatever the
process-wide table holds for the same message type. Local entries are matched by
message type exactly — the ancestor ladder belongs to the compiled table — and must
be added before the message is first dispatched, since projections are cached per
type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `composition` | [`FrozenComposition`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencomposition) |  |

### `Find(Type)`

```csharp
public FrozenComposition? Find(Type messageType)
```

The composition serving a runtime message type in this container: the process-wide
table entry (found exactly, or through the ancestor ladder) narrowed to the rows
this container registered. `null` when no entry serves the type at all — the
caller's no-handler guard.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`FrozenComposition`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencomposition)

### `Select(IEnumerable<Type>)`

```csharp
public void Select(IEnumerable<Type> participantTypes)
```

Records a whole registration batch; see [`FrozenCompositionCatalog.Select(Type)`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencompositioncatalog#selecttype).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` |  |

### `Select(Type)`

```csharp
public void Select(Type participantType)
```

Records that this container registered `participantType`. Repeated
and overlapping calls are safe — selection is a union.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

### `SelectedParticipants()`

```csharp
public IEnumerable<Type> SelectedParticipants()
```

The participant types this container both registered and can actually run: its
selection intersected with the types the compiled table (plus any composition
handed over directly) names as participants. This is what registration derives the
container's handler service registrations from — selection alone would also carry
the message types registration names, which are constructs to dispatch, not
services to resolve.

**Returns**

`IEnumerable<Type>`

Setup-time only, and deliberately so: it reads the whole table once, while
registration is still open and before any projection is cached.

Every type returned came through [`FrozenParticipant.HandlerType`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozenparticipant#handlertype), so its
public constructors are preserved under trimming — the sequence itself cannot carry
the annotation, which is why the caller registering these as services suppresses the
dataflow warning rather than re-stating the requirement.
