---
title: "IPipelineExecutor"
description: "A message pipeline closed over its concrete message type, built once per message type and cached process-wide."
sidebar:
  label: "IPipelineExecutor"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A message pipeline closed over its concrete message type, built once per message type
and cached process-wide. [`IPipelineExecutor.Execute(object, ErgosfareContext, IServiceProvider)`](/ergosfare.docs/api/core-abstractions/ipipelineexecutor#executeobject-ergosfarecontext-iserviceprovider) receives the message as
[`object`](https://learn.microsoft.com/dotnet/api/system.object) and performs a single cast to the concrete type internally, so the
handler is always invoked through its typed member — no object-typed bridge, no boxing
of the handler's [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask).

```csharp
public interface IPipelineExecutor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IPipelineExecutor.cs#L15)

## Remarks

This is the dispatch seam source-generated code will eventually implement directly;
the runtime builds executors reflectively (one generic instantiation per message type)
as the fallback.

## Methods

### `Execute(object, ErgosfareContext, IServiceProvider)`

```csharp
ValueTask Execute(object message, ErgosfareContext context, IServiceProvider serviceProvider)
```

Executes the void pipeline for `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance; its runtime type is the executor's closed message type (or derived). |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context for this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope the dispatch runs in. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
