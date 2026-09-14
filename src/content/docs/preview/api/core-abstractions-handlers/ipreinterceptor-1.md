---
title: "IPreInterceptor<TMessage>"
description: "Runs before the main handler of a TMessage and decides what the rest of the pipeline sees."
sidebar:
  label: "IPreInterceptor<TMessage>"
  order: 21
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/preview/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runs before the main handler of a `TMessage` and decides what the
rest of the pipeline sees.

```csharp
public interface IPreInterceptor<in TMessage> : IPreInterceptor where TMessage : notnull
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Handlers/PreInterceptors/IPreInterceptor%5BTMessage%5D.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message type this interceptor accepts. |

## Remarks

Use this to inspect, validate or replace a message. Implement
[`IAsyncPreInterceptor<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-handlers/iasyncpreinterceptor-1) instead when the work involves awaiting;
the two are separate contracts and an interceptor implements one of them.

## Methods

### `Handle(TMessage, ErgosfareContext)`

```csharp
object Handle(TMessage message, ErgosfareContext context)
```

Processes `message` before it reaches the main handler.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message as the previous stage left it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context of this dispatch. |

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object) — The message the rest of the pipeline receives — either `message` or a replacement. The returned value must be a `TMessage`; the pipeline casts it before passing it on.
