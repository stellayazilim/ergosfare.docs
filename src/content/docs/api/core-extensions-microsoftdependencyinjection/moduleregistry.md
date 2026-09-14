---
title: "ModuleRegistry"
description: "Collects the modules an application registers and, once configuration is done, puts everything they named into the container."
sidebar:
  label: "ModuleRegistry"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Collects the modules an application registers and, once configuration is done, puts
everything they named into the container.

```csharp
public class ModuleRegistry : IModuleRegistry
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ModuleRegistry.cs#L19)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

**Implements:** [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry)

## Constructors

### `ModuleRegistry(IServiceCollection, DispatchPlanCatalog)`

```csharp
public ModuleRegistry(IServiceCollection services, DispatchPlanCatalog compositions)
```

Collects the modules an application registers and, once configuration is done, puts
everything they named into the container.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `services` | [`IServiceCollection`](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection) | The container being built. |
| `compositions` | [`DispatchPlanCatalog`](/ergosfare.docs/api/core-abstractions-planning/dispatchplancatalog) | This container's view of the compiled composition table. |

## Methods

### `Initialize()`

```csharp
public void Initialize()
```

Builds every registered module and adds the dispatch machinery, the configured
options and every selected participant to the container.

### `Register(IModule)`

```csharp
public IModuleRegistry Register(IModule module)
```

Registers a module.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `module` | [`IModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodule) | The module to register. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same registry, so calls can be chained.

### `UseDefaultResultAdapter(Type)`

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP001")]
public IModuleRegistry UseDefaultResultAdapter(Type adapterType)
```

Sets the adapter that result types fall back to when nothing more specific binds
them.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The adapter type: closed and implementing `IResultAdapter<TResult>`, or an open generic definition covering a family of result types. It must be concrete and have a public parameterless constructor; one instance is created per result type served and kept. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same registry, so calls can be chained.

The fallback applies only after the message's own `[ResultAdapter]` annotation
and the built-in `Result` and `Result<T>` carriers. A result type the
adapter cannot serve, a message carrying `[IgnoreResultAdapter]`, and an
application that never calls this all keep the default behavior of throwing failures
rather than returning them.

This is the call the generator reads, and it reads it at compile time: the argument
must be a literal `typeof` it can resolve (`ERGO019`), a compilation names
one fallback adapter (`ERGO020`), and the adapter must be one generated code can
name and construct (`ERGO021`). Which result types it serves — and what closes an
open definition over each of them — is answered there and written into the generated
adapter table and the compiled plan. This declaration does not register an adapter
service in DI, and dispatch does not read it again.
