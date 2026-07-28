---
title: "GeneratedDispatchRoots"
description: "Process-wide store of generically instantiated dispatch roots, populated by source-generated registration code."
sidebar:
  label: "GeneratedDispatchRoots"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Process-wide store of generically instantiated dispatch roots, populated by
source-generated registration code. Each root closes a dispatch generic over a concrete
message (and result) type at compile time, letting the dispatch caches construct their
pipeline executors and invokers without [`MakeGenericType(params Type[])`](https://learn.microsoft.com/dotnet/api/system.type.makegenerictype) — and giving
Native AOT and trimming a static anchor for every instantiation, value-type messages
and results included, which shared generic code cannot cover. The reflective
`MakeGenericType` paths remain as the fallback for types without a root (open
generics, runtime-only registrations).

```csharp
public static class GeneratedDispatchRoots
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/GeneratedDispatchRoots.cs#L16)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddMessage<TMessage>()`

```csharp
public static void AddMessage<TMessage>() where TMessage : IMessage
```

Roots the void dispatch generics of a message type. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

### `AddResult<TMessage, TResult>()`

```csharp
public static void AddResult<TMessage, TResult>() where TMessage : IMessage
```

Roots the result-producing dispatch generics of a message type. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

### `AddStream<TMessage, TResult>()`

```csharp
public static void AddStream<TMessage, TResult>() where TMessage : IMessage
```

Roots the streaming dispatch generics of a message type. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

### `AddVoidPlan<TMessage, THandler>()`

```csharp
public static void AddVoidPlan<TMessage, THandler>() where TMessage : notnull, IMessage where THandler : class, IAsyncHandler<TMessage>
```

Roots a compile-time pipeline plan for a void message whose entire pipeline is a
single async handler: the dispatch executor closes over both the message and the
handler type, so the handler is invoked devirtualized — no contract pattern match.
The plan is advisory: the executor re-validates the actual pipeline against the
registry on every version change and falls back to the runtime dispatch shape
whenever the pipeline no longer matches (interceptors registered at runtime, a
different handler resolved, adapters configured). Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `THandler` |  |

### `FindMessage(Type)`

```csharp
public static MessageRoot? FindMessage(Type messageType)
```

The void dispatch root of the message type, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions/messageroot)

### `FindResult(Type, Type)`

```csharp
public static MessageResultRoot? FindResult(Type messageType, Type resultType)
```

The result dispatch root of the (message, result) pair, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions/messageresultroot)

### `FindStream(Type, Type)`

```csharp
public static MessageResultRoot? FindStream(Type messageType, Type resultType)
```

The stream dispatch root of the (message, result) pair, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions/messageresultroot)

### `FindVoidPlan(Type)`

```csharp
public static VoidPlanRoot? FindVoidPlan(Type messageType)
```

The void pipeline plan of the message type, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions/voidplanroot)
