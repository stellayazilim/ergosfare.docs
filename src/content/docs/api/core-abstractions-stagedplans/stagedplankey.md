---
title: "StagedPlanKey"
description: "The pipeline a staged plan was compiled against: its main handlers and its four interceptor stages, each as an ordered list of types in the order the pipelin…"
sidebar:
  label: "StagedPlanKey"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.StagedPlans`](/ergosfare.docs/api/core-abstractions-stagedplans)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The pipeline a staged plan was compiled against: its main handlers and its four
interceptor stages, each as an ordered list of types in the order the pipeline would run
them.

```csharp
public sealed class StagedPlanKey
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/StagedPlans/StagedPlanKey.cs#L20)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Registration is compared with this descriptor when the engine is initialized. Runtime
dispatch never rebuilds a pipeline; a mismatch is rejected.

The arrays are kept as given rather than copied: a plan is a compile-time singleton
whose pipeline never changes. Handlers are a list because a broadcast runs all of them;
commands and queries keep both segments as metadata while executing the winning
handler according to direct-then-covariant priority.

## Constructors

### `StagedPlanKey(Type, Type[], Type[], Type[], Type[], Type?)`

```csharp
public StagedPlanKey(Type handlerType, Type[] preInterceptorTypes, Type[] postInterceptorTypes, Type[] exceptionInterceptorTypes, Type[] finalInterceptorTypes, Type? resultAdapterType = null)
```

Initializes the key of a single-handler pipeline: one handler registered for the
message type itself, and none registered for a base type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The pipeline's only main handler. |
| `preInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The pre-interceptors, in execution order. |
| `postInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The post-interceptors, in execution order. |
| `exceptionInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The exception interceptors, in execution order. |
| `finalInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The final interceptors, in execution order. |
| `resultAdapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result adapter the plan assumed, if any. |

### `StagedPlanKey(Type[], Type[], Type[], Type[], Type[], Type[], Type?)`

```csharp
public StagedPlanKey(Type[] handlerTypes, Type[] indirectHandlerTypes, Type[] preInterceptorTypes, Type[] postInterceptorTypes, Type[] exceptionInterceptorTypes, Type[] finalInterceptorTypes, Type? resultAdapterType = null)
```

Initializes the key of any pipeline, carrying both handler segments.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The handlers registered for the message type itself, in execution order. |
| `indirectHandlerTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The handlers registered for a base type, in execution order. |
| `preInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The pre-interceptors, in execution order. |
| `postInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The post-interceptors, in execution order. |
| `exceptionInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The exception interceptors, in execution order. |
| `finalInterceptorTypes` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) | The final interceptors, in execution order. |
| `resultAdapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result adapter the plan assumed, if any. |

## Properties

### `ExceptionInterceptorTypes`

```csharp
public IReadOnlyList<Type> ExceptionInterceptorTypes { get; }
```

The exception interceptors, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `FinalInterceptorTypes`

```csharp
public IReadOnlyList<Type> FinalInterceptorTypes { get; }
```

The final interceptors, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `HandlerType`

```csharp
public Type? HandlerType { get; }
```

The pipeline's only main handler, or `null` when the plan was compiled against
a list of them — a broadcast, where there is no single handler.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `HandlerTypes`

```csharp
public IReadOnlyList<Type> HandlerTypes { get; }
```

The main handlers registered for the message type itself, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `IndirectHandlerTypes`

```csharp
public IReadOnlyList<Type> IndirectHandlerTypes { get; }
```

The main handlers registered for a base type of the message, in execution order.
Commands and queries execute this segment only when no direct handler wins.

**Returns**

`IReadOnlyList<Type>`

### `PostInterceptorTypes`

```csharp
public IReadOnlyList<Type> PostInterceptorTypes { get; }
```

The post-interceptors, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `PreInterceptorTypes`

```csharp
public IReadOnlyList<Type> PreInterceptorTypes { get; }
```

The pre-interceptors, in execution order.

**Returns**

`IReadOnlyList<Type>`

### `ResultAdapterType`

```csharp
public Type? ResultAdapterType { get; }
```

The result adapter the plan's value-path branches were compiled against, or
`null` when the plan assumed none.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

Describes the adapter embedded in the generated body. Adapter selection and
validation happen at compile time; dispatch does not resolve an adapter service.
