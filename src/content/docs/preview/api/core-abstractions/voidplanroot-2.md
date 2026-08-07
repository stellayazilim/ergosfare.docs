---
title: "VoidPlanRoot<TMessage, THandler>"
description: "The concrete closure of VoidPlanRoot; instantiated by generated code."
sidebar:
  label: "VoidPlanRoot<TMessage, THandler>"
  order: 26
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The concrete closure of [`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions/voidplanroot); instantiated by generated code.

```csharp
public sealed class VoidPlanRoot<TMessage, THandler> : VoidPlanRoot where TMessage : notnull, IMessage where THandler : class, IAsyncHandler<TMessage>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L180)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `THandler` |  |

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions/voidplanroot)

## Constructors

### `VoidPlanRoot()`

```csharp
public VoidPlanRoot()
```

Creates a plan without a compile-time construction path.

## Methods

### `Accept<TReturn, TState>(IVoidPlanRootVisitor<TReturn, TState>, TState)`

```csharp
public override TReturn Accept<TReturn, TState>(IVoidPlanRootVisitor<TReturn, TState> visitor, TState state)
```

Invokes the visitor with this plan's message and handler types as the generic arguments.

**Type parameters**

| Name | Description |
| --- | --- |
| `TReturn` |  |
| `TState` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `visitor` | `IVoidPlanRootVisitor<TReturn, TState>` |  |
| `state` | `TState` |  |

**Returns**

`TReturn`
