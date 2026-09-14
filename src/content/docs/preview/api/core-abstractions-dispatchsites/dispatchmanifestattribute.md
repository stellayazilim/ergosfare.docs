---
title: "DispatchManifestAttribute"
description: "Marks an assembly whose dispatch sites the source generator recorded — including an assembly that dispatches nothing at all."
sidebar:
  label: "DispatchManifestAttribute"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchSites`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marks an assembly whose dispatch sites the source generator recorded — including an
assembly that dispatches nothing at all.

```csharp
[AttributeUsage(AttributeTargets.Assembly)]
public sealed class DispatchManifestAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchSites/DispatchManifestAttribute.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

The marker is what separates "this assembly truly dispatches nothing" from "this
assembly's dispatch sites are unknown", which is the case for anything built before
manifests existed or without the generator. While any assembly referencing Ergosfare in
the program lacks the marker, unreachable-handler reporting (ERGO007) and compile-time
handler trimming stay off.

Written by generated code; do not apply it by hand.

## Constructors

### `DispatchManifestAttribute(int)`

```csharp
public DispatchManifestAttribute(int version)
```

Marks an assembly whose dispatch sites the source generator recorded — including an
assembly that dispatches nothing at all.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `version` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | The manifest schema version the generator wrote. |

The marker is what separates "this assembly truly dispatches nothing" from "this
assembly's dispatch sites are unknown", which is the case for anything built before
manifests existed or without the generator. While any assembly referencing Ergosfare in
the program lacks the marker, unreachable-handler reporting (ERGO007) and compile-time
handler trimming stay off.

Written by generated code; do not apply it by hand.

## Properties

### `HasOpaqueRegistrations`

```csharp
public bool HasOpaqueRegistrations { get; set; }
```

Whether the assembly registers types that cannot be known at compile time — a
`Type` argument that is not a `typeof`, a batch of descriptors, or the
assembly scan older packages used.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

Evidence of what is registered is then incomplete, so composition roots stop
reporting dead dispatches (ERGO005 and ERGO006) across the whole program.

### `Version`

```csharp
public int Version { get; }
```

The manifest schema version the generator wrote.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)
