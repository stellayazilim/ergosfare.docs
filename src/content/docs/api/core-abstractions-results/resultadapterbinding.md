---
title: "ResultAdapterBinding"
description: "Resolves the result adapter of a (message, result-slot) pair."
sidebar:
  label: "ResultAdapterBinding"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Resolves the result adapter of a (message, result-slot) pair. Resolution ladder:
[`IgnoreResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/ignoreresultadapterattribute) opts the message out entirely; else the
message's [`ResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/resultadapterattribute) when its adapter fits the slot exactly;
else the built-in adapters of the framework's own
[`Result`](/ergosfare.docs/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1) carriers; else — on the
provider-taking overload — the container's configured [`DefaultResultAdapter`](/ergosfare.docs/api/core-abstractions-results/defaultresultadapter)
when it can serve the slot; else `null`, the overwhelmingly common case, in which
the pipeline performs no probing at all and keeps the classic try/catch semantics.
Nobody is forced onto the value channel — adapters are a recommended win, never a
requirement.

```csharp
public static class ResultAdapterBinding
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Results/ResultAdapterBinding.cs#L30)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The attribute tiers resolve once per closed pair into a static generic slot, so
dispatch paths only ever read a field; the default tier is per-container and cached by
the callers that consult it. Both attributes are inherited; declaring both on one
message (own or inherited) fails the build (ERGOSG012) — against assemblies compiled
before that rule, the opt-out wins here. This is the runtime mirror of a compile-time
fact: the source generator bakes the same attribute-tier binding into execution plans
and fails the build on a mismatched annotation (ERGOSG011).

## Methods

### `For<TMessage, TResult>()`

```csharp
public static IResultAdapter<TResult>? For<TMessage, TResult>()
```

The attribute-tier adapter bound to the pair — annotation, then native — or
`null` when neither binds or the message opts out. Does not consult the
container's default adapter; dispatch paths use the provider-taking overload.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Returns**

`IResultAdapter<TResult>`

### `For<TMessage, TResult>(IServiceProvider)`

```csharp
public static IResultAdapter<TResult>? For<TMessage, TResult>(IServiceProvider serviceProvider)
```

The effective adapter of the pair: the attribute tiers first, then the container's
configured [`DefaultResultAdapter`](/ergosfare.docs/api/core-abstractions-results/defaultresultadapter) when it can serve the slot. A message
carrying [`IgnoreResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/ignoreresultadapterattribute) resolves to `null` past
every tier, the default included.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The container the dispatch runs in; supplies the configured default adapter, if any. |

**Returns**

`IResultAdapter<TResult>`
