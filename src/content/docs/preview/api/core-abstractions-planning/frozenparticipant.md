---
title: "FrozenParticipant"
description: "One participant of a frozen composition: the type to run, and the groups it runs under."
sidebar:
  label: "FrozenParticipant"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Planning`](/ergosfare.docs/preview/api/core-abstractions-planning)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

One participant of a frozen composition: the type to run, and the groups it runs under.

```csharp
public sealed class FrozenParticipant
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Planning/PipelineDescriptor.cs#L21)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Rows arrive already ordered — descending weight, then ordinal type name — so consuming
a composition only filters and closes them, never sorts.

## Constructors

### `FrozenParticipant(Type, string[]?)`

```csharp
public FrozenParticipant(Type handlerType, string[]? groups = null)
```

One participant of a frozen composition: the type to run, and the groups it runs under.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The participant's type, which is a generic definition when the participant closes over the message's type arguments at dispatch time. Its public constructors are preserved under trimming: this is the only annotated point on the path from the generated table to the container registrations that activate the type. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The groups the participant declared, or `null` for the default group alone — the common case, carried without allocating an array. |

Rows arrive already ordered — descending weight, then ordinal type name — so consuming
a composition only filters and closes them, never sorts.

## Properties

### `Groups`

```csharp
public IReadOnlyList<string>? Groups { get; }
```

The declared groups; `null` means the default group alone.

**Returns**

`IReadOnlyList<string>`

### `HandlerType`

```csharp
public Type HandlerType { get; }
```

The participant's type, possibly an open generic definition.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
