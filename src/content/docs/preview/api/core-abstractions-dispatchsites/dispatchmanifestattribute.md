---
title: "DispatchManifestAttribute"
description: "Assembly-level marker stamped by the source generator whenever it ran with dispatch-site manifest support — including when the assembly contains no dispatch…"
sidebar:
  label: "DispatchManifestAttribute"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchSites`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Assembly-level marker stamped by the source generator whenever it ran with dispatch-site
manifest support — including when the assembly contains no dispatch site at all. Its
presence is what lets an aggregating composition root distinguish "this assembly truly
dispatches nothing" from "this assembly predates manifests (or was built without the
generator), so its dispatch sites are unknown". Unreachable-handler judgment (ERGOSG007)
and compile-time handler trimming stay silent while any Ergosfare-referencing assembly
in the closure lacks the marker.

```csharp
[AttributeUsage(AttributeTargets.Assembly)]
public sealed class DispatchManifestAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchSites/DispatchManifestAttribute.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Written by generated code; not intended to be applied by hand.

## Constructors

### `DispatchManifestAttribute(int)`

```csharp
public DispatchManifestAttribute(int version)
```

Assembly-level marker stamped by the source generator whenever it ran with dispatch-site
manifest support — including when the assembly contains no dispatch site at all. Its
presence is what lets an aggregating composition root distinguish "this assembly truly
dispatches nothing" from "this assembly predates manifests (or was built without the
generator), so its dispatch sites are unknown". Unreachable-handler judgment (ERGOSG007)
and compile-time handler trimming stay silent while any Ergosfare-referencing assembly
in the closure lacks the marker.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `version` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) |  |

Written by generated code; not intended to be applied by hand.

## Properties

### `HasOpaqueRegistrations`

```csharp
public bool HasOpaqueRegistrations { get; set; }
```

Whether the assembly performs registrations whose types cannot be statically known
(a non-`typeof` `Type` argument, descriptor batches, or the legacy
assembly scan of older packages). Coverage evidence is then incomplete by
construction, so composition roots suspend dead-dispatch judgment (ERGOSG005/006)
closure-wide.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

### `Version`

```csharp
public int Version { get; }
```

The manifest schema version the emitting generator wrote.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)
