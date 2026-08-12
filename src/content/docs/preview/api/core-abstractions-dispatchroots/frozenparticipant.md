---
title: "FrozenParticipant"
description: "One participant row of a frozen composition: the handler type plus the group names it participates under."
sidebar:
  label: "FrozenParticipant"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

One participant row of a frozen composition: the handler type plus the group names it
participates under. Rows are emitted pre-sorted (weight descending, then ordinal
`Type.FullName` — the runtime shape-builder's exact comparator), so consumption
only ever filters and closes, never sorts.

```csharp
public sealed class FrozenParticipant
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/FrozenComposition.cs#L21)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `FrozenParticipant(Type, string[]?)`

```csharp
public FrozenParticipant(Type handlerType, string[]? groups = null)
```

One participant row of a frozen composition: the handler type plus the group names it
participates under. Rows are emitted pre-sorted (weight descending, then ordinal
`Type.FullName` — the runtime shape-builder's exact comparator), so consumption
only ever filters and closes, never sorts.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The participant's type — a generic definition when the participant closes over the message's type arguments at dispatch time. Public constructors are preserved under trimming: the generated table hands its `typeof` here, and this parameter is the only annotated slot on the path to the container's handler registrations, which activate the type reflectively. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The participant's declared group names, or `null` for the default group alone — the overwhelmingly common case, carried without an allocation. |

## Properties

### `Groups`

```csharp
public IReadOnlyList<string>? Groups { get; }
```

The declared group names; `null` means the default group alone.

**Returns**

`IReadOnlyList<string>`

### `HandlerType`

```csharp
public Type HandlerType { get; }
```

The participant's (possibly open) type.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
