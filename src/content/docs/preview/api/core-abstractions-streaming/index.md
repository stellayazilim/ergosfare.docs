---
title: "Stella.Ergosfare.Core.Abstractions.Streaming"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Streaming namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Streaming` namespace contains 10 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`ByteStreamExtensions`](/ergosfare.docs/preview/api/core-abstractions-streaming/bytestreamextensions) | Class | Bridges between a chunk sequence and [`Stream`](https://learn.microsoft.com/dotnet/api/system.io.stream), in both directions. |
| [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream) | Class | The chunk-carrying half of a stream message, without its chunk type. |
| [`ErgosfareStream<TChunk>`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream-1) | Class | A message whose payload arrives in chunks instead of all at once. |
| [`IPipeConverter<T>`](/ergosfare.docs/preview/api/core-abstractions-streaming/ipipeconverter-1) | Interface | Reads a byte source as typed items, preserving decoding state between reads. |
| [`IPipeConverter<TSource, T>`](/ergosfare.docs/preview/api/core-abstractions-streaming/ipipeconverter-2) | Interface | Converts one source item into one destination item. |
| [`PipeConverters`](/ergosfare.docs/preview/api/core-abstractions-streaming/pipeconverters) | Class | Reusable converters for caller-owned streams. Converters never close the source. |
| [`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion) | Enum | How a stream ended. |
| [`StreamInfo`](/ergosfare.docs/preview/api/core-abstractions-streaming/streaminfo) | Struct | What a stream carried, read at the point someone asks. |
| [`StreamInput<TChunk, TSelf>`](/ergosfare.docs/preview/api/core-abstractions-streaming/streaminput-2) | Class | A bounded stream message whose public properties carry its metadata. |
| [`StreamInputPipeExtensions`](/ergosfare.docs/preview/api/core-abstractions-streaming/streaminputpipeextensions) | Class | Byte-specific convenience overloads, preserving the concrete message type. |
