---
title: "StreamInfo"
description: "What a stream carried, read at the point someone asks."
sidebar:
  label: "StreamInfo"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/preview/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

What a stream carried, read at the point someone asks.

```csharp
public readonly record struct StreamInfo : IEquatable<StreamInfo>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Streaming/StreamInfo.cs#L23)

**Implements:** `IEquatable<StreamInfo>`

## Remarks

This is what a stage gets instead of the chunks themselves. At a failure the count is the
position — "it got as far as chunk 4,312" — which is the half of the diagnosis an
exception cannot carry on its own. Handing over the last chunk instead would mean either
retaining a buffer past its lifetime or copying every chunk against a failure that usually
does not come; the counters cost nothing, and whoever threw is free to put the rest in
their own exception.

It describes one stream. An operation that takes chunks in and hands chunks out has two of
these, which is the honest shape: the two directions start, end and fail independently.

## Constructors

### `StreamInfo(long, TimeSpan, StreamCompletion)`

```csharp
public StreamInfo(long Chunks, TimeSpan Duration, StreamCompletion Completion)
```

What a stream carried, read at the point someone asks.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `Chunks` | [`long`](https://learn.microsoft.com/dotnet/api/system.int64) | Chunks taken from the stream so far. |
| `Duration` | [`TimeSpan`](https://learn.microsoft.com/dotnet/api/system.timespan) | Time from the first chunk to the end, or to now. |
| `Completion` | [`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion) | How the stream ended, or [`StreamCompletion.Open`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion#open). |

This is what a stage gets instead of the chunks themselves. At a failure the count is the
position — "it got as far as chunk 4,312" — which is the half of the diagnosis an
exception cannot carry on its own. Handing over the last chunk instead would mean either
retaining a buffer past its lifetime or copying every chunk against a failure that usually
does not come; the counters cost nothing, and whoever threw is free to put the rest in
their own exception.

It describes one stream. An operation that takes chunks in and hands chunks out has two of
these, which is the honest shape: the two directions start, end and fail independently.

## Properties

### `Chunks`

```csharp
public long Chunks { get; init; }
```

Chunks taken from the stream so far.

**Returns**

[`long`](https://learn.microsoft.com/dotnet/api/system.int64)

### `Completion`

```csharp
public StreamCompletion Completion { get; init; }
```

How the stream ended, or [`StreamCompletion.Open`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion#open).

**Returns**

[`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion)

### `Duration`

```csharp
public TimeSpan Duration { get; init; }
```

Time from the first chunk to the end, or to now.

**Returns**

[`TimeSpan`](https://learn.microsoft.com/dotnet/api/system.timespan)
