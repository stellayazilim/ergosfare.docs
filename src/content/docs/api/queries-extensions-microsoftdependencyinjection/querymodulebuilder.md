---
title: "QueryModuleBuilder"
description: "Selects which of the compiled query constructs this container runs."
sidebar:
  label: "QueryModuleBuilder"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection.dll`

Selects which of the compiled query constructs this container runs.

```csharp
public sealed class QueryModuleBuilder
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection/QueryModuleBuilder.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Constructors

### `QueryModuleBuilder(DispatchPlanCatalog)`

```csharp
public QueryModuleBuilder(DispatchPlanCatalog compositions)
```

Selects which of the compiled query constructs this container runs.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `compositions` | [`DispatchPlanCatalog`](/ergosfare.docs/api/core-abstractions-planning/dispatchplancatalog) | The catalog this builder records the container's selection in. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `compositions` is `null`. |

## Methods

### `AddGenerated()`

```csharp
public QueryModuleBuilder AddGenerated()
```

Applies the compile-time default selection for this module.

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder)

### `AddGenerated(string)`

```csharp
public QueryModuleBuilder AddGenerated(string discoveryKeyPattern)
```

Applies the compile-time selection for a constant discovery-key pattern.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `discoveryKeyPattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | An exact key or trailing-star prefix. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The same builder.

### `Register(Type)`

```csharp
public QueryModuleBuilder Register(Type queryType)
```

Registers one query construct.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `queryType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The type to register: a query, or one of the handlers and interceptors that serve queries — their contracts carry the module's marker too. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The same builder, so calls can be chained.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`NotSupportedException`](https://learn.microsoft.com/dotnet/api/system.notsupportedexception) | The type does not belong to the query module. |

### `Register<TQuery>()`

```csharp
public QueryModuleBuilder Register<TQuery>() where TQuery : IQuery
```

Registers one query construct.

**Type parameters**

| Name | Description |
| --- | --- |
| `TQuery` | The type to register: a query, or one of the handlers and interceptors that serve queries. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The same builder, so calls can be chained.

### `RegisterParticipants(IEnumerable<Type>)`

```csharp
public QueryModuleBuilder RegisterParticipants(IEnumerable<Type> participantTypes)
```

Registers many participants at once — the path generated registration uses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `participantTypes` | `IEnumerable<Type>` | The handler and interceptor types to register. |

**Returns**

[`QueryModuleBuilder`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) — The same builder, so calls can be chained.

Unlike [`QueryModuleBuilder.Register(Type)`](/ergosfare.docs/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder#registertype) this does not check the module: the generator has
already sorted its discoveries by module, and not every participant contract carries
the marker.
