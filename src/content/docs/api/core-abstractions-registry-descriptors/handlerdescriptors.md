---
title: "HandlerDescriptors"
description: "Factory for pre-built handler descriptors — the construction surface behind IMessageRegistry.RegisterDescriptors(IEnumerable<IHandlerDescriptor>)."
sidebar:
  label: "HandlerDescriptors"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Registry.Descriptors`](/ergosfare.docs/api/core-abstractions-registry-descriptors)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Factory for pre-built handler descriptors — the construction surface behind
[`IMessageRegistry.RegisterDescriptors(IEnumerable<IHandlerDescriptor>)`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry#registerdescriptorsienumerableihandlerdescriptor).
Source-generated registration code creates descriptors through these methods with
statically known types, bypassing the reflection-based descriptor builders entirely;
the values mirror exactly what those builders would have computed for the same handler
type (verbatim message types for main handlers, generic-definition-normalized message
types for interceptors, [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)-carrier result
types for asynchronous handlers).

```csharp
public static class HandlerDescriptors
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Registry/Descriptors/HandlerDescriptors.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `ExceptionInterceptor(Type, Type, Type, uint, IReadOnlyCollection<string>?)`

```csharp
public static IExceptionInterceptorDescriptor ExceptionInterceptor(Type messageType, Type resultType, Type handlerType, uint weight = 0, IReadOnlyCollection<string>? groups = null)
```

Creates an exception-interceptor descriptor.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The intercepted message type (generic definitions for generic messages). |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result type the interceptor is declared for; [`object`](https://learn.microsoft.com/dotnet/api/system.object) for result-agnostic contracts. |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The concrete interceptor type to resolve and invoke. |
| `weight` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) | The execution-order weight (higher runs earlier); 0 when undeclared. |
| `groups` | `IReadOnlyCollection<string>` | The interceptor's group names, or `null` for the default group. |

**Returns**

[`IExceptionInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/iexceptioninterceptordescriptor)

### `FinalInterceptor(Type, Type, Type, uint, IReadOnlyCollection<string>?)`

```csharp
public static IFinalInterceptorDescriptor FinalInterceptor(Type messageType, Type resultType, Type handlerType, uint weight = 0, IReadOnlyCollection<string>? groups = null)
```

Creates a final-interceptor descriptor.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The intercepted message type (generic definitions for generic messages). |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result type the interceptor is declared for; [`object`](https://learn.microsoft.com/dotnet/api/system.object) for result-agnostic contracts. |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The concrete interceptor type to resolve and invoke. |
| `weight` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) | The execution-order weight (higher runs earlier); 0 when undeclared. |
| `groups` | `IReadOnlyCollection<string>` | The interceptor's group names, or `null` for the default group. |

**Returns**

[`IFinalInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ifinalinterceptordescriptor)

### `Handler(Type, Type, Type, uint, IReadOnlyCollection<string>?)`

```csharp
public static IMainHandlerDescriptor Handler(Type messageType, Type resultType, Type handlerType, uint weight = 0, IReadOnlyCollection<string>? groups = null)
```

Creates a main-handler descriptor.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The handled message type, exactly as declared on the handler contract. |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The pipeline result carrier: the declared `TResult` for synchronous contracts, [`ValueTask`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) for result-less asynchronous contracts, or [`ValueTask<TResult>`](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1) for result-producing ones. |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The concrete handler type to resolve and invoke. |
| `weight` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) | The execution-order weight (higher runs earlier); 0 when undeclared. |
| `groups` | `IReadOnlyCollection<string>` | The handler's group names, or `null` for the default group. |

**Returns**

[`IMainHandlerDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/imainhandlerdescriptor)

### `PostInterceptor(Type, Type, Type, uint, IReadOnlyCollection<string>?)`

```csharp
public static IPostInterceptorDescriptor PostInterceptor(Type messageType, Type resultType, Type handlerType, uint weight = 0, IReadOnlyCollection<string>? groups = null)
```

Creates a post-interceptor descriptor.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The intercepted message type (generic definitions for generic messages). |
| `resultType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The result type the interceptor is declared for; [`object`](https://learn.microsoft.com/dotnet/api/system.object) for result-agnostic contracts. |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The concrete interceptor type to resolve and invoke. |
| `weight` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) | The execution-order weight (higher runs earlier); 0 when undeclared. |
| `groups` | `IReadOnlyCollection<string>` | The interceptor's group names, or `null` for the default group. |

**Returns**

[`IPostInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ipostinterceptordescriptor)

### `PreInterceptor(Type, Type, uint, IReadOnlyCollection<string>?)`

```csharp
public static IPreInterceptorDescriptor PreInterceptor(Type messageType, Type handlerType, uint weight = 0, IReadOnlyCollection<string>? groups = null)
```

Creates a pre-interceptor descriptor.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The intercepted message type (generic definitions for generic messages). |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The concrete interceptor type to resolve and invoke. |
| `weight` | [`uint`](https://learn.microsoft.com/dotnet/api/system.uint32) | The execution-order weight (higher runs earlier); 0 when undeclared. |
| `groups` | `IReadOnlyCollection<string>` | The interceptor's group names, or `null` for the default group. |

**Returns**

[`IPreInterceptorDescriptor`](/ergosfare.docs/api/core-abstractions-registry-descriptors/ipreinterceptordescriptor)
