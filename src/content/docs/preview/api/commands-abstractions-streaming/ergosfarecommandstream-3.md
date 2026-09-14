---
title: "ErgosfareCommandStream<TChunk, TMeta, TResult>"
description: "A command whose payload arrives in chunks and which returns a TResult."
sidebar:
  label: "ErgosfareCommandStream<TChunk, TMeta, TResult>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions.Streaming`](/ergosfare.docs/preview/api/commands-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

A command whose payload arrives in chunks and which returns a
`TResult`.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public abstract class ErgosfareCommandStream<TChunk, TMeta, TResult> : ErgosfareStream<TChunk>, IAsyncDisposable, IAsyncEnumerable<TChunk>, ICommand<TResult>, ICommand, IMessage where TMeta : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/Streaming/ErgosfareCommandStream%5BTChunk%2CTMeta%2CTResult%5D.cs#L26)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | The chunk type the command carries. |
| `TMeta` | What is known before the first chunk moves. |
| `TResult` | The type the handler returns. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream), `ErgosfareStream<TChunk>`

**Implements:** [`IAsyncDisposable`](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable), `IAsyncEnumerable<TChunk>`, `ICommand<TResult>`, [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand), [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage)

## Remarks

The two axes are independent: the chunks are how the message arrives, the result is what
comes back. A converter takes a video in chunks and answers with a small report — the
payload never exists as one value in either direction, and the pipeline around it is the
ordinary one.

A result that itself streams is written as `IAsyncEnumerable<T>` here; it needs
no separate contract, and it is the one shape where the stages after the handler have no
result to work with.

## Constructors

### `ErgosfareCommandStream(TMeta, IAsyncEnumerable<TChunk>)`

```csharp
protected ErgosfareCommandStream(TMeta meta, IAsyncEnumerable<TChunk> source)
```

Creates a command stream over a source that already exists.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `meta` | `TMeta` | What is known before the chunks move. |
| `source` | `IAsyncEnumerable<TChunk>` | The sequence to hand to the handler. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `meta` is `null`. |

### `ErgosfareCommandStream(TMeta, int)`

```csharp
protected ErgosfareCommandStream(TMeta meta, int capacity = 4)
```

Creates a command stream the caller writes into.

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
