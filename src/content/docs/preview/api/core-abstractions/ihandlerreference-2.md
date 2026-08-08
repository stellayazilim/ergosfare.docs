---
title: "IHandlerReference<THandler, TDescriptor>"
description: "A resolvable reference to a pipeline handler: the descriptor it was registered with, its pre-computed concrete type, and a way to obtain an instance for the…"
sidebar:
  label: "IHandlerReference<THandler, TDescriptor>"
  order: 6
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A resolvable reference to a pipeline handler: the descriptor it was registered with,
its pre-computed concrete type, and a way to obtain an instance for the current dispatch.

```csharp
public interface IHandlerReference<out THandler, out TDescriptor> where TDescriptor : IHandlerDescriptor
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/IHandlerReference.cs#L17)

**Type parameters**

| Name | Description |
| --- | --- |
| `THandler` | The type of the handler. |
| `TDescriptor` | The type of the handler descriptor. |

## Remarks

References are provider-independent and shared process-wide; the handler instance is
obtained per invocation from the dispatching scope's service provider, which the
mediation pipeline passes down explicitly — resolution is the dispatcher's
responsibility, never the execution context's. Registered DI lifetimes are honored;
memoized pipelines cache the resolved instance inside the reference instead.

## Properties

### `Descriptor`

```csharp
TDescriptor Descriptor { get; }
```

Gets the descriptor associated with the handler.

**Returns**

`TDescriptor`

### `HandlerType`

```csharp
Type HandlerType { get; }
```

Gets the concrete handler type to instantiate — already closed over the message's
generic arguments when the handler targets a generic message type.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

## Methods

### `Resolve(IServiceProvider)`

```csharp
THandler Resolve(IServiceProvider serviceProvider)
```

Resolves the handler instance from the given provider — the dispatching scope's
provider, passed down by the mediation pipeline — unless the pipeline is memoized,
in which case the cached instance is returned.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope the current dispatch runs in. |

**Returns**

`THandler`
