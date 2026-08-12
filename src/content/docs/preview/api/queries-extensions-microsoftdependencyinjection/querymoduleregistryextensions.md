---
title: "QueryModuleRegistryExtensions"
description: "Provides extension methods for IModuleRegistry to add the query module."
sidebar:
  label: "QueryModuleRegistryExtensions"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/queries-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection.dll`

Provides extension methods for [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) to add the query module.

```csharp
public static class QueryModuleRegistryExtensions
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection/QueryModuleRegistryExtensions.cs#L7)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `AddQueryModule(IModuleRegistry, Action<QueryModuleBuilder>)`

```csharp
public static IModuleRegistry AddQueryModule(this IModuleRegistry registry, Action<QueryModuleBuilder> builder)
```

Adds the query module to the specified module registry, allowing registration
of query types and enabling the [`IQueryMediator`](/ergosfare.docs/preview/api/queries-abstractions/iquerymediator) for dispatching queries.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `registry` | [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The module registry to which the query module will be added. |
| `builder` | `Action<QueryModuleBuilder>` | An action that configures the query module using a [`QueryModuleBuilder`](/ergosfare.docs/preview/api/queries-extensions-microsoftdependencyinjection/querymodulebuilder) to register query types. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The `registry` with the query module added, enabling fluent chaining.
