---
title: "IPipelineExecutor<TResult>"
description: "A result-producing message pipeline closed over one concrete message type; the counterpart of IPipelineExecutor."
sidebar:
  label: "IPipelineExecutor<TResult>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A result-producing message pipeline closed over one concrete message type; the
counterpart of [`IPipelineExecutor`](/ergosfare.docs/api/core-abstractions/ipipelineexecutor).

```csharp
public interface IPipelineExecutor<TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IPipelineExecutor%5BTResult%5D.cs#L7)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type the pipeline produces. |

## Methods

### `Execute(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
ValueTask<TResult> Execute(object message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups)
```

Runs the pipeline for `message` and returns the result it produced.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message to run. Its runtime type is the executor's message type, or a type derived from it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context for this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved against. |
| `groups` | `IEnumerable<string>` | The groups to run; `null` runs the default group. |

**Returns**

`ValueTask<TResult>` — The result produced for `message`.
