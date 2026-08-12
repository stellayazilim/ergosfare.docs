---
title: "QueryModuleBuilder"
description: "Provides a builder for selecting the query constructs this container runs from the compiled composition table."
sidebar:
  label: "QueryModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection.dll`

Provides a builder for selecting the query constructs this container runs from the
compiled composition table.

```csharp
public sealed class QueryModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection/QueryModuleBuilder.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `QueryModuleBuilder(FrozenCompositionCatalog)`

```csharp
public QueryModuleBuilder(FrozenCompositionCatalog compositions)
```

Provides a builder for selecting the query constructs this container runs from the
compiled composition table.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `compositions` | [`FrozenCompositionCatalog`](/ergosfare.docs/api/core-abstractions-dispatchroots/frozencompositioncatalog) | The container's composition catalog, told which constructs this registration selects. |

## Methods

### `Register(Type)`

```csharp
public QueryModuleBuilder Register(Type queryType)
```

Registers a query construct — a query, or one of the handlers and interceptors
serving queries (their contracts carry the module marker too).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `queryType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The [`Type`](https://learn.microsoft.com/dotnet/api/system.type) to register. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | Thrown if the type is not a query construct. |

### `Register<TQuery>()`

```csharp
public QueryModuleBuilder Register<TQuery>() where TQuery : IQuery
```

Registers a query construct.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type to register. Must be a query construct. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.

### `RegisterParticipants(IEnumerable<Type>)`

```csharp
public QueryModuleBuilder RegisterParticipants(IEnumerable<Type> participantTypes)
```

Registers a batch of pipeline participants — the bulk path source-generated
registration uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` | The handler and interceptor types to register. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The current [`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) instance for fluent chaining.

No module assertion here: the generator has already partitioned its discoveries by
module, and not every participant contract carries the module marker (the modifying
interceptor shapes are declared purely over the core contracts).
[`QueryModuleBuilder.Register(Type)`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder#registertype) keeps the assertion, since a hand-written registration
is where a wrong-module type actually surfaces.
