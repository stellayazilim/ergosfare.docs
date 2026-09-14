---
title: "IPipelineExecutor"
description: "A void message pipeline closed over one concrete message type, built once for that type and reused for every dispatch of it."
sidebar:
  label: "IPipelineExecutor"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A void message pipeline closed over one concrete message type, built once for that type
and reused for every dispatch of it.

```csharp
public interface IPipelineExecutor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IPipelineExecutor.cs#L11)

## Remarks

The group filter is a per-call argument rather than part of the executor's identity: a
single executor serves every filter and selects the matching composition on each call.

## Methods

### `Execute(object, ErgosfareContext, IServiceProvider, IEnumerable<string>?)`

```csharp
ValueTask Execute(object message, ErgosfareContext context, IServiceProvider serviceProvider, IEnumerable<string>? groups)
```

Runs the pipeline for `message` and completes once every
participant has run.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message to run. Its runtime type is the executor's message type, or a type derived from it. |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) | The execution context for this dispatch. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider participants are resolved against. |
| `groups` | `IEnumerable<string>` | The groups to run; `null` runs the default group. |

**Returns**

[`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
