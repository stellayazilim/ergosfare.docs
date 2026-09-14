---
title: "GroupSet"
description: "An immutable group filter whose equal instances are canonicalized, so dispatch caches can recognize a reused filter by reference instead of comparing names."
sidebar:
  label: "GroupSet"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

An immutable group filter whose equal instances are canonicalized, so dispatch caches
can recognize a reused filter by reference instead of comparing names.

```csharp
public sealed class GroupSet : IReadOnlyList<string>, IReadOnlyCollection<string>, IEnumerable<string>, IEnumerable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/GroupSet.cs#L26)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IReadOnlyList<string>`, `IReadOnlyCollection<string>`, `IEnumerable<string>`, [`IEnumerable`](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Remarks

Build a filter once with [`GroupSet.Of(params string[])`](/ergosfare.docs/preview/api/core-abstractions/groupset#ofparams-string) and reuse the instance:

```csharp
static readonly GroupSet Reporting = GroupSet.Of("reporting");
await mediator.SendAsync(new BuildDailyReport(), Reporting);
```

A set is an [`IReadOnlyList<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1) of its names, so it is accepted anywhere a
group sequence is, including the dispatch overloads that take contextual items.

Canonicalization is capped. Past the internal limit [`GroupSet.Of(params string[])`](/ergosfare.docs/preview/api/core-abstractions/groupset#ofparams-string) returns
non-canonical instances; those still dispatch identically, the caches simply compare
names. The cap only guards against group names generated dynamically without bound.

## Fields

### `Empty`

```csharp
public static readonly GroupSet Empty
```

The filter that applies no group filtering, selecting the default pipeline.

**Returns**

[`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset)

## Properties

### `Count`

```csharp
public int Count { get; }
```

The number of group names in this set.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32)

### `this[int]`

```csharp
public string this[int index] { get; }
```

The group name at `index`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `index` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | The zero-based position to read. |

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### `Create(ReadOnlySpan<string>)`

```csharp
public static GroupSet Create(ReadOnlySpan<string> groups)
```

Creates an immutable group set from a collection expression, such as ["audit"].

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `groups` | `ReadOnlySpan<string>` | Group names; an empty string is a valid name, distinct from no names. |

**Returns**

[`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) — The canonical group set when available.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentException`](https://learn.microsoft.com/dotnet/api/system.argumentexception) | A group name is null. |

### `GetEnumerator()`

```csharp
public IEnumerator<string> GetEnumerator()
```

Returns an enumerator over the group names, in order.

**Returns**

`IEnumerator<string>`

### `Of(params string[])`

```csharp
public static GroupSet Of(params string[] groups)
```

Returns the canonical set for `groups`. Two calls with the same
names in the same order return the same instance, up to the canonicalization cap.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The group names. Order is significant and names are compared ordinally, matching dispatch-time group semantics. The sequence is copied, so mutating the argument afterwards does not affect the returned set. |

**Returns**

[`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) — [`GroupSet.Empty`](/ergosfare.docs/preview/api/core-abstractions/groupset#empty) when `groups` is empty; otherwise a set over the given names.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `groups` is `null`. |
| [`ArgumentException`](https://learn.microsoft.com/dotnet/api/system.argumentexception) | `groups` contains a `null` name. |

### `ToString()`

```csharp
public override string ToString()
```

Returns the group names for display, or `GroupSet.Empty` when there are none.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### `implicit operator GroupSet(string)`

```csharp
public static implicit operator GroupSet(string group)
```

Converts one group name into a single-group set.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `group` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The group name. An empty string is a valid group name. |

**Returns**

[`GroupSet`](/ergosfare.docs/preview/api/core-abstractions/groupset) — A set containing exactly the supplied name.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `group` is null. |
