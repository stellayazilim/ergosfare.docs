---
title: "StagedPlanComposition"
description: "The pipeline composition a staged plan was baked against: the sole main handler plus the four interceptor stages as ordered type lists — exactly the merged (…"
sidebar:
  label: "StagedPlanComposition"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The pipeline composition a staged plan was baked against: the sole main handler plus
the four interceptor stages as ordered type lists — exactly the merged
(direct-first, then indirect) order the runtime pipeline would execute them in.

```csharp
public sealed class StagedPlanComposition
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedPlanComposition.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The composition is the advisory contract's comparison key: on every registry-version
rebuild the executor compares it against the live pipeline, and any difference —
a runtime-registered interceptor, a different handler, reordered stages — routes the
dispatch back through the runtime strategy. The arrays are captured as given (no
defensive copy); plans are compile-time singletons whose compositions never change.

## Constructors

### `StagedPlanComposition(Type, Type[], Type[], Type[], Type[])`

```csharp
public StagedPlanComposition(Type handlerType, Type[] preInterceptorTypes, Type[] postInterceptorTypes, Type[] exceptionInterceptorTypes, Type[] finalInterceptorTypes)
```

The pipeline composition a staged plan was baked against: the sole main handler plus
the four interceptor stages as ordered type lists — exactly the merged
(direct-first, then indirect) order the runtime pipeline would execute them in.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `preInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `postInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `exceptionInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `finalInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |

The composition is the advisory contract's comparison key: on every registry-version
rebuild the executor compares it against the live pipeline, and any difference —
a runtime-registered interceptor, a different handler, reordered stages — routes the
dispatch back through the runtime strategy. The arrays are captured as given (no
defensive copy); plans are compile-time singletons whose compositions never change.

## Properties

### `ExceptionInterceptorTypes`

```csharp
public IReadOnlyList<Type> ExceptionInterceptorTypes { get; }
```

The exception-interceptor types, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `FinalInterceptorTypes`

```csharp
public IReadOnlyList<Type> FinalInterceptorTypes { get; }
```

The final-interceptor types, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `HandlerType`

```csharp
public Type HandlerType { get; }
```

The concrete type of the pipeline's sole main handler.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `PostInterceptorTypes`

```csharp
public IReadOnlyList<Type> PostInterceptorTypes { get; }
```

The post-interceptor types, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `PreInterceptorTypes`

```csharp
public IReadOnlyList<Type> PreInterceptorTypes { get; }
```

The pre-interceptor types, in execution order.

**Returns**

`IReadOnlyList<Type>`
