---
title: "StreamRevision"
description: "The warning the streaming entry points carry while the shape of stream messaging is being reworked."
sidebar:
  label: "StreamRevision"
  order: 19
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions`](/ergosfare.docs/preview/api/queries-abstractions)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

The warning the streaming entry points carry while the shape of stream messaging is
being reworked.

```csharp
public static class StreamRevision
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Abstractions/StreamRevision.cs#L22)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Streaming keeps working exactly as it does today; this is a warning rather than an
error. It exists because the rework will not be source-compatible, and code built on the
current shape is better told before the release that changes it than after.

The experimental marker used by the result-adapter and plugin surfaces would have been
wrong here: it fails the build by default, and this surface has already shipped.

What is being reworked: the enumerable shape allocates on every enumeration, and the
semantics of a streaming pipeline — stream commands, streamed results, what a stage even
means part-way through a sequence — are not settled the way the single-result ones are.

## Fields

### `Notice`

```csharp
public const string Notice = "Stream messaging is being revised and its shape will not survive the revision source-compatible. It keeps working as-is meanwhile; suppress this warning to opt in until the revision lands."
```

The warning text, used as the obsoletion message on the streaming entry points.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)
