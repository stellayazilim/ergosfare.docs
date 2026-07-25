---
title: "Discovery"
description: "Runtime evaluation of the discovery attributes — the single source of truth for how ExcludeFromDiscoveryAttribute, DiscoveryKeyAttribute and key patterns com…"
sidebar:
  label: "Discovery"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runtime evaluation of the discovery attributes — the single source of truth for how
[`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/excludefromdiscoveryattribute), [`DiscoveryKeyAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/discoverykeyattribute) and key
patterns compose. The reflection-based scanning paths (`RegisterFromAssembly`) call
into this so their semantics stay identical to source-generated registration, which
evaluates the same rules at compile time.

```csharp
public static class Discovery
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/Discovery.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `GetKeys(Type)`

```csharp
public static string[] GetKeys(Type type)
```

The type's effective discovery keys: its own [`DiscoveryKeyAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/discoverykeyattribute)
keys when declared, else its assembly's, else the implicit default key.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)

### `IsExcluded(Type)`

```csharp
public static bool IsExcluded(Type type)
```

Whether the type — or its assembly — opts out of discovery via
[`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/excludefromdiscoveryattribute).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

### `Matches(Type, string)`

```csharp
public static bool Matches(Type type, string discoveryKeyPattern)
```

Whether discovery with the given key pattern selects the type: the type is not
excluded from discovery, and at least one of its effective discovery keys matches
the pattern.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The candidate registrable type. |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key pattern: an exact key, a prefix glob with a trailing `*` (e.g. `"reporting.*"`), or the empty string for default discovery. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

### `MatchesKey(string, string)`

```csharp
public static bool MatchesKey(string key, string discoveryKeyPattern)
```

Whether a single discovery key matches a pattern: ordinal equality, or — when the
pattern ends with `*` — an ordinal prefix match on the part before the star.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)
