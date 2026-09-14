---
title: "CommandStream<TChunk, TSelf>"
description: "A command input stream."
sidebar:
  label: "CommandStream<TChunk, TSelf>"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Commands.Abstractions.Streaming`](/ergosfare.docs/preview/api/commands-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Commands.Abstractions.dll`

A command input stream. Declare metadata as properties on the concrete message.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP003")]
public abstract class CommandStream<TChunk, TSelf> : StreamInput<TChunk, TSelf>, IAsyncDisposable, IAsyncEnumerable<TChunk>, IBufferWriter<TChunk>, ICommand, IMessage where TSelf : CommandStream<TChunk, TSelf>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Commands.Abstractions/Streaming/CommandStream.cs#L9)

**Type parameters**

| Name | Description |
| --- | --- |
| `TChunk` | The buffered item type. |
| `TSelf` | The concrete message type. |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ErgosfareStream`](/ergosfare.docs/preview/api/core-abstractions-streaming/ergosfarestream), `ErgosfareStream<TChunk>`, `StreamInput<TChunk, TSelf>`

**Implements:** [`IAsyncDisposable`](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable), `IAsyncEnumerable<TChunk>`, `IBufferWriter<TChunk>`, [`ICommand`](/ergosfare.docs/preview/api/commands-abstractions/icommand), [`IMessage`](/ergosfare.docs/preview/api/core-abstractions/imessage)

## Constructors

### `CommandStream(int)`

```csharp
protected CommandStream(int capacity = 24)
```

A command input stream. Declare metadata as properties on the concrete message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `capacity` | [`int`](https://learn.microsoft.com/dotnet/api/system.int32) |  |
