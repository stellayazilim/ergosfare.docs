---
title: "QueryModuleRegistryExtensions"
description: "Adds the query module to a registry."
sidebar:
  label: "QueryModuleRegistryExtensions"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection`](/ergosfare.docs/preview/api/queries-extensions-microsoftdependencyinjection)  
**Assembly:** `Stella.Ergosfare.Queries.Extensions.MicrosoftDependencyInjection.dll`

Adds the query module to a registry.

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

Adds the query module, registering the queries `builder` selects.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `registry` | [`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | The registry being configured. |
| `builder` | `Action<QueryModuleBuilder>` | Selects which query constructs this container runs. |

**Returns**

[`IModuleRegistry`](/ergosfare.docs/preview/api/core-extensions-microsoftdependencyinjection/imoduleregistry) — The same registry, so calls can be chained.
