---
title: "IResultHandlerPlanVisitor<TReturn, TState>"
description: "Generic re-entry point for consumers of ResultHandlerPlan."
sidebar:
  label: "IResultHandlerPlanVisitor<TReturn, TState>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Generic re-entry point for consumers of [`ResultHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resulthandlerplan).

```csharp
public interface IResultHandlerPlanVisitor<out TReturn, in TState>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/IResultHandlerPlanVisitor.cs#L4)

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
