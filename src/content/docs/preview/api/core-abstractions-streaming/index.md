---
title: "Stella.Ergosfare.Core.Abstractions.Streaming"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Streaming namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Streaming` namespace contains 5 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`ByteStreamExtensions`](/ergosfare.docs/preview/api/core-abstractions-streaming/bytestreamextensions) | Class | Bridges between a chunk sequence and [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream), in both directions. |
| [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream) | Class | The chunk-carrying half of a stream message, without its chunk type. |
| [`ErgosfareStream<TChunk>`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream-1) | Class | A message whose payload arrives in chunks instead of all at once. |
| [`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion) | Enum | How a stream ended. |
| [`StreamInfo`](/ergosfare.docs/preview/api/core-abstractions-streaming/streaminfo) | Struct | What a stream carried, read at the point someone asks. |
