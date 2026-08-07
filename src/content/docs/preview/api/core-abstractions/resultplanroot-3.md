---
title: "ResultPlanRoot<TMessage, TResult, THandler>"
description: "The concrete closure of ResultPlanRoot; instantiated by generated code."
sidebar:
  label: "ResultPlanRoot<TMessage, TResult, THandler>"
  order: 24
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`ResultPlanRoot`](/ergosfare.docs/preview/api/core-abstractions/resultplanroot); instantiated by generated code.

```csharp
public sealed class ResultPlanRoot<TMessage, TResult, THandler> : ResultPlanRoot where TMessage : notnull, IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L225)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |
| `THandler` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`ResultPlanRoot`](/ergosfare.docs/preview/api/core-abstractions/resultplanroot)

## Constructors

### `ResultPlanRoot()`

```csharp
public ResultPlanRoot()
```

Creates a plan without a compile-time construction path.

## Methods

### `Accept<TReturn, TState>(IResultPlanRootVisitor<TReturn, TState>, TState)`

```csharp
public override TReturn Accept<TReturn, TState>(IResultPlanRootVisitor<TReturn, TState> visitor, TState state)
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
| `visitor` | `IResultPlanRootVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
