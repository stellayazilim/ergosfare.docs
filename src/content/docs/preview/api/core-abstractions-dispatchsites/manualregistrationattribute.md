---
title: "ManualRegistrationAttribute"
description: "Assembly-level record of one provable manual registration the source generator observed in the assembly's own source: a Register<T>() or Register(typeof(T))…"
sidebar:
  label: "ManualRegistrationAttribute"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchSites`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Assembly-level record of one provable manual registration the source generator observed
in the assembly's own source: a `Register<T>()` or `Register(typeof(T))`
call whose type argument is statically known. Manual registration is the same
source-generated collection path as `RegisterGenerated()` — per type instead of in
bulk — so an aggregating composition root counts these types' handler contracts as
coverage evidence exactly like discovered ones when judging dead dispatches
(ERGO005/006).

```csharp
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
public sealed class ManualRegistrationAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchSites/ManualRegistrationAttribute.cs#L18)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Written by generated code; not intended to be applied by hand. Registrations whose type
cannot be statically known (a non-`typeof` `Type` argument, descriptor
batches, or the legacy assembly scan of older packages) are instead recorded through
[`DispatchManifestAttribute.HasOpaqueRegistrations`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchmanifestattribute#hasopaqueregistrations), which suspends
dead-dispatch judgment closure-wide.

## Constructors

### `ManualRegistrationAttribute(string)`

```csharp
public ManualRegistrationAttribute(string typeMetadataName)
```

Assembly-level record of one provable manual registration the source generator observed
in the assembly's own source: a `Register<T>()` or `Register(typeof(T))`
call whose type argument is statically known. Manual registration is the same
source-generated collection path as `RegisterGenerated()` — per type instead of in
bulk — so an aggregating composition root counts these types' handler contracts as
coverage evidence exactly like discovered ones when judging dead dispatches
(ERGO005/006).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `typeMetadataName` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

Written by generated code; not intended to be applied by hand. Registrations whose type
cannot be statically known (a non-`typeof` `Type` argument, descriptor
batches, or the legacy assembly scan of older packages) are instead recorded through
[`DispatchManifestAttribute.HasOpaqueRegistrations`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchmanifestattribute#hasopaqueregistrations), which suspends
dead-dispatch judgment closure-wide.

## Properties

### `TypeMetadataName`

```csharp
public string TypeMetadataName { get; }
```

The CLR metadata name of the manually registered type.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)
