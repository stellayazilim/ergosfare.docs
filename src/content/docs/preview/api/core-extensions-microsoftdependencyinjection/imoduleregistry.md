---
title: "IModuleRegistry"
description: "What AddErgosfare hands the caller: the place modules are registered and the framework configured."
sidebar:
  label: "IModuleRegistry"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

What `AddErgosfare` hands the caller: the place modules are registered and the
framework configured.

```csharp
public interface IModuleRegistry
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/IModuleRegistry.cs#L9)

## Methods

### `Register(IModule)`

```csharp
IModuleRegistry Register(IModule module)
```

Registers a module.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `module` | [`IModule`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imodule) | The module to register. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same registry, so calls can be chained.

### `UseDefaultResultAdapter(Type)`

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP001")]
IModuleRegistry UseDefaultResultAdapter(Type adapterType)
```

Sets the adapter that result types fall back to when nothing more specific binds
them.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The adapter type: closed and implementing `IResultAdapter<TResult>`, or an open generic definition covering a family of result types. It must be concrete and have a public parameterless constructor; one instance is created per result type served and kept. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same registry, so calls can be chained.

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
