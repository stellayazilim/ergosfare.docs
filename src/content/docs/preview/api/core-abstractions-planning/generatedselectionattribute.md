---
title: "GeneratedSelectionAttribute"
description: "Compiler-only selection exported by a configuration method."
sidebar:
  label: "GeneratedSelectionAttribute"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Planning`](/ergosfare.docs/preview/api/core-abstractions-planning)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Compiler-only selection exported by a configuration method. Generated automatically.

```csharp
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
public sealed class GeneratedSelectionAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Planning/GeneratedSelectionAttribute.cs#L3)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Constructors

### `GeneratedSelectionAttribute(string, string?, byte, string?)`

```csharp
public GeneratedSelectionAttribute(string method, string? typeExpression, byte module, string? pattern)
```

Compiler-only selection exported by a configuration method. Generated automatically.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `method` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `typeExpression` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `module` | [`byte`](https://learn.microsoft.com/dotnet/api/system.byte) |  |
| `pattern` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

## Properties

### `Method`

```csharp
public string Method { get; }
```

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `Module`

```csharp
public byte Module { get; }
```

**Returns**

[`byte`](https://learn.microsoft.com/dotnet/api/system.byte)

### `Pattern`

```csharp
public string? Pattern { get; }
```

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `TypeExpression`

```csharp
public string? TypeExpression { get; }
```

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)
