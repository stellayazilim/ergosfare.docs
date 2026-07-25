---
title: "LruCacheStrategy"
description: "LRU (Least Recently Used) cache strategy."
sidebar:
  label: "LruCacheStrategy"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Internal.Caching`](/ergosfare.docs/api/core-internal-caching)  
**Assembly:** `Stella.Ergosfare.Core.dll`

LRU (Least Recently Used) cache strategy.

```csharp
public sealed class LruCacheStrategy : IDescriptorCacheStrategy, IDisposable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core/Internal/Caching/MessageDescriptorLruCache.cs#L8)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IDescriptorCacheStrategy`](/ergosfare.docs/api/core-abstractions-caching/idescriptorcachestrategy), [`IDisposable`](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Constructors

### `LruCacheStrategy(uint)`

```csharp
public LruCacheStrategy(uint maxSize = 100)
```

LRU (Least Recently Used) cache strategy.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `maxSize` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) |  |

## Properties

### `Count`

```csharp
public int Count { get; }
```

Gets the number of cached entries.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### `Add(string, object)`

```csharp
public void Add(string key, object value)
```

Adds an object to the cache.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |

### `Clear()`

```csharp
public void Clear()
```

Clears all cached entries.

### `Dispose()`

```csharp
public void Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

### `Evict(string)`

```csharp
public void Evict(string key)
```

Evicts a specific entry from cache.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

### `TryGet(string, out object?)`

```csharp
public bool TryGet(string key, out object? value)
```

Tries to get a cached object.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)
