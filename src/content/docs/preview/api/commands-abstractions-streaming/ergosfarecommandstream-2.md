---
title: "ErgosfareCommandStream<TChunk, TMeta>"
description: "A command whose payload arrives in chunks and which returns nothing."
sidebar:
  label: "ErgosfareCommandStream<TChunk, TMeta>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions.Streaming`](/ergosfare.docs/preview/api/commands-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

A command whose payload arrives in chunks and which returns nothing.

```csharp
public abstract class ErgosfareCommandStream<TChunk, TMeta> : ErgosfareStream<TChunk>, IAsyncEnumerable<TChunk>, ICommand, IMessage where TMeta : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/Streaming/ErgosfareCommandStream%5BTChunk%2CTMeta%5D.cs#L20)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | The chunk type the command carries. |
| `TMeta` | What is known before the first chunk moves — a file name, a declared length, a content type. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream), `ErgosfareStream<TChunk>`

**Implements:** `IAsyncEnumerable<TChunk>`, [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand), [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage)

## Remarks

The metadata is the half of the message that exists up front, and that is what makes it
worth naming: the stages that run before the handler see it and nothing else, so a
four-gigabyte upload can be refused without a byte of it being read. The chunks belong to
the handler alone.

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

Settable because the pre stage normalises it in place — a stream message cannot be
replaced the way an ordinary message can, since the caller is already writing into
this instance.
