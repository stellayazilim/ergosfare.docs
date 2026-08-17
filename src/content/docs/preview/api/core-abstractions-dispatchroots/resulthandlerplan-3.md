---
title: "ResultHandlerPlan<TMessage, TResult, THandler>"
description: "The concrete closure of ResultHandlerPlan; instantiated by generated code."
sidebar:
  label: "ResultHandlerPlan<TMessage, TResult, THandler>"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`ResultHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resulthandlerplan); instantiated by generated code.

```csharp
public sealed class ResultHandlerPlan<TMessage, TResult, THandler> : ResultHandlerPlan where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/ResultHandlerPlan%5BTMessage%2CTResult%2CTHandler%5D.cs#L5)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |
| `THandler` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ResultHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resulthandlerplan)

## Constructors

### `ResultHandlerPlan()`

```csharp
public ResultHandlerPlan()
```

Creates a plan without a compile-time construction path.

## Methods

### `Accept<TReturn, TState>(IResultHandlerPlanVisitor<TReturn, TState>, TState)`

```csharp
public override TReturn Accept<TReturn, TState>(IResultHandlerPlanVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this plan's message, result and handler types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IResultHandlerPlanVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
