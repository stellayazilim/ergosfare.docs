---
title: "ExcludeFromPipelineAttribute"
description: "Detaches a message from interceptors it only matches covariantly — those registered against one of its base types or interfaces."
sidebar:
  label: "ExcludeFromPipelineAttribute"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Detaches a message from interceptors it only matches covariantly — those registered
against one of its base types or interfaces.

```csharp
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface, Inherited = false)]
public sealed class ExcludeFromPipelineAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Attributes/ExcludeFromPipelineAttribute.cs#L14)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Interceptors registered against the message type itself always run; they were written
for this message. With no arguments every covariantly matched interceptor is detached;
with group names only those declaring one of the named [`GroupAttribute`](/ergosfare.docs/api/core-abstractions-attributes/groupattribute)
groups are. Main handlers are never affected — this shapes the interceptor stages, not
handler selection.

## Constructors

### `ExcludeFromPipelineAttribute(params string[])`

```csharp
public ExcludeFromPipelineAttribute(params string[] groups)
```

Detaches a message from interceptors it only matches covariantly — those registered
against one of its base types or interfaces.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

Interceptors registered against the message type itself always run; they were written
for this message. With no arguments every covariantly matched interceptor is detached;
with group names only those declaring one of the named [`GroupAttribute`](/ergosfare.docs/api/core-abstractions-attributes/groupattribute)
groups are. Main handlers are never affected — this shapes the interceptor stages, not
handler selection.

## Properties

### `Groups`

```csharp
public string[] Groups { get; }
```

The interceptor groups to detach; empty detaches every covariantly matched
interceptor.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)
