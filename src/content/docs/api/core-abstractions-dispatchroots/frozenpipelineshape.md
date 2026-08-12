---
title: "FrozenPipelineShape"
description: "The six executable stage arrays FrozenComposition.BuildShape(Type, IReadOnlyList<string>) derives for one (message, group set) — the frozen mirror of the run…"
sidebar:
  label: "FrozenPipelineShape"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/api/core-abstractions-dispatchroots)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The six executable stage arrays [`FrozenComposition.BuildShape(Type, IReadOnlyList<string>)`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencomposition#buildshapetype-ireadonlyliststring) derives for
one (message, group set) — the frozen mirror of the runtime pipeline shape: main
handlers split direct/indirect, interceptor stages merged direct-segment-first.

```csharp
public sealed class FrozenPipelineShape
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/FrozenComposition.cs#L265)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `FrozenPipelineShape(Type[], Type[], Type[], Type[], Type[], Type[])`

```csharp
public FrozenPipelineShape(Type[] handlers, Type[] indirectHandlers, Type[] preInterceptors, Type[] postInterceptors, Type[] exceptionInterceptors, Type[] finalInterceptors)
```

The six executable stage arrays [`FrozenComposition.BuildShape(Type, IReadOnlyList<string>)`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencomposition#buildshapetype-ireadonlyliststring) derives for
one (message, group set) — the frozen mirror of the runtime pipeline shape: main
handlers split direct/indirect, interceptor stages merged direct-segment-first.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlers` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `indirectHandlers` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `preInterceptors` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `postInterceptors` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `exceptionInterceptors` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `finalInterceptors` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |

## Properties

### `ExceptionInterceptors`

```csharp
public IReadOnlyList<Type> ExceptionInterceptors { get; }
```

The merged exception-interceptor stage, direct segment first.

**Returns**

`IReadOnlyList<Type>`

### `FinalInterceptors`

```csharp
public IReadOnlyList<Type> FinalInterceptors { get; }
```

The merged final-interceptor stage, direct segment first.

**Returns**

`IReadOnlyList<Type>`

### `Handlers`

```csharp
public IReadOnlyList<Type> Handlers { get; }
```

The direct main-handler types, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `IndirectHandlers`

```csharp
public IReadOnlyList<Type> IndirectHandlers { get; }
```

The covariantly matched main-handler types, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `PostInterceptors`

```csharp
public IReadOnlyList<Type> PostInterceptors { get; }
```

The merged post-interceptor stage, direct segment first.

**Returns**

`IReadOnlyList<Type>`

### `PreInterceptors`

```csharp
public IReadOnlyList<Type> PreInterceptors { get; }
```

The merged pre-interceptor stage, direct segment first.

**Returns**

`IReadOnlyList<Type>`
