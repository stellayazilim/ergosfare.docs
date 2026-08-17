---
title: "GeneratedDispatchRoots"
description: "Process-wide store of generically instantiated dispatch roots, populated by source-generated registration code."
sidebar:
  label: "GeneratedDispatchRoots"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots)  
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

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchRoots/GeneratedDispatchRoots.cs#L17)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### `FrozenCompositionEntries`

```csharp
public static IEnumerable<FrozenComposition> FrozenCompositionEntries { get; }
```

Every compiled table entry. The one enumeration the table offers, and only for
setup-time questions a per-message lookup cannot answer — chiefly "which
participant types exist at all", which container registration intersects with its
own selection to decide what to register for resolution.

**Returns**

`IEnumerable<FrozenComposition>`

## Methods

### `AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent>, string[])`

```csharp
public static void AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent> plan, string[] groups) where TEvent : notnull
```

Group-keyed counterpart of the broadcast plan; see the void overload. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedBroadcastPlan<TEvent>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

### `AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent>)`

```csharp
public static void AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent> plan) where TEvent : notnull
```

Roots a staged pipeline plan for a broadcast. Its own store rather than a shape of the
void one: a publish asks here and a send asks there, so which store answered settles
the delivery difference and nothing has to branch on the message.
Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedBroadcastPlan<TEvent>` |  |

### `AddFilteredBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent>)`

```csharp
public static void AddFilteredBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent> plan) where TEvent : notnull
```

Broadcast counterpart of [`GeneratedDispatchRoots.AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage>)`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addfilteredplantmessagestagedvoidplantmessage). Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedBroadcastPlan<TEvent>` |  |

### `AddFilteredPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult>)`

```csharp
public static void AddFilteredPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult> plan) where TMessage : IMessage
```

Result-producing counterpart of [`GeneratedDispatchRoots.AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage>)`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addfilteredplantmessagestagedvoidplantmessage). Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedResultPlan<TMessage, TResult>` |  |

### `AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage>)`

```csharp
public static void AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage> plan) where TMessage : IMessage
```

Roots the plan that serves dispatches whose group filter is a runtime value: one body
carrying every participant, each call guarded by its own group test. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedVoidPlan<TMessage>` |  |

### `AddFrozenComposition(FrozenComposition)`

```csharp
public static void AddFrozenComposition(FrozenComposition composition)
```

Roots a message's frozen pipeline composition — the pipeline shape produced at
compile time. Generated module initializers populate the process-wide table as
assemblies load; each entry is immutable after publication. Idempotent.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `composition` | [`FrozenComposition`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozencomposition) |  |

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
public static void AddResultPlan<TMessage, TResult, THandler>() where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

Result-producing counterpart of [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addvoidplantmessage-thandler):
roots a compile-time pipeline plan for a message whose entire pipeline is a single
async result handler, so the dispatch executor invokes it devirtualized. The plan
is advisory and validated against the container's selected frozen composition,
exactly like the void plan.
Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |
| `THandler` |  |

### `AddResultPlan<TMessage, TResult, THandler>(Func<IServiceProvider, THandler>)`

```csharp
public static void AddResultPlan<TMessage, TResult, THandler>(Func<IServiceProvider, THandler> directHandlerFactory) where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

Variant of [`GeneratedDispatchRoots.AddResultPlan<TMessage, TResult, THandler>()`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addresultplantmessage-tresult-thandler) carrying the
compile-time construction path for handlers with constructor dependencies; see
[`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>(Func<IServiceProvider, THandler>)`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addvoidplantmessage-thandlerfunciserviceprovider-thandler) for
the contract. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |
| `THandler` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `directHandlerFactory` | `Func<IServiceProvider, THandler>` |  |

### `AddResultPlan<TMessage, TResult, THandler>(Func<THandler>)`

```csharp
public static void AddResultPlan<TMessage, TResult, THandler>(Func<THandler> directHandlerFactory) where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage, TResult>
```

Variant of [`GeneratedDispatchRoots.AddResultPlan<TMessage, TResult, THandler>()`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addresultplantmessage-tresult-thandler) carrying the
compile-time handler construction path; see
[`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>(Func<THandler>)`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addvoidplantmessage-thandlerfuncthandler) for the contract.
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

### `AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult>, string[])`

```csharp
public static void AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult> plan, string[] groups) where TMessage : IMessage
```

Group-keyed counterpart of the result plan; see the void overload. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedResultPlan<TMessage, TResult>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

### `AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult>)`

```csharp
public static void AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult> plan) where TMessage : IMessage
```

Result-producing counterpart of [`GeneratedDispatchRoots.AddStagedPlan<TMessage>(StagedVoidPlan<TMessage>)`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addstagedplantmessagestagedvoidplantmessage). Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `TResult` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedResultPlan<TMessage, TResult>` |  |

### `AddStagedPlan<TMessage>(StagedVoidPlan<TMessage>, string[])`

```csharp
public static void AddStagedPlan<TMessage>(StagedVoidPlan<TMessage> plan, string[] groups) where TMessage : IMessage
```

Group-keyed counterpart: the plan of the same message under one filter. A dispatch
names a group set, and the set is part of what decides the pipeline — so it is part
of what keys the plan, exactly like the message type. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedVoidPlan<TMessage>` |  |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

### `AddStagedPlan<TMessage>(StagedVoidPlan<TMessage>)`

```csharp
public static void AddStagedPlan<TMessage>(StagedVoidPlan<TMessage> plan) where TMessage : IMessage
```

Roots a staged pipeline plan for a void message whose pipeline carries interceptor
stages: bespoke straight-line code for the whole pipeline, replacing the runtime
strategy's generic machinery. Advisory exactly like the single-handler plans — the
hosting executor validates the plan's [`StagedPlanKey`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedplankey) against
the container's selected frozen composition and falls back to the general strategy
on any mismatch.
Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedVoidPlan<TMessage>` |  |

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
public static void AddVoidPlan<TMessage, THandler>() where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage>
```

Roots a compile-time pipeline plan for a void message whose entire pipeline is a
single async handler: the dispatch executor closes over both the message and the
handler type, so the handler is invoked devirtualized — no contract pattern match.
The plan is advisory: the executor validates it against the container's selected
frozen composition and falls back to the general dispatch shape whenever the
composition does not match. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `THandler` |  |

### `AddVoidPlan<TMessage, THandler>(Func<IServiceProvider, THandler>)`

```csharp
public static void AddVoidPlan<TMessage, THandler>(Func<IServiceProvider, THandler> directHandlerFactory) where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage>
```

Variant of [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addvoidplantmessage-thandler) carrying a compile-time
construction path for handlers with constructor dependencies: the generator emits
`static provider => new THandler(provider.GetRequiredService<TDep>(), ...)`
for handlers whose single public constructor takes only plain (or
`[FromKeyedServices]`) service parameters — the one shape where the container's
own constructor selection and the emitted construction provably coincide. The same
advisory contract applies: the executor uses the factory only after verifying the
handler's DI registration is the module's own plain transient one, and the
dependencies resolve from the dispatching scope's provider exactly as container
activation would resolve them. Idempotent.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` |  |
| `THandler` |  |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `directHandlerFactory` | `Func<IServiceProvider, THandler>` |  |

### `AddVoidPlan<TMessage, THandler>(Func<THandler>)`

```csharp
public static void AddVoidPlan<TMessage, THandler>(Func<THandler> directHandlerFactory) where TMessage : IMessage where THandler : class, IAsyncHandler<TMessage>
```

Variant of [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addvoidplantmessage-thandler) carrying a compile-time
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

### `FindBroadcastPlan(Type, IReadOnlyList<string>)`

```csharp
public static StagedBroadcastPlan? FindBroadcastPlan(Type messageType, IReadOnlyList<string> groups)
```

The broadcast plan for a filtered publish, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `groups` | `IReadOnlyList<string>` |  |

**Returns**

[`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

### `FindBroadcastPlan(Type)`

```csharp
public static StagedBroadcastPlan? FindBroadcastPlan(Type messageType)
```

The broadcast plan of the message type's default pipeline, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

### `FindFilteredBroadcastPlan(Type)`

```csharp
public static StagedBroadcastPlan? FindFilteredBroadcastPlan(Type messageType)
```

The group-filtering broadcast plan, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

### `FindFilteredResultPlan(Type, Type)`

```csharp
public static StagedResultPlan? FindFilteredResultPlan(Type messageType, Type resultType)
```

The group-filtering result plan, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

### `FindFilteredVoidPlan(Type)`

```csharp
public static StagedVoidPlan? FindFilteredVoidPlan(Type messageType)
```

The group-filtering void plan, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan)

### `FindFrozenComposition(Type)`

```csharp
public static FrozenComposition? FindFrozenComposition(Type messageType)
```

The frozen composition serving a runtime message type. An exact entry wins; on a
miss the type's ancestor chain is walked and the nearest frozen entry serves it —
how runtime-generated subtypes (EF/Castle proxies, mocks) are served without any
registry — with the outcome cached per runtime type, misses included. A type whose
whole ancestor chain is foreign resolves to `null`: the caller's
no-handler guard, the one deliberately remaining corner.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`FrozenComposition`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/frozencomposition)

Generic runtime types normalize to their definitions, mirroring the runtime
message-resolve strategy. The ladder cache assumes the load-time-append contract:
entries appended after a type's first miss resolution are not re-consulted for it.

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

[`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot)

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

[`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot)

### `FindResultPlan(Type, Type)`

```csharp
public static ResultHandlerPlan? FindResultPlan(Type messageType, Type resultType)
```

The result pipeline plan of the (message, result) pair, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`ResultHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resulthandlerplan)

### `FindStagedResultPlan(Type, Type, IReadOnlyList<string>)`

```csharp
public static StagedResultPlan? FindStagedResultPlan(Type messageType, Type resultType, IReadOnlyList<string> groups)
```

The staged result plan for a filtered dispatch, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `groups` | `IReadOnlyList<string>` |  |

**Returns**

[`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

### `FindStagedResultPlan(Type, Type)`

```csharp
public static StagedResultPlan? FindStagedResultPlan(Type messageType, Type resultType)
```

The staged result plan of the (message, result) pair, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

### `FindStagedVoidPlan(Type, IReadOnlyList<string>)`

```csharp
public static StagedVoidPlan? FindStagedVoidPlan(Type messageType, IReadOnlyList<string> groups)
```

The staged void plan for a filtered dispatch, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |
| `groups` | `IReadOnlyList<string>` |  |

**Returns**

[`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan)

### `FindStagedVoidPlan(Type)`

```csharp
public static StagedVoidPlan? FindStagedVoidPlan(Type messageType)
```

The staged void plan of the message type's default pipeline, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan)

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

[`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot)

### `FindVoidPlan(Type)`

```csharp
public static VoidHandlerPlan? FindVoidPlan(Type messageType)
```

The void pipeline plan of the message type, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

**Returns**

[`VoidHandlerPlan`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidhandlerplan)
