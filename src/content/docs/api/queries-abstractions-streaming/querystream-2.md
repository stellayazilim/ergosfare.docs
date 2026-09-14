---
title: "QueryStream<TChunk, TSelf>"
description: "A query input stream."
sidebar:
  label: "QueryStream<TChunk, TSelf>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Queries.Abstractions.Streaming`](/ergosfare.docs/api/queries-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Queries.Abstractions.dll`

A query input stream. Declare metadata and the result contract on the concrete message.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public abstract class QueryStream<TChunk, TSelf> : StreamInput<TChunk, TSelf>, IAsyncDisposable, IAsyncEnumerable<TChunk>, IBufferWriter<TChunk>, IQuery, IMessage where TSelf : QueryStream<TChunk, TSelf>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Abstractions/Streaming/QueryStream.cs#L9)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | The buffered item type. |
| `TSelf` | The concrete message type. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/api/core-abstractions-streaming/ergosfarestream), `ErgosfareStream<TChunk>`, `StreamInput<TChunk, TSelf>`

**Implements:** [`IAsyncDisposable`](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable), `IAsyncEnumerable<TChunk>`, `IBufferWriter<TChunk>`, [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery), [`IMessage`](/ergosfare.docs/api/core-abstractions/imessage)

## Constructors

### `QueryStream(int)`

```csharp
protected QueryStream(int capacity = 24)
```

A query input stream. Declare metadata and the result contract on the concrete message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `capacity` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) |  |
