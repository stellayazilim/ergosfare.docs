---
title: "ExperimentalIds"
description: "The diagnostic ids behind the framework's ExperimentalAttribute markings — one id per experimental surface, so consumers opt in with a single, documented sup…"
sidebar:
  label: "ExperimentalIds"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The diagnostic ids behind the framework's [`ExperimentalAttribute`](https://learn.microsoft.com/dotnet/api/system.diagnostics.codeanalysis.experimentalattribute)
markings — one id per experimental surface, so consumers opt in with a single,
documented suppression instead of chasing members.

```csharp
public static class ExperimentalIds
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/ExperimentalIds.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Fields

### `PluginSurface`

```csharp
public const string PluginSurface = "ERGOEXP002"
```

The plugin surface: everything in `Stella.Ergosfare.Plugins.Abstractions` —
`[ErgosfarePlugin]`, `[PipelineInvokable]`, `[PluginServiceFilter]` and
the `Hook` and `Module` enums behind them — together with the module facade
the generator emits from them. Each hook the surface names is a standing promise about
the shape of the generated plan, and the list is not settled yet; the same goes for how
a plugin declares what it filters on.
Opt in per project with `<NoWarn>$(NoWarn);ERGOEXP002</NoWarn>` or
per site with `#pragma warning disable ERGOEXP002`.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

The plugin assembly references nothing, deliberately — it carries no types the
generator resolves through a reference, which is what lets a new hook ship without
moving the core's version. It therefore spells this id as a literal; this declaration
is where consumers look it up.

### `ResultAdapterSurface`

```csharp
public const string ResultAdapterSurface = "ERGOEXP001"
```

The declarative result-adapter surface: `[ResultAdapter]`,
`[IgnoreResultAdapter]` and the `UseDefaultResultAdapter` configuration
with its `DefaultResultAdapter` carrier. The value channel's semantics are
settled, but this binding surface is young — shapes may still shift in a minor
release. Opt in per project with `<NoWarn>$(NoWarn);ERGOEXP001</NoWarn>`
or per site with `#pragma warning disable ERGOEXP001`.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)
