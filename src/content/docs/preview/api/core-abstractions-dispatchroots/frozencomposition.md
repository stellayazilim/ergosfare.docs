---
title: "FrozenComposition"
description: "A message's whole frozen pipeline composition — the compile-time image of what the runtime shape-builder derives from the registry: the two main-handler segm…"
sidebar:
  label: "FrozenComposition"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A message's whole frozen pipeline composition — the compile-time image of what the
runtime shape-builder derives from the registry: the two main-handler segments
(events carry N rows) and the four interceptor stages as direct/indirect segment
pairs, every segment in the runtime execution order. Emitted per message by the
source generator; group filtering happens per dispatch through
[`FrozenComposition.BuildShape(Type, IReadOnlyList<string>)`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozencomposition#buildshapetype-ireadonlyliststring), once per (message, group set).

```csharp
public sealed class FrozenComposition
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/FrozenComposition.cs#L81)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

This is Phase 2's parallel surface: the registry remains the dispatch authority and
the advisory gates stay in place, while dual-run parity tests hold this table to the
shape-builder's output. Phase 3 turns it into the sole source. Messages whose
composition the generator cannot model exactly — keyed participants, pipeline
exclusions, unprovable ordering ties — simply have no entry and stay on the registry.

## Constructors

### `FrozenComposition(Type, FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[])`

```csharp
public FrozenComposition(Type messageType, FrozenParticipant[] handlers, FrozenParticipant[] indirectHandlers, FrozenParticipant[] preInterceptors, FrozenParticipant[] indirectPreInterceptors, FrozenParticipant[] postInterceptors, FrozenParticipant[] indirectPostInterceptors, FrozenParticipant[] exceptionInterceptors, FrozenParticipant[] indirectExceptionInterceptors, FrozenParticipant[] finalInterceptors, FrozenParticipant[] indirectFinalInterceptors)
```

A message's whole frozen pipeline composition — the compile-time image of what the
runtime shape-builder derives from the registry: the two main-handler segments
(events carry N rows) and the four interceptor stages as direct/indirect segment
pairs, every segment in the runtime execution order. Emitted per message by the
source generator; group filtering happens per dispatch through
[`FrozenComposition.BuildShape(Type, IReadOnlyList<string>)`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozencomposition#buildshapetype-ireadonlyliststring), once per (message, group set).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `handlers` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `indirectHandlers` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `preInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `indirectPreInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `postInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `indirectPostInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `exceptionInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `indirectExceptionInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `finalInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |
| `indirectFinalInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.DispatchRoots.FrozenParticipant.html) |  |

This is Phase 2's parallel surface: the registry remains the dispatch authority and
the advisory gates stay in place, while dual-run parity tests hold this table to the
shape-builder's output. Phase 3 turns it into the sole source. Messages whose
composition the generator cannot model exactly — keyed participants, pipeline
exclusions, unprovable ordering ties — simply have no entry and stay on the registry.

## Properties

### `ExceptionInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> ExceptionInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `FinalInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> FinalInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `Handlers`

```csharp
public IReadOnlyList<FrozenParticipant> Handlers { get; }
```

The direct main-handler rows; events carry every subscriber here.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectExceptionInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectExceptionInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectFinalInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectFinalInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectHandlers`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectHandlers { get; }
```

The covariantly matched main-handler rows.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectPostInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectPostInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectPreInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectPreInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `MessageType`

```csharp
public Type MessageType { get; }
```

The message type the composition was baked for.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `PostInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> PostInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `PreInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> PreInterceptors { get; }
```

The four interceptor stages as direct/indirect segment pairs, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

## Methods

### `BuildShape(Type, IReadOnlyList<string>)`

```csharp
public FrozenPipelineShape BuildShape(Type runtimeMessageType, IReadOnlyList<string> groups)
```

Derives the executable pipeline shape for one dispatch: the shape-builder's exact
semantics — an empty group request becomes the default group and a non-empty one
is used verbatim, each segment filters by the any-of × any-of ordinal group
predicate, the interceptor stages merge direct-segment-first, and open participant
types close over the runtime message type's arguments.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `runtimeMessageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The dispatched message's runtime type. |
| `groups` | `IReadOnlyList<string>` | The requested group names; empty means the default group. |

**Returns**

[`FrozenPipelineShape`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozenpipelineshape)
