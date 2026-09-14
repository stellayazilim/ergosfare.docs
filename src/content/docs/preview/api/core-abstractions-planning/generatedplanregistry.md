---
title: "GeneratedPlanRegistry"
description: "The process-wide store of executable generated plans and registration descriptors."
sidebar:
  label: "GeneratedPlanRegistry"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Planning`](/ergosfare.docs/preview/api/core-abstractions-planning)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The process-wide store of executable generated plans and registration descriptors.
Generated registration code fills it as assemblies load.

```csharp
public static class GeneratedPlanRegistry
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Planning/GeneratedPlanRegistry.cs#L16)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

Generated plans implement their execution contracts directly, including their closed
generic types. Registration stores those plan instances without building an executor.
A dispatch without an executable generated plan fails; there is no reflective fallback.

## Properties

### `PipelineDescriptorEntries`

```csharp
public static IEnumerable<PipelineDescriptor> PipelineDescriptorEntries { get; }
```

Every composition in the table.

**Returns**

`IEnumerable<PipelineDescriptor>`

The only enumeration offered, and meant for setup-time questions a per-message
lookup cannot answer — chiefly which participant types exist at all, which container
registration intersects with its own selection.

## Methods

### `AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent>, string[])`

```csharp
public static void AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent> plan, string[] groups) where TEvent : notnull
```

Roots a broadcast plan for one group set; see the ungrouped overload. Repeated calls
do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event the plan serves. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedBroadcastPlan<TEvent>` | The generated plan. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The groups the plan was compiled for. |

### `AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent>)`

```csharp
public static void AddBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent> plan) where TEvent : notnull
```

Roots a staged plan for a broadcast. Repeated calls do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event the plan serves. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedBroadcastPlan<TEvent>` | The generated plan. |

Broadcast plans have their own store rather than sharing the void one: a publish
looks here and a send looks there, so which store answered already settles how
delivery differs.

### `AddFilteredBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent>)`

```csharp
public static void AddFilteredBroadcastPlan<TEvent>(StagedBroadcastPlan<TEvent> plan) where TEvent : notnull
```

Roots the group-filtering plan for a broadcast; see
[`GeneratedPlanRegistry.AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage>)`](/ergosfare.docs/preview/api/core-abstractions-planning/generatedplanregistry#addfilteredplantmessagestagedvoidplantmessage). Repeated calls do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TEvent` | The event the plan serves. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedBroadcastPlan<TEvent>` | The generated plan. |

### `AddFilteredPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult>)`

```csharp
public static void AddFilteredPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult> plan) where TMessage : IMessage
```

Roots the group-filtering plan for a result-producing message; see
[`GeneratedPlanRegistry.AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage>)`](/ergosfare.docs/preview/api/core-abstractions-planning/generatedplanregistry#addfilteredplantmessagestagedvoidplantmessage). Repeated calls do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message the plan serves. |
| `TResult` | The result the pipeline produces. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedResultPlan<TMessage, TResult>` | The generated plan. |

### `AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage>)`

```csharp
public static void AddFilteredPlan<TMessage>(StagedVoidPlan<TMessage> plan) where TMessage : IMessage
```

Roots the plan that serves dispatches whose group filter is only known at runtime:
one body holding every participant, each call guarded by its own group test.
Repeated calls do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message the plan serves. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedVoidPlan<TMessage>` | The generated plan. |

### `AddGeneratedSelection(byte, string, Type[])`

```csharp
public static void AddGeneratedSelection(byte module, string pattern, Type[] types)
```

Stores the exact participant selection emitted for a source declaration.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `module` | [`byte`](https://learn.microsoft.com/dotnet/api/system.byte) |  |
| `pattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `types` | [`Type[]`](https://learn.microsoft.com/dotnet/api/system.type) |  |

### `AddPipelineDescriptor(PipelineDescriptor)`

```csharp
public static void AddPipelineDescriptor(PipelineDescriptor composition)
```

Roots a message's compiled pipeline composition. Generated module initializers call
this as assemblies load, and an entry never changes afterwards. Repeated calls do
nothing.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `composition` | [`PipelineDescriptor`](/ergosfare.docs/preview/api/core-abstractions-planning/pipelinedescriptor) | The composition to add. |

### `AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult>, string[])`

```csharp
public static void AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult> plan, string[] groups) where TMessage : IMessage
```

Roots a staged result plan for one group set; see the void overload. Repeated calls
do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message the plan serves. |
| `TResult` | The result the pipeline produces. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedResultPlan<TMessage, TResult>` | The generated plan. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The groups the plan was compiled for. |

### `AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult>)`

```csharp
public static void AddStagedPlan<TMessage, TResult>(StagedResultPlan<TMessage, TResult> plan) where TMessage : IMessage
```

Roots a staged plan for a result-producing message. Repeated calls do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message the plan serves. |
| `TResult` | The result the pipeline produces. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedResultPlan<TMessage, TResult>` | The generated plan. |

### `AddStagedPlan<TMessage>(StagedVoidPlan<TMessage>, string[])`

```csharp
public static void AddStagedPlan<TMessage>(StagedVoidPlan<TMessage> plan, string[] groups) where TMessage : IMessage
```

Roots a staged void plan for one group set. Repeated calls do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message the plan serves. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedVoidPlan<TMessage>` | The generated plan. |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) | The groups the plan was compiled for. |

The requested groups help decide which participants run, so they are part of what
identifies a plan, just as the message type is.

### `AddStagedPlan<TMessage>(StagedVoidPlan<TMessage>)`

```csharp
public static void AddStagedPlan<TMessage>(StagedVoidPlan<TMessage> plan) where TMessage : IMessage
```

Roots a staged plan for a void message whose pipeline has interceptor stages: the
whole pipeline as straight-line generated code. Repeated calls do nothing.

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The message the plan serves. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedVoidPlan<TMessage>` | The generated plan. |

Registration binds a plan only when its descriptor matches the selected composition.
An incompatible plan causes dispatch to fail; no alternative pipeline is built.

### `AddStreamPlan<TQuery, TResult>(StagedStreamPlan<TQuery, TResult>)`

```csharp
public static void AddStreamPlan<TQuery, TResult>(StagedStreamPlan<TQuery, TResult> plan) where TQuery : notnull
```

Registers the staged stream plan of a (query, item) pair.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The streaming query the plan serves. |
| `TResult` | The type of the items it streams. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `plan` | `StagedStreamPlan<TQuery, TResult>` | The generated plan. |

### `ApplyGeneratedSelection(DispatchPlanCatalog, byte, string)`

```csharp
public static void ApplyGeneratedSelection(DispatchPlanCatalog catalog, byte module, string pattern)
```

Applies an existing compiled selection during container configuration.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `catalog` | [`DispatchPlanCatalog`](/ergosfare.docs/preview/api/core-abstractions-planning/dispatchplancatalog) |  |
| `module` | [`byte`](https://learn.microsoft.com/dotnet/api/system.byte) |  |
| `pattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

### `FindBroadcastPlan(Type, IReadOnlyList<string>)`

```csharp
public static StagedBroadcastPlan? FindBroadcastPlan(Type messageType, IReadOnlyList<string> groups)
```

Returns the broadcast plan for a group set, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The event type to look up. |
| `groups` | `IReadOnlyList<string>` | The groups the publish asked for. |

**Returns**

[`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

### `FindBroadcastPlan(Type)`

```csharp
public static StagedBroadcastPlan? FindBroadcastPlan(Type messageType)
```

Returns the broadcast plan for the event's default pipeline, or `null` when
none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The event type to look up. |

**Returns**

[`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

### `FindFilteredBroadcastPlan(Type)`

```csharp
public static StagedBroadcastPlan? FindFilteredBroadcastPlan(Type messageType)
```

Returns the group-filtering broadcast plan, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The event type to look up. |

**Returns**

[`StagedBroadcastPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedbroadcastplan)

### `FindFilteredResultPlan(Type, Type)`

```csharp
public static StagedResultPlan? FindFilteredResultPlan(Type messageType, Type resultType)
```

Returns the group-filtering result plan, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type to look up. |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result type to look up. |

**Returns**

[`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

### `FindFilteredVoidPlan(Type)`

```csharp
public static StagedVoidPlan? FindFilteredVoidPlan(Type messageType)
```

Returns the group-filtering void plan, or `null` when none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type to look up. |

**Returns**

[`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan)

### `FindPipelineDescriptor(Type)`

```csharp
public static PipelineDescriptor? FindPipelineDescriptor(Type messageType)
```

Returns the composition serving a runtime message type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The dispatched message's runtime type. |

**Returns**

[`PipelineDescriptor`](/ergosfare.docs/preview/api/core-abstractions-planning/pipelinedescriptor) — The exact entry when there is one; otherwise the nearest entry up the type's ancestor chain, which is how runtime-generated subtypes such as ORM proxies and mocks are served. `null` when no ancestor has an entry either.

Closed generic entries take priority over generic-definition metadata. Outcomes are cached
per runtime type, misses included, so an entry added after a type was first resolved
is not picked up for that type — which holds because entries are only added as
assemblies load.

### `FindStagedResultPlan(Type, Type, IReadOnlyList<string>)`

```csharp
public static StagedResultPlan? FindStagedResultPlan(Type messageType, Type resultType, IReadOnlyList<string> groups)
```

Returns the staged result plan for a group set, or `null` when none was
generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type to look up. |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result type to look up. |
| `groups` | `IReadOnlyList<string>` | The groups the dispatch asked for. |

**Returns**

[`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

### `FindStagedResultPlan(Type, Type)`

```csharp
public static StagedResultPlan? FindStagedResultPlan(Type messageType, Type resultType)
```

Returns the staged result plan for the pair's default pipeline, or `null` when
none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type to look up. |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result type to look up. |

**Returns**

[`StagedResultPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedresultplan)

### `FindStagedStreamPlan(Type, Type)`

```csharp
public static StagedStreamPlan? FindStagedStreamPlan(Type messageType, Type resultType)
```

Returns the staged stream plan of a (query, item) pair, or `null` when none was
generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The query type to look up. |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The item type to look up. |

**Returns**

[`StagedStreamPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedstreamplan)

### `FindStagedVoidPlan(Type, IReadOnlyList<string>)`

```csharp
public static StagedVoidPlan? FindStagedVoidPlan(Type messageType, IReadOnlyList<string> groups)
```

Returns the staged void plan for a group set, or `null` when none was
generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type to look up. |
| `groups` | `IReadOnlyList<string>` | The groups the dispatch asked for. |

**Returns**

[`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan)

### `FindStagedVoidPlan(Type)`

```csharp
public static StagedVoidPlan? FindStagedVoidPlan(Type messageType)
```

Returns the staged void plan for the message's default pipeline, or `null` when
none was generated.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type to look up. |

**Returns**

[`StagedVoidPlan`](/ergosfare.docs/preview/api/core-abstractions-stagedplans/stagedvoidplan)
