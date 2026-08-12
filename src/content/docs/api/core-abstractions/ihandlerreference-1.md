---
title: "IHandlerReference<THandler>"
description: "A resolvable reference to a pipeline handler: its pre-computed concrete type and a way to obtain an instance for the current dispatch."
sidebar:
  label: "IHandlerReference<THandler>"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A resolvable reference to a pipeline handler: its pre-computed concrete type and a way
to obtain an instance for the current dispatch.

```csharp
public interface IHandlerReference<out THandler>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IHandlerReference.cs#L14)

**Type parameters**

| Name | Description |
| --- | --- |
| `THandler` | The type of the handler. |

## Remarks

References are provider-independent and shared process-wide; the handler instance is
obtained per invocation from the dispatching scope's service provider, which the
mediation pipeline passes down explicitly — resolution is the dispatcher's
responsibility, never the execution context's. Registered DI lifetimes are honored;
memoized pipelines cache the resolved instance inside the reference instead.

## Properties

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
