---
title: "IStreamHandler<TMessage, TResult>"
description: "Represents a handler that streams results asynchronously for messages of type TMessage."
sidebar:
  label: "IStreamHandler<TMessage, TResult>"
  order: 22
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents a handler that streams results asynchronously for messages of type `TMessage`.
Produces an [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) to enable asynchronous streaming of multiple results.

```csharp
public interface IStreamHandler<in TMessage, out TResult> : IHandler<TMessage, IAsyncEnumerable<TResult>>, IHandler where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/Main/IStreamHandler%5BTMessage%2CTResult%5D.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of the message to handle. Must be non-nullable. |
| `TResult` | The type of each item in the streamed result. Must be non-nullable. |

## Remarks

This interface extends [`IHandler<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-handlers/ihandler-2) with `TResult`
set to [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1), allowing the handler to produce multiple results asynchronously.
The explicit interface implementation maps the generic [`IHandler<TMessage, TResult>.Handle(TMessage, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/ihandler-2#handletmessage-ergosfarecontext) method
to the strongly-typed [`IStreamHandler<TMessage, TResult>.StreamAsync(TMessage, ErgosfareContext)`](/ergosfare.docs/preview/api/core-abstractions-handlers/istreamhandler-2#streamasynctmessage-ergosfarecontext) method.

## Methods

### `StreamAsync(TMessage, ErgosfareContext)`

```csharp
IAsyncEnumerable<out TResult> StreamAsync(TMessage message, ErgosfareContext context)
```

Streams results asynchronously for a given message.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to handle. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The current execution context. |

**Returns**

`IAsyncEnumerable<TResult>` — An [`IAsyncEnumerable<T>`](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1) representing the streamed asynchronous results of the message handling.
