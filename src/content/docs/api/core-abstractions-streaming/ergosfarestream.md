---
title: "ErgosfareStream"
description: "The chunk-carrying half of a stream message, without its chunk type."
sidebar:
  label: "ErgosfareStream"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The chunk-carrying half of a stream message, without its chunk type.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public abstract class ErgosfareStream : IMessage, IAsyncDisposable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Streaming/ErgosfareStream.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IMessage`](/ergosfare.docs/api/core-abstractions/imessage), [`IAsyncDisposable`](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable)

**Derived:** [`ErgosfareStream<TChunk>`](/ergosfare.docs/api/core-abstractions-streaming/ergosfarestream-1)

## Remarks

What the pipeline needs of a stream message it can name without knowing what the chunks
are: one type test, and the end of the dispatch. The typed half —
[`ErgosfareStream<TChunk>`](/ergosfare.docs/api/core-abstractions-streaming/ergosfarestream-1) — is what callers and handlers use.

## Properties

### `IsDisposed`

```csharp
protected bool IsDisposed { get; }
```

Whether input disposal has started.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)
