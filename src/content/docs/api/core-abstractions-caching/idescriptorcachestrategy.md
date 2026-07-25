---
title: "IDescriptorCacheStrategy"
description: "Strategy for caching objects by string key."
sidebar:
  label: "IDescriptorCacheStrategy"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Caching`](/ergosfare.docs/api/core-abstractions-caching)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Strategy for caching objects by string key.

```csharp
public interface IDescriptorCacheStrategy : IDisposable
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Caching/IDescriptorCacheStrategy.cs#L5)

## Properties

### `Count`

```csharp
int Count { get; }
```

Gets the number of cached entries.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### `Add(string, object)`

```csharp
void Add(string key, object value)
```

Adds an object to the cache.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |

### `Clear()`

```csharp
void Clear()
```

Clears all cached entries.

### `Evict(string)`

```csharp
void Evict(string key)
```

Evicts a specific entry from cache.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

### `TryGet(string, out object?)`

```csharp
bool TryGet(string key, out object? value)
```

Tries to get a cached object.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)
