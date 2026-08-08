---
title: "GeneratedDescriptorCatalog"
description: "Process-wide lookup of compile-time-computed handler descriptors, populated by source-generated module initializers: one factory per handler type the generat…"
sidebar:
  label: "GeneratedDescriptorCatalog"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Process-wide lookup of compile-time-computed handler descriptors, populated by
source-generated module initializers: one factory per handler type the generator saw
in a compilation. Runtime registration (`Register<THandler>()` /
`Register(Type)`) consults the catalog first and only falls back to the
reflection-based descriptor builders for types no generator modeled — runtime-loaded
plugin types, open generics registered manually, foreign assemblies without the
analyzer. The generator's descriptor computation mirrors the runtime builders exactly
(the contract its test suite pins), so the two paths are interchangeable; the catalog
only removes the reflection.

```csharp
public static class GeneratedDescriptorCatalog
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/GeneratedDescriptorCatalog.cs#L17)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `Add(Type, Func<IReadOnlyList<IHandlerDescriptor>>)`

```csharp
public static void Add(Type handlerType, Func<IReadOnlyList<IHandlerDescriptor>> descriptorsFactory)
```

Contributes the descriptor factory of a handler type. Idempotent — the first
contribution for a type wins, which is immaterial because every generator computes
identical descriptors for the same type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `handlerType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The handler type the factory describes. |
| `descriptorsFactory` | `Func<IReadOnlyList<IHandlerDescriptor>>` | Factory producing the type's full descriptor set. |
