---
title: "IStreamHandler<TMessage, TResult>"
description: "Handles messages of type TMessage by streaming TResult items back to the caller."
sidebar:
  label: "IStreamHandler<TMessage, TResult>"
  order: 22
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Handles messages of type `TMessage` by streaming
`TResult` items back to the caller.

```csharp
public interface IStreamHandler<in TMessage, out TResult> : IHandler<TMessage, IAsyncEnumerable<TResult>>, IHandler where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IStreamHandler%5BTMessage%2CTResult%5D.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this handler accepts. |
| `TResult` | The type of each streamed item. |

## Remarks

The contract is [`IHandler<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ihandler-2) closed over
[`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1); its `Handle` is implemented explicitly here and
forwards to [`IStreamHandler<TMessage, TResult>.StreamAsync(TMessage, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/istreamhandler-2#streamasynctmessage-ergosfarecontext), so implementations only write the streaming
method. Items are produced as the caller enumerates, after the dispatch call itself has
returned.

## Methods

### `StreamAsync(TMessage, ErgosfareContext)`

```csharp
IAsyncEnumerable<out TResult> StreamAsync(TMessage message, ErgosfareContext context)
```

Streams the results of handling `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to handle. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

`IAsyncEnumerable<TResult>` — The streamed results.
