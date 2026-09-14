---
title: "ErgosfareStream"
description: "The chunk-carrying half of a stream message, without its chunk type."
sidebar:
  label: "ErgosfareStream"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/preview/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The chunk-carrying half of a stream message, without its chunk type.

```csharp
public abstract class ErgosfareStream : IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Streaming/ErgosfareStream.cs#L12)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage)

**Derived:** [`ErgosfareStream<TChunk>`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream-1)

## Remarks

What the pipeline needs of a stream message it can name without knowing what the chunks
are: one type test, and the end of the dispatch. The typed half —
[`ErgosfareStream<TChunk>`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream-1) — is what callers and handlers use.
