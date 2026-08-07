---
title: "VoidPlanRoot"
description: "A compile-time pipeline plan closed over a void message and its sole async handler; see GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>() and MessageR…"
sidebar:
  label: "VoidPlanRoot"
  order: 25
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A compile-time pipeline plan closed over a void message and its sole async handler;
see [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/api/core-abstractions/generateddispatchroots#addvoidplantmessage-thandler) and
[`MessageRoot`](/ergosfare.docs/api/core-abstractions/messageroot) for the visitor re-entry pattern.

```csharp
public abstract class VoidPlanRoot
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L166)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Derived:** [`VoidPlanRoot<TMessage, THandler>`](/ergosfare.docs/api/core-abstractions/voidplanroot-2)

## Methods

### `Accept<TReturn, TState>(IVoidPlanRootVisitor<TReturn, TState>, TState)`

```csharp
public abstract TReturn Accept<TReturn, TState>(IVoidPlanRootVisitor<TReturn, TState> visitor, TState state)
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
