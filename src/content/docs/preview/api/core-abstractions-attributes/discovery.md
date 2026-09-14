---
title: "Discovery"
description: "Evaluates the discovery attributes at runtime — ExcludeFromDiscoveryAttribute, DiscoveryKeyAttribute, and the key patterns registration calls pass."
sidebar:
  label: "Discovery"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Evaluates the discovery attributes at runtime — [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/excludefromdiscoveryattribute),
[`DiscoveryKeyAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/discoverykeyattribute), and the key patterns registration calls pass.

```csharp
public static class Discovery
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/Discovery.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Generated registration applies the same rules at compile time; this type is the runtime
equivalent, for callers that decide at runtime whether a type would be discovered.

## Methods

### `GetKeys(Type)`

```csharp
public static string[] GetKeys(Type type)
```

Returns the discovery keys in effect for `type`: the keys it
declares, falling back to its assembly's keys, falling back to
[`DiscoveryKeyAttribute.DefaultKey`](/ergosfare.docs/preview/api/core-abstractions-attributes/discoverykeyattribute#defaultkey).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to read keys for. |

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string) — The effective keys; never empty.

### `IsExcluded(Type)`

```csharp
public static bool IsExcluded(Type type)
```

Reports whether `type` or its assembly carries
[`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/excludefromdiscoveryattribute).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to test. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the type is excluded from discovery.

### `Matches(Type, string)`

```csharp
public static bool Matches(Type type, string discoveryKeyPattern)
```

Reports whether discovery with `discoveryKeyPattern` selects
`type` — that is, the type is not excluded and at least one of its
keys matches the pattern.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `type` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The candidate type. |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | An exact key, a prefix pattern ending in `*` such as `"reporting.*"`, or the empty string for key-less discovery. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the type would be discovered.

### `MatchesKey(string, string)`

```csharp
public static bool MatchesKey(string key, string discoveryKeyPattern)
```

Reports whether one discovery key matches a pattern: ordinal equality, or an ordinal
prefix match against everything before the pattern's trailing `*`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key to test. |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The pattern to test against. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the key matches.
