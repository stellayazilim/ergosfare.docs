---
title: "DispatchPlanCatalog"
description: "A container's runtime catalog of selected registrations and executable generated plans."
sidebar:
  label: "DispatchPlanCatalog"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Planning`](/ergosfare.docs/api/core-abstractions-planning)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A container's runtime catalog of selected registrations and executable generated plans.

```csharp
public sealed class DispatchPlanCatalog
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Planning/DispatchPlanCatalog.cs#L18)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

During engine initialization, registration selection is compared with generated plan
descriptors. Compatible plans are stored by reference and looked up during dispatch.
This catalog does not construct, wrap or rewrite an executable plan.

Selection is the whole answer, including when it is empty: a container that registered
nothing runs nothing, and a message with no registered handler has no pipeline.

## Properties

### `Selections`

```csharp
public IReadOnlyCollection<Type> Selections { get; }
```

Everything registration has named so far — message types and participants alike, in
no particular order.

**Returns**

`IReadOnlyCollection<Type>`

This is the raw selection. For the part that names a pipeline participant, use
[`DispatchPlanCatalog.SelectedParticipants()`](/ergosfare.docs/api/core-abstractions-planning/dispatchplancatalog#selectedparticipants).

## Methods

### `Add(PipelineDescriptor)`

```csharp
public void Add(PipelineDescriptor composition)
```

Adds a composition this container serves itself, overriding the compiled table for
the same message type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `composition` | [`PipelineDescriptor`](/ergosfare.docs/api/core-abstractions-planning/pipelinedescriptor) | The composition to serve. Cannot be `null`. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `composition` is `null`. |

A local composition is matched by message type exactly, without the ancestor walk
the compiled table gets, and is taken whole rather than narrowed by selection —
supplying one states the pipeline instead of choosing from it. Add it before the
message is first dispatched, since compositions are cached per type.

### `Select(IEnumerable<Type>)`

```csharp
public void Select(IEnumerable<Type> participantTypes)
```

Records a batch of registered types; see [`DispatchPlanCatalog.Select(Type)`](/ergosfare.docs/api/core-abstractions-planning/dispatchplancatalog#selecttype).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` | The registered types. Cannot be `null`. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `participantTypes` is `null`. |

### `Select(Type)`

```csharp
public void Select(Type participantType)
```

Records that this container registered `participantType`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The registered type. Cannot be `null`. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `participantType` is `null`. |

Selection is a union, so repeated and overlapping calls are safe.

### `SelectedParticipants()`

```csharp
public IEnumerable<Type> SelectedParticipants()
```

The participant types this container both registered and can run: its selection
intersected with the participants the compiled table names, plus every participant
of any composition handed over directly.

**Returns**

`IEnumerable<Type>` — The participant types to register as services.

This is what container registration derives its service registrations from.
Selection alone would not do, since it also holds message types — things to
dispatch, not services to resolve.

Intended for setup, before any composition is cached: it reads the whole table once.
Every type returned came from [`FrozenParticipant.HandlerType`](/ergosfare.docs/api/core-abstractions-planning/frozenparticipant#handlertype), so its
public constructors survive trimming; the sequence itself cannot carry that
annotation, which is why the caller registering these suppresses the dataflow
warning instead of restating it.
