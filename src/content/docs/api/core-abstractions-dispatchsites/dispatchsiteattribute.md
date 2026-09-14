---
title: "DispatchSiteAttribute"
description: "Records one dispatch site the source generator saw in an assembly's own source: a distinct pair of static message type and mediator surface that at least one…"
sidebar:
  label: "DispatchSiteAttribute"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchSites`](/ergosfare.docs/api/core-abstractions-dispatchsites)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Records one dispatch site the source generator saw in an assembly's own source: a
distinct pair of static message type and mediator surface that at least one call
reached.

```csharp
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
public sealed class DispatchSiteAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/DispatchSites/DispatchSiteAttribute.cs#L21)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

A generator running in a composition root reads these records from every referenced
assembly to judge which dispatches and handlers the whole program can reach — reporting
dispatches nothing can handle (ERGO005) and handlers nothing dispatches to (ERGO007) —
without needing those assemblies' source.

Written by generated code; do not apply it by hand. The message type is recorded as a
CLR metadata name (`Ns.Type`1`, nested types joined with `+`) so the reading
compilation can look the symbol up and work out assignability for itself.

## Constructors

### `DispatchSiteAttribute(string, DispatchKind, bool)`

```csharp
public DispatchSiteAttribute(string messageTypeMetadataName, DispatchKind kind, bool opaque)
```

Records one dispatch site the source generator saw in an assembly's own source: a
distinct pair of static message type and mediator surface that at least one call
reached.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageTypeMetadataName` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The metadata name of the site's static message type. |
| `kind` | [`DispatchKind`](/ergosfare.docs/api/core-abstractions-dispatchsites/dispatchkind) | The mediator surface the site called. |
| `opaque` | [`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) | Whether the static type proves nothing about the concrete message. |

A generator running in a composition root reads these records from every referenced
assembly to judge which dispatches and handlers the whole program can reach — reporting
dispatches nothing can handle (ERGO005) and handlers nothing dispatches to (ERGO007) —
without needing those assemblies' source.

Written by generated code; do not apply it by hand. The message type is recorded as a
CLR metadata name (`Ns.Type`1`, nested types joined with `+`) so the reading
compilation can look the symbol up and work out assignability for itself.

## Properties

### `Groups`

```csharp
public string[]? Groups { get; set; }
```

The literal group names the site dispatches under, where they could be proven.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)

Reachability judgment does not consider groups today, so nothing writes or reads
this. The property exists so that manifests written now stay readable if it does.

### `Kind`

```csharp
public DispatchKind Kind { get; }
```

The mediator surface the site called.

**Returns**

[`DispatchKind`](/ergosfare.docs/api/core-abstractions-dispatchsites/dispatchkind)

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

Whether the static message type says nothing about which message is dispatched —
a bare module marker such as `ICommand`, or `IMessage`, `object`, or
an unconstrained type parameter. Such a site is taken to reach every message
assignable to the recorded type.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)
