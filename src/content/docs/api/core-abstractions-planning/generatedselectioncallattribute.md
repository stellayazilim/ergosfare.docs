---
title: "GeneratedSelectionCallAttribute"
description: "Compiler-only edge between configuration methods."
sidebar:
  label: "GeneratedSelectionCallAttribute"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Planning`](/ergosfare.docs/api/core-abstractions-planning)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Compiler-only edge between configuration methods. Generated automatically.

```csharp
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]
public sealed class GeneratedSelectionCallAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Planning/GeneratedSelectionAttribute.cs#L13)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Constructors

### `GeneratedSelectionCallAttribute(string, string, string)`

```csharp
public GeneratedSelectionCallAttribute(string caller, string targetAssembly, string targetMethod)
```

Compiler-only edge between configuration methods. Generated automatically.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `caller` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `targetAssembly` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |
| `targetMethod` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) |  |

## Properties

### `Caller`

```csharp
public string Caller { get; }
```

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `TargetAssembly`

```csharp
public string TargetAssembly { get; }
```

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `TargetMethod`

```csharp
public string TargetMethod { get; }
```

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)
