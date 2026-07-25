---
title: "QueryModuleBuilder"
description: "Provides a builder for registering query types in the message registry as part of the query module configuration."
sidebar:
  label: "QueryModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection.dll`

Provides a builder for registering query types in the message registry
as part of the query module configuration.

```csharp
public sealed class QueryModuleBuilder
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection/QueryModuleBuilder.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `QueryModuleBuilder(IMessageRegistry)`

```csharp
public QueryModuleBuilder(IMessageRegistry messageRegistry)
```

Provides a builder for registering query types in the message registry
as part of the query module configuration.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageRegistry` | [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry) |  |

## Methods

### `Register(Type)`

```csharp
public QueryModuleBuilder Register(Type queryType)
```

Registers a query type by its [`Type`](https://learn.microsoft.com/dotnet/api/system.type) in the message registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `queryType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The [`Type`](https://learn.microsoft.com/dotnet/api/system.type) of the query to register. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | Thrown if the type does not implement [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery). |

### `Register<TQuery>()`

```csharp
public QueryModuleBuilder Register<TQuery>() where TQuery : IQuery
```

Registers a specific query type `TQuery` in the message registry.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The query type to register. Must implement [`IQuery`](/ergosfare.docs/api/queries-abstractions/iquery). |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.

### `RegisterDescriptors(IEnumerable<IHandlerDescriptor>)`

```csharp
public QueryModuleBuilder RegisterDescriptors(IEnumerable<IHandlerDescriptor> descriptors)
```

Registers pre-built handler descriptors, bypassing reflection-based descriptor
construction — the registration path used by source-generated code.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `descriptors` | `IEnumerable<IHandlerDescriptor>` | The descriptors to register; every handler type must be a query construct. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | Thrown when a descriptor's handler type is not a query construct. |

### `RegisterFromAssembly(Assembly, string)`

```csharp
public QueryModuleBuilder RegisterFromAssembly(Assembly assembly, string discoveryKeyPattern)
```

Registers the assembly's query types whose discovery keys match the given pattern —
an exact key or a trailing-`*` prefix glob. See
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) for the key model.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) to scan for query types. |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The discovery key pattern to select types by. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.

### `RegisterFromAssembly(Assembly)`

```csharp
public QueryModuleBuilder RegisterFromAssembly(Assembly assembly)
```

Registers the assembly's query types that participate in default discovery: types
excluded via [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute) or gated behind a
[`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) are skipped, mirroring source-generated
`RegisterGenerated()`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `assembly` | [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) | The [`Assembly`](https://learn.microsoft.com/dotnet/api/system.reflection.assembly) to scan for query types. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.
