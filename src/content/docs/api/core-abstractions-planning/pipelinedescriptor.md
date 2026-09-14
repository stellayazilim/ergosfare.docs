---
title: "PipelineDescriptor"
description: "Runtime metadata describing a generated pipeline's participants, groups and ordering."
sidebar:
  label: "PipelineDescriptor"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Planning`](/ergosfare.docs/api/core-abstractions-planning)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Runtime metadata describing a generated pipeline's participants, groups and ordering.
The two handler segments and four interceptor stages distinguish direct and indirect
participants. Execution belongs to the separately generated plan.

```csharp
public sealed class PipelineDescriptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Planning/PipelineDescriptor.cs#L94)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

One descriptor is emitted per message type. Executable plans are generated separately;
this metadata supports registration binding and failure diagnostics only.

## Constructors

### `PipelineDescriptor(Type, FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[], FrozenParticipant[])`

```csharp
public PipelineDescriptor(Type messageType, FrozenParticipant[] handlers, FrozenParticipant[] indirectHandlers, FrozenParticipant[] preInterceptors, FrozenParticipant[] indirectPreInterceptors, FrozenParticipant[] postInterceptors, FrozenParticipant[] indirectPostInterceptors, FrozenParticipant[] exceptionInterceptors, FrozenParticipant[] indirectExceptionInterceptors, FrozenParticipant[] finalInterceptors, FrozenParticipant[] indirectFinalInterceptors)
```

Runtime metadata describing a generated pipeline's participants, groups and ordering.
The two handler segments and four interceptor stages distinguish direct and indirect
participants. Execution belongs to the separately generated plan.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type this composition was compiled for. |
| `handlers` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The main handlers registered for the message type itself. |
| `indirectHandlers` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The main handlers registered for a base type. |
| `preInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The direct pre-interceptors. |
| `indirectPreInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The covariantly matched pre-interceptors. |
| `postInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The direct post-interceptors. |
| `indirectPostInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The covariantly matched post-interceptors. |
| `exceptionInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The direct exception interceptors. |
| `indirectExceptionInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The covariantly matched exception interceptors. |
| `finalInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The direct final interceptors. |
| `indirectFinalInterceptors` | [`FrozenParticipant[]`](Stella.Ergosfare.Core.Abstractions.Planning.FrozenParticipant.html) | The covariantly matched final interceptors. |

One descriptor is emitted per message type. Executable plans are generated separately;
this metadata supports registration binding and failure diagnostics only.

## Properties

### `ExceptionInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> ExceptionInterceptors { get; }
```

The exception interceptors registered for the message type itself, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `FinalInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> FinalInterceptors { get; }
```

The final interceptors registered for the message type itself, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `Handlers`

```csharp
public IReadOnlyList<FrozenParticipant> Handlers { get; }
```

The main handlers registered for the message type itself. An event carries every
subscriber here.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectExceptionInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectExceptionInterceptors { get; }
```

The exception interceptors registered for a type the message is assignable to.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectFinalInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectFinalInterceptors { get; }
```

The final interceptors registered for a type the message is assignable to.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectHandlers`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectHandlers { get; }
```

The main handlers registered for a type the message is assignable to.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectPostInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectPostInterceptors { get; }
```

The post-interceptors registered for a type the message is assignable to.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `IndirectPreInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> IndirectPreInterceptors { get; }
```

The pre-interceptors registered for a type the message is assignable to.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `MessageType`

```csharp
public Type MessageType { get; }
```

The message type this composition was compiled for.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `PostInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> PostInterceptors { get; }
```

The post-interceptors registered for the message type itself, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`

### `PreInterceptors`

```csharp
public IReadOnlyList<FrozenParticipant> PreInterceptors { get; }
```

The pre-interceptors registered for the message type itself, in execution order.

**Returns**

`IReadOnlyList<FrozenParticipant>`
