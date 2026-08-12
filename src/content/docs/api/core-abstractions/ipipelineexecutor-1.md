---
title: "IPipelineExecutor<TResult>"
description: "A result-producing message pipeline closed over its concrete message type; see IPipelineExecutor."
sidebar:
  label: "IPipelineExecutor<TResult>"
  order: 11
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A result-producing message pipeline closed over its concrete message type; see
[`IPipelineExecutor`](/ergosfare.docs/api/core-abstractions/ipipelineexecutor).

```csharp
public interface IPipelineExecutor<TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IPipelineExecutor%5BTResult%5D.cs#L7)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The result type produced by the pipeline. |

## Methods

### `Execute(object, ErgosfareContext, IServiceProvider)`

```csharp
ValueTask<TResult> Execute(object message, ErgosfareContext context, IServiceProvider serviceProvider)
```

Executes the void pipeline for `message`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message instance; its runtime type is the executor's closed message type (or derived). |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context for this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope the dispatch runs in. |

**Returns**

`ValueTask<TResult>`
