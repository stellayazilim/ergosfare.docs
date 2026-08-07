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

### `AddResultPlan<TMessage, TResult, THandler>()`

```csharp
public static void AddResultPlan<TMessage, TResult, THandler>() where TMessage : notnull, IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

Result-producing counterpart of [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/preview/api/core-abstractions/generateddispatchroots#addvoidplantmessage-thandler):
roots a compile-time pipeline plan for a message whose entire pipeline is a single
async result handler, so the dispatch executor invokes it devirtualized. The plan
is advisory and re-validated per registry version exactly like the void plan.
Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |
| `THandler` |  |

### `AddResultPlan<TMessage, TResult, THandler>(Func<THandler>)`

```csharp
public static void AddResultPlan<TMessage, TResult, THandler>(Func<THandler> directHandlerFactory) where TMessage : notnull, IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

Variant of [`GeneratedDispatchRoots.AddResultPlan<TMessage, TResult, THandler>()`](/ergosfare.docs/preview/api/core-abstractions/generateddispatchroots#addresultplantmessage-tresult-thandler) carrying the
compile-time handler construction path; see
[`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>(Func<THandler>)`](/ergosfare.docs/preview/api/core-abstractions/generateddispatchroots#addvoidplantmessage-thandlerfuncthandler) for the contract.
Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |
| `THandler` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `directHandlerFactory` | `Func<THandler>` |  |

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

### `AddVoidPlan<TMessage, THandler>(Func<THandler>)`

```csharp
public static void AddVoidPlan<TMessage, THandler>(Func<THandler> directHandlerFactory) where TMessage : notnull, IMessage where THandler : class, IAsyncHandler<TMessage>
```

Variant of [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/preview/api/core-abstractions/generateddispatchroots#addvoidplantmessage-thandler) carrying a compile-time
construction path for the handler: the generator emits
`static () => new THandler()` for handlers with an accessible parameterless
constructor that are not disposable. The factory is advisory like the plan itself —
the executor uses it only after verifying at runtime that the handler's DI
registration is the module's own plain transient one (no user factory, no lifetime
override, not memoized), where container resolution and direct construction are
semantically identical. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `THandler` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `directHandlerFactory` | `Func<THandler>` |  |

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

### `FindResultPlan(Type, Type)`

```csharp
public static ResultPlanRoot? FindResultPlan(Type messageType, Type resultType)
```

The result pipeline plan of the (message, result) pair, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`ResultPlanRoot`](/ergosfare.docs/preview/api/core-abstractions/resultplanroot)

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
