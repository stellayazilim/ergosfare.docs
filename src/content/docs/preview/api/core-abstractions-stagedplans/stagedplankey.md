---
title: "StagedPlanKey"
description: "The pipeline composition a staged plan was baked against: the main handlers plus the four interceptor stages as ordered type lists — exactly the merged (dire…"
sidebar:
  label: "StagedPlanKey"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/preview/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The pipeline composition a staged plan was baked against: the main handlers plus the four
interceptor stages as ordered type lists — exactly the merged (direct-first, then
indirect) order the runtime pipeline would execute them in.

```csharp
public sealed class StagedPlanKey
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedPlanKey.cs#L22)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The composition is the advisory contract's comparison key: on every registry-version
rebuild the executor compares it against the live pipeline, and any difference —
a runtime-registered interceptor, a different handler, reordered stages — routes the
dispatch back through the runtime strategy. The arrays are captured as given (no
defensive copy); plans are compile-time singletons whose compositions never change.

Handlers are a list because a broadcast serves all of them. A single-handler pipeline —
every command and query plan — is the same shape with one direct handler and an empty
indirect segment, so the comparison has one implementation rather than one per family.

## Constructors

### `StagedPlanKey(Type, Type[], Type[], Type[], Type[], Type?)`

```csharp
public StagedPlanKey(Type handlerType, Type[] preInterceptorTypes, Type[] postInterceptorTypes, Type[] exceptionInterceptorTypes, Type[] finalInterceptorTypes, Type? resultAdapterType = null)
```

The single-handler composition: one directly registered handler, no covariant ones.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `preInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `postInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `exceptionInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `finalInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultAdapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

### `StagedPlanKey(Type[], Type[], Type[], Type[], Type[], Type[], Type?)`

```csharp
public StagedPlanKey(Type[] handlerTypes, Type[] indirectHandlerTypes, Type[] preInterceptorTypes, Type[] postInterceptorTypes, Type[] exceptionInterceptorTypes, Type[] finalInterceptorTypes, Type? resultAdapterType = null)
```

The general composition, carrying both handler segments. The split mirrors the
runtime's own: directly registered handlers first, then the covariantly matched ones,
each segment in its baked execution order.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `indirectHandlerTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `preInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `postInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `exceptionInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `finalInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultAdapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

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
public Type? HandlerType { get; }
```

The concrete type of the pipeline's sole main handler, or `null` when the plan
was baked against a handler list — a broadcast, where "the" handler does not exist.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `HandlerTypes`

```csharp
public IReadOnlyList<Type> HandlerTypes { get; }
```

The directly registered main handlers, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `IndirectHandlerTypes`

```csharp
public IReadOnlyList<Type> IndirectHandlerTypes { get; }
```

The covariantly matched main handlers, in execution order — handlers registered
against a base type or interface of the message. Empty for every single-handler
pipeline: a covariant main handler disqualifies those plans outright.

**Returns**

`IReadOnlyList<Type>`

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

### `ResultAdapterType`

```csharp
public Type? ResultAdapterType { get; }
```

The result-adapter type the plan's value-path branches were baked against, or
`null` when the plan models no adapter. Part of the comparison key: the
hosting executor only trusts the plan while the runtime-bound adapter of the
(message, result) slot is exactly this type — a plan emitted before an annotation
was added (or by an older generator) then falls back to the runtime strategy
instead of silently skipping the value path.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
