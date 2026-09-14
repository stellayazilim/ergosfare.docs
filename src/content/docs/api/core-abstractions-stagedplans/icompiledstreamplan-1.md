---
title: "ICompiledStreamPlan<TResult>"
description: "An executable generated streaming plan, without a runtime dispatch wrapper."
sidebar:
  label: "ICompiledStreamPlan<TResult>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

An executable generated streaming plan, without a runtime dispatch wrapper.

```csharp
public interface ICompiledStreamPlan<TResult> : ICompiledPlan
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/ICompiledPlan.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The streamed item type. |

## Methods

### `Execute(object, ErgosfareContext, IServiceProvider, CancellationToken)`

```csharp
IAsyncEnumerable<TResult> Execute(object message, ErgosfareContext context, IServiceProvider serviceProvider, CancellationToken cancellationToken)
```

Runs the generated iterator against the caller's scope.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) |  |
| `context` | [`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext) |  |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

**Returns**

`IAsyncEnumerable<TResult>`
