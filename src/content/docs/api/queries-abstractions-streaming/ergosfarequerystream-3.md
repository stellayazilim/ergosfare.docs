---
title: "ErgosfareQueryStream<TChunk, TMeta, TResult>"
description: "A query whose payload arrives in chunks and which answers with a TResult."
sidebar:
  label: "ErgosfareQueryStream<TChunk, TMeta, TResult>"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions.Streaming`](/ergosfare.docs/api/queries-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

A query whose payload arrives in chunks and which answers with a
`TResult`.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public abstract class ErgosfareQueryStream<TChunk, TMeta, TResult> : ErgosfareStream<TChunk>, IAsyncDisposable, IAsyncEnumerable<TChunk>, IQuery<TResult>, IQuery, IMessage where TMeta : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/Streaming/ErgosfareQueryStream%5BTChunk%2CTMeta%2CTResult%5D.cs#L19)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | The chunk type the query carries. |
| `TMeta` | What is known before the first chunk moves. |
| `TResult` | The type the handler answers with. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/api/core-abstractions-streaming/ergosfarestream), `ErgosfareStream<TChunk>`

**Implements:** [`IAsyncDisposable`](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable), `IAsyncEnumerable<TChunk>`, `IQuery<TResult>`, [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery), [`IMessage`](/ergosfare.docs/api/core-abstractions/imessage)

## Remarks

The same shape the command side has, and deliberately so: streaming is a property of the
message, not of the module it belongs to. A query that has to read its input in pieces —
a search over an uploaded file, a checksum, a validation pass — is written here and
dispatched with the ordinary query verb.

## Constructors

### `ErgosfareQueryStream(TMeta, IAsyncEnumerable<TChunk>)`

```csharp
protected ErgosfareQueryStream(TMeta meta, IAsyncEnumerable<TChunk> source)
```

Creates a query stream over a source that already exists.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `meta` | `TMeta` | What is known before the chunks move. |
| `source` | `IAsyncEnumerable<TChunk>` | The sequence to hand to the handler. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `meta` is `null`. |

### `ErgosfareQueryStream(TMeta, int)`

```csharp
protected ErgosfareQueryStream(TMeta meta, int capacity = 4)
```

Creates a query stream the caller writes into.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `meta` | `TMeta` | What is known before the chunks move. |
| `capacity` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) | How many chunks may be buffered before a write waits. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `meta` is `null`. |

## Properties

### `Meta`

```csharp
public TMeta Meta { get; set; }
```

What is known about the stream before it moves.

**Returns**

`TMeta`

Settable because the pre stage normalises it in place; the instance itself cannot be
swapped while the caller is writing into it.
