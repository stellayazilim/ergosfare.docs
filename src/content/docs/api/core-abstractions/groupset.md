---
title: "GroupSet"
description: "An immutable, canonicalized group filter: [GroupSet.Of(params string[])](/ergosfare.docs/api/core-abstractions/groupset#ofparams-string) interns equal sequen…"
sidebar:
  label: "GroupSet"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

An immutable, canonicalized group filter: [`GroupSet.Of(params string[])`](/ergosfare.docs/api/core-abstractions/groupset#ofparams-string) interns equal sequences
(same names, same order — ordinal) to one instance, so the grouped dispatch caches can
match a reused filter with a single reference check instead of comparing group names
element-wise. Define filters once and reuse them:

```csharp
static readonly GroupSet Reporting = GroupSet.Of("reporting");
await mediator.SendAsync(new BuildDailyReport(), Reporting);
```

A [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) is also an [`IReadOnlyList<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1) of its names, so it
can be assigned anywhere a group sequence is accepted
(`settings.Filters.Groups = Reporting;`) — the caches recognize it there too.

```csharp
public sealed class GroupSet : IReadOnlyList<string>, IReadOnlyCollection<string>, IEnumerable<string>, IEnumerable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/GroupSet.cs#L24)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** `IReadOnlyList<string>`, `IReadOnlyCollection<string>`, `IEnumerable<string>`, [`IEnumerable`](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Remarks

Interning is bounded: beyond an internal cap, [`GroupSet.Of(params string[])`](/ergosfare.docs/api/core-abstractions/groupset#ofparams-string) returns un-interned
instances, which still dispatch correctly — the caches fall back to comparing group
names. Group names come from code in practice, so the cap exists only as a guard
against pathological dynamic name generation.

## Fields

### `Empty`

```csharp
public static readonly GroupSet Empty
```

The empty filter: no group filtering, the default pipeline.

**Returns**

[`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset)

## Properties

### `Count`

```csharp
public int Count { get; }
```

Gets the number of elements in the collection.

**Returns**

[`int`](https://learn.microsoft.com/dotnet/api/system.int32) — The number of elements in the collection.

### `this[int]`

```csharp
public string this[int index] { get; }
```

Gets the element at the specified index in the read-only list.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `index` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | The zero-based index of the element to get. |

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string) — The element at the specified index in the read-only list.

## Methods

### `GetEnumerator()`

```csharp
public IEnumerator<string> GetEnumerator()
```

Returns an enumerator that iterates through the collection.

**Returns**

`IEnumerator<string>` — An enumerator that can be used to iterate through the collection.

### `Of(params string[])`

```csharp
public static GroupSet Of(params string[] groups)
```

Returns the canonical [`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset) for the given group names. Order is
significant and comparison is ordinal, matching dispatch-time group semantics
exactly; the input sequence is snapshotted, so later mutation of a passed array
never affects the set.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The group names; must not be null or contain nulls. |

**Returns**

[`GroupSet`](/ergosfare.docs/api/core-abstractions/groupset)

### `ToString()`

```csharp
public override string ToString()
```

Returns a string that represents the current object.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string) — A string that represents the current object.
