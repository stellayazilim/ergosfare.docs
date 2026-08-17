---
title: "IPipelineExecutor"
description: "A message pipeline closed over its concrete message type, built once per message type and cached process-wide."
sidebar:
  label: "IPipelineExecutor"
  order: 10
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A message pipeline closed over its concrete message type, built once per message type
and cached process-wide. [`IPipelineExecutor.Execute(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`](/ergosfare.docs/preview/api/core-abstractions/ipipelineexecutor#executeobject-ergosfarecontext-iserviceprovider-ienumerablestring) receives the message as
[`object`](https://learn.microsoft.com/dotnet/api/system.object) and performs a single cast to the concrete type internally, so the
handler is always invoked through its typed member — no object-typed bridge, no boxing
of the handler's [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask).

```csharp
public interface IPipelineExecutor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/IPipelineExecutor.cs#L23)

## Remarks

The group filter is a dispatch argument, not part of the executor's identity: one
executor per message type serves every filter, choosing its composition per call. The
filter used to be baked in at construction, which meant the lookup in front of this
interface had to carry the group set in its key — a second dictionary and a joined
string key on a path that already knew the message type. The publishing and streaming
tables never keyed that way; this is the same shape.

## Methods

### `Execute(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
ValueTask Execute(object message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups)
```

Executes the void pipeline for `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance; its runtime type is the executor's closed message type (or derived). |
| `context` | [`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext) | The execution context for this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope the dispatch runs in. |
| `groups` | `IEnumerable<string>` | The group filter for this dispatch, or `null` for the default pipeline. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
