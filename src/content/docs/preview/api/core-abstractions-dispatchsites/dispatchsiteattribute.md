---
title: "DispatchSiteAttribute"
description: "Assembly-level record of one dispatch site the source generator observed in the assembly's own source: a distinct (static message type, dispatch surface) pai…"
sidebar:
  label: "DispatchSiteAttribute"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchSites`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Assembly-level record of one dispatch site the source generator observed in the
assembly's own source: a distinct (static message type, dispatch surface) pair reached
by at least one call. The generator emitting into a composition root aggregates these
manifests from every referenced assembly to judge whole-closure dispatch reachability —
provably dead dispatches (ERGO005) and handlers no dispatch site can reach
(ERGO007) — without needing the referenced assemblies' syntax.

```csharp
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
public sealed class DispatchSiteAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchSites/DispatchSiteAttribute.cs#L16)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Written by generated code; not intended to be applied by hand. The message type is
carried by CLR metadata name (`Ns.Type`1`, nested via `+`) so the aggregating
compilation can rehydrate the symbol and re-derive assignability itself — the attribute
stays a dumb record.

## Constructors

### `DispatchSiteAttribute(string, DispatchKind, bool)`

```csharp
public DispatchSiteAttribute(string messageTypeMetadataName, DispatchKind kind, bool opaque)
```

Assembly-level record of one dispatch site the source generator observed in the
assembly's own source: a distinct (static message type, dispatch surface) pair reached
by at least one call. The generator emitting into a composition root aggregates these
manifests from every referenced assembly to judge whole-closure dispatch reachability —
provably dead dispatches (ERGO005) and handlers no dispatch site can reach
(ERGO007) — without needing the referenced assemblies' syntax.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageTypeMetadataName` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `kind` | [`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind) |  |
| `opaque` | [`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) |  |

Written by generated code; not intended to be applied by hand. The message type is
carried by CLR metadata name (`Ns.Type`1`, nested via `+`) so the aggregating
compilation can rehydrate the symbol and re-derive assignability itself — the attribute
stays a dumb record.

## Properties

### `Groups`

```csharp
public string[]? Groups { get; set; }
```

Reserved: the literal group names the site dispatches under, when the generator
could prove them. Group-aware reachability judgment is a planned extension; the
field exists so older manifests stay readable when it lands.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)

### `Kind`

```csharp
public DispatchKind Kind { get; }
```

The dispatch surface the site went through.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `MessageTypeMetadataName`

```csharp
public string MessageTypeMetadataName { get; }
```

The CLR metadata name of the site's static message type.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `Opaque`

```csharp
public bool Opaque { get; }
```

Whether the static type proves nothing about the concrete message — the bare module
marker (`ICommand`/`IQuery`/`IEvent`), `IMessage`, `object`,
or an unconstrained type parameter. Opaque sites conservatively reach every message
assignable to the recorded type.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)
