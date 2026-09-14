---
title: "PipeConverters"
description: "Reusable converters for caller-owned streams."
sidebar:
  label: "PipeConverters"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Reusable converters for caller-owned streams. Converters never close the source.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public static class PipeConverters
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Streaming/PipeConverters.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### `Bytes`

```csharp
public static IPipeConverter<byte> Bytes { get; }
```

Reads individual bytes. Prefer byte blocks for bulk transfers.

**Returns**

`IPipeConverter<byte>`

## Methods

### `ByteBlocks(int)`

```csharp
public static IPipeConverter<ReadOnlyMemory<byte>> ByteBlocks(int chunkSize = 65536)
```

Reads independently owned byte blocks.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `chunkSize` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) |  |

**Returns**

`IPipeConverter<ReadOnlyMemory<byte>>`

### `Lines(Encoding?)`

```csharp
public static IPipeConverter<string> Lines(Encoding? encoding = null)
```

Reads lines without terminators, preserving decoder state across reads.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `encoding` | [`Encoding`](https://learn.microsoft.com/dotnet/api/system.text.encoding) |  |

**Returns**

`IPipeConverter<string>`
