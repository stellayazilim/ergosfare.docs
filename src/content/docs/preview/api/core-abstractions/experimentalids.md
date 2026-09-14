---
title: "ExperimentalIds"
description: "The diagnostic ids the framework marks its experimental surfaces with, one per surface, so opting in takes a single documented suppression rather than one pe…"
sidebar:
  label: "ExperimentalIds"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The diagnostic ids the framework marks its experimental surfaces with, one per surface,
so opting in takes a single documented suppression rather than one per member.

```csharp
public static class ExperimentalIds
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/ExperimentalIds.cs#L6)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Fields

### `PluginSurface`

```csharp
public const string PluginSurface = "ERGOEXP002"
```

The plugin surface: everything in `Stella.Ergosfare.Plugins.Abstractions` —
`[ErgosfarePlugin]`, `[PipelineInvokable]`, `[PluginServiceFilter]`
and the `Hook` and `Module` enums — together with the module facade the
generator emits from them.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

Every hook the surface names is a promise about the shape of the generated plan, and
neither the list of hooks nor the way a plugin declares what it filters on is
settled. Opt in for a project with
`<NoWarn>$(NoWarn);ERGOEXP002</NoWarn>`, or at one site with
`#pragma warning disable ERGOEXP002`.

The plugin assembly references nothing on purpose, so that a new hook can ship
without moving the core's version; it therefore writes this id out as a literal, and
this declaration is where to look it up.

### `ResultAdapterSurface`

```csharp
public const string ResultAdapterSurface = "ERGOEXP001"
```

The declarative result-adapter surface: `[ResultAdapter]`,
`[IgnoreResultAdapter]`, and the `UseDefaultResultAdapter` configuration
with its `DefaultResultAdapter` carrier.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

What the value channel does is settled; how it is declared is not, and these shapes
may still change in a minor release. Opt in for a project with
`<NoWarn>$(NoWarn);ERGOEXP001</NoWarn>`, or at one site with
`#pragma warning disable ERGOEXP001`.

### `StreamingSurface`

```csharp
public const string StreamingSurface = "ERGOEXP003"
```

The streaming surface: `ErgosfareStream<TChunk>`, the module bases over it,
`StreamInfo`, and the bridges to [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream).

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

What a stream message *is* — a message whose payload arrives a chunk at a time,
bounded and single-pass — is settled. What is not settled is what the pipeline does
around one: which stages a stream message gets and what they are handed, how a refused
dispatch reaches a caller that is still writing, and whether the chunk sequence keeps
this shape once the byte path is tuned. Those answers will move, and moving them will
not be source-compatible.

Marked experimental rather than obsolete because none of it has shipped: an error by
default is the honest default for a surface nobody depends on yet. Opt in for a project
with `<NoWarn>$(NoWarn);ERGOEXP003</NoWarn>`, or at one site with
`#pragma warning disable ERGOEXP003`.
