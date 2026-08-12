---
title: "DefaultResultAdapter"
description: "The application-wide fallback adapter, configured once inside AddErgosfare and registered into the container as a normal singleton service."
sidebar:
  label: "DefaultResultAdapter"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/preview/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The application-wide fallback adapter, configured once inside `AddErgosfare` and
registered into the container as a normal singleton service. A result slot that binds
nothing more specific — no [`ResultAdapterAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/resultadapterattribute) on the
message, not a native [`Result`](/ergosfare.docs/preview/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions/result-1) carrier —
falls back to this adapter when it can serve the slot; a slot it cannot serve keeps
the classic try/catch semantics. Nobody is forced onto the value channel: with no
default configured and no annotation, pipelines behave exactly as before.

```csharp
public sealed class DefaultResultAdapter
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Results/DefaultResultAdapter.cs#L23)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The adapter type may be a closed type implementing [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1)
for one or more carrier types, or an open generic definition (e.g. an adapter for a
foreign `Result<T>` family): the slot's result type is unified against the
definition's [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) implementations and the definition
is closed accordingly. One instance is created per served result type and cached for
the container's lifetime, so resolution runs once per slot. Adapters are expected to
be stateless; a public parameterless constructor is required.

## Constructors

### `DefaultResultAdapter(Type)`

```csharp
public DefaultResultAdapter(Type adapterType)
```

Wraps and validates the configured adapter type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The adapter type; closed or an open generic definition. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `adapterType` is null. |
| [`ArgumentException`](https://learn.microsoft.com/dotnet/api/system.argumentexception) | The type implements no [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) contract, is abstract, or lacks a public parameterless constructor. |

## Properties

### `AdapterType`

```csharp
public Type AdapterType { get; }
```

The configured adapter type — closed, or an open generic definition.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

The annotations carry through from the constructor's parameter: closing an open
generic definition over a result slot walks the type's interfaces, and activating
the closed adapter needs its parameterless constructor.

## Methods

### `For<TResult>()`

```csharp
public IResultAdapter<TResult>? For<TResult>()
```

The adapter serving the given result slot, or `null` when the configured type
cannot serve it — resolved once per slot and cached.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` |  |

**Returns**

`IResultAdapter<TResult>`
