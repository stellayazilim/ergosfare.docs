---
title: "IMessageDescriptor"
description: "Describes a message type and its associated handler and interceptor descriptors."
sidebar:
  label: "IMessageDescriptor"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Describes a message type and its associated handler and interceptor descriptors.

```csharp
public interface IMessageDescriptor : IHasMessageType
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/IMessageDescriptor.cs#L19)

## Remarks

This interface provides a structured view of all handlers and interceptors
associated with a particular message type, including:

- Main handlers and indirect main handlers.
- Pre-interceptors and indirect pre-interceptors.
- Post-interceptors and indirect post-interceptors.
- Exception interceptors and indirect exception interceptors.
- Final interceptors and indirect final interceptors.

The [`IMessageDescriptor.IsGeneric`](/ergosfare.docs/api/core-abstractions-registry-descriptors/imessagedescriptor#isgeneric) property indicates whether the message type is generic.

## Properties

### `ExceptionInterceptors`

```csharp
IReadOnlyCollection<IExceptionInterceptorDescriptor> ExceptionInterceptors { get; }
```

Gets the exception interceptors for the message type.

**Returns**

`IReadOnlyCollection<IExceptionInterceptorDescriptor>`

### `ExcludedInterceptorGroups`

```csharp
IReadOnlyCollection<string> ExcludedInterceptorGroups { get; }
```

Gets the interceptor groups the message excludes from covariant matching via
`[ExcludeFromPipeline("group")]`; empty when the message declares no
group-scoped exclusion.

**Returns**

`IReadOnlyCollection<string>`

### `ExcludesIndirectInterceptors`

```csharp
bool ExcludesIndirectInterceptors { get; }
```

Gets a value indicating whether the message excludes every covariantly matched
(indirect) interceptor via a parameterless `[ExcludeFromPipeline]`.
Interceptors registered against the message type itself are unaffected.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

### `FinalInterceptors`

```csharp
IReadOnlyCollection<IFinalInterceptorDescriptor> FinalInterceptors { get; }
```

Gets the final interceptors for the message type.

**Returns**

`IReadOnlyCollection<IFinalInterceptorDescriptor>`

### `Handlers`

```csharp
IReadOnlyCollection<IMainHandlerDescriptor> Handlers { get; }
```

Gets the main handlers for the message type.

**Returns**

`IReadOnlyCollection<IMainHandlerDescriptor>`

### `IndirectExceptionInterceptors`

```csharp
IReadOnlyCollection<IExceptionInterceptorDescriptor> IndirectExceptionInterceptors { get; }
```

Gets the indirect exception interceptors for the message type.

**Returns**

`IReadOnlyCollection<IExceptionInterceptorDescriptor>`

### `IndirectFinalInterceptors`

```csharp
IReadOnlyCollection<IFinalInterceptorDescriptor> IndirectFinalInterceptors { get; }
```

Gets the indirect final interceptors for the message type.

**Returns**

`IReadOnlyCollection<IFinalInterceptorDescriptor>`

### `IndirectHandlers`

```csharp
IReadOnlyCollection<IMainHandlerDescriptor> IndirectHandlers { get; }
```

Gets the indirect main handlers for the message type.
These handlers apply to compatible message types (e.g., base types or interfaces).

**Returns**

`IReadOnlyCollection<IMainHandlerDescriptor>`

### `IndirectPostInterceptors`

```csharp
IReadOnlyCollection<IPostInterceptorDescriptor> IndirectPostInterceptors { get; }
```

Gets the indirect post-interceptors for the message type.

**Returns**

`IReadOnlyCollection<IPostInterceptorDescriptor>`

### `IndirectPreInterceptors`

```csharp
IReadOnlyCollection<IPreInterceptorDescriptor> IndirectPreInterceptors { get; }
```

Gets the indirect pre-interceptors for the message type.

**Returns**

`IReadOnlyCollection<IPreInterceptorDescriptor>`

### `IsGeneric`

```csharp
bool IsGeneric { get; }
```

Gets a value indicating whether the message type is generic.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

### `PostInterceptors`

```csharp
IReadOnlyCollection<IPostInterceptorDescriptor> PostInterceptors { get; }
```

Gets the post-interceptors for the message type.

**Returns**

`IReadOnlyCollection<IPostInterceptorDescriptor>`

### `PreInterceptors`

```csharp
IReadOnlyCollection<IPreInterceptorDescriptor> PreInterceptors { get; }
```

Gets the pre-interceptors for the message type.

**Returns**

`IReadOnlyCollection<IPreInterceptorDescriptor>`
