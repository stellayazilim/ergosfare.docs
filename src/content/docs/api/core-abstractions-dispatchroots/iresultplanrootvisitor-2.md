---
title: "IResultPlanRootVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of ResultPlanRoot."
sidebar:
  label: "IResultPlanRootVisitor<TReturn, TState>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`ResultPlanRoot`](/ergosfare.docs/api/core-abstractions-dispatchroots/resultplanroot).

```csharp
public interface IResultPlanRootVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/IResultPlanRootVisitor.cs#L4)

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

## Methods

### `Visit<TMessage, TResult, THandler>(TState)`

```csharp
TReturn Visit<TMessage, TResult, THandler>(TState state) where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

Called with the plan's message, result and handler types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |
| `THandler` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `state` | `TState` |  |

**Returns**

`TReturn`
