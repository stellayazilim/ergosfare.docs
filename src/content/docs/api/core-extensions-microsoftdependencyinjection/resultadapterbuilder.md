---
title: "ResultAdapterBuilder"
description: "Provides a fluent API for registering IResultAdapter implementations into an IResultAdapterService."
sidebar:
  label: "ResultAdapterBuilder"
  order: 9
---

**Namespace:** [`Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection.dll`

Provides a fluent API for registering [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) implementations
into an [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice).

```csharp
public class ResultAdapterBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection/ResultAdapterBuilder.cs#L18)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

This builder supports:
- Registering adapters by generic type.
- Registering adapters by [`Type`](https://learn.microsoft.com/dotnet/api/system.type).
- Registering all adapters from a given [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly).

Each registration creates a new adapter instance via [`CreateInstance(Type)`](https://learn.microsoft.com/dotnet/api/system.activator.createinstance#system-activator-createinstance(system-type)).

## Constructors

### `ResultAdapterBuilder(IResultAdapterService)`

```csharp
public ResultAdapterBuilder(IResultAdapterService resultAdapterService)
```

Provides a fluent API for registering [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) implementations
into an [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `resultAdapterService` | [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice) |  |

This builder supports:
- Registering adapters by generic type.
- Registering adapters by [`Type`](https://learn.microsoft.com/dotnet/api/system.type).
- Registering all adapters from a given [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly).

Each registration creates a new adapter instance via [`CreateInstance(Type)`](https://learn.microsoft.com/dotnet/api/system.activator.createinstance#system-activator-createinstance(system-type)).

## Methods

### `Register(Type)`

```csharp
public ResultAdapterBuilder Register(Type adapter)
```

Registers a result adapter by its [`Type`](https://learn.microsoft.com/dotnet/api/system.type).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapter` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The adapter type to register. |

**Returns**

[`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) — The current [`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) instance for chaining.

The adapter type must implement [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) and have a parameterless constructor.

### `Register<TAdapter>()`

```csharp
public ResultAdapterBuilder Register<TAdapter>() where TAdapter : IResultAdapter, new()
```

Registers a result adapter of type `TAdapter`.

**Type parameters**

| Name | Description |
| --- | --- |
| `TAdapter` | The adapter type implementing [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter). |

**Returns**

[`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) — The current [`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) instance for chaining.

A new instance of `TAdapter` is created via its parameterless constructor.

### `RegisterFromAssembly(Assembly)`

```csharp
public ResultAdapterBuilder RegisterFromAssembly(Assembly assembly)
```

Registers all [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) implementations found in the given assembly.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The assembly to scan for adapter types. |

**Returns**

[`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) — The current [`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) instance for chaining.

This scans for non-abstract, concrete classes that implement [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter).
Each matching type is instantiated and registered.
