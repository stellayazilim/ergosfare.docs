---
title: "ExcludeFromPipelineAttribute"
description: "Excludes a message from covariantly matched interceptors: interceptors registered against a base type or interface of the message (e.g."
sidebar:
  label: "ExcludeFromPipelineAttribute"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Excludes a message from covariantly matched interceptors: interceptors registered
against a base type or interface of the message (e.g. an `IEvent`-wide
pre-interceptor) no longer apply to it. Interceptors registered against the message
type itself always run — they were written for this message deliberately.

```csharp
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface, Inherited = false)]
public sealed class ExcludeFromPipelineAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/ExcludeFromPipelineAttribute.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

Without arguments every covariantly matched interceptor is excluded; with group names
only the covariant interceptors carrying one of those [`GroupAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/groupattribute)
groups are. Main handlers are never affected — the attribute shapes the interceptor
pipeline, not dispatch itself.

## Constructors

### `ExcludeFromPipelineAttribute(params string[])`

```csharp
public ExcludeFromPipelineAttribute(params string[] groups)
```

Excludes a message from covariantly matched interceptors: interceptors registered
against a base type or interface of the message (e.g. an `IEvent`-wide
pre-interceptor) no longer apply to it. Interceptors registered against the message
type itself always run — they were written for this message deliberately.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `groups` | [`string[]`](https://learn.microsoft.com/dotnet/api/system.string) |  |

Without arguments every covariantly matched interceptor is excluded; with group names
only the covariant interceptors carrying one of those [`GroupAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/groupattribute)
groups are. Main handlers are never affected — the attribute shapes the interceptor
pipeline, not dispatch itself.

## Properties

### `Groups`

```csharp
public string[] Groups { get; }
```

The interceptor groups excluded from covariant matching; empty to exclude every
covariantly matched interceptor.

**Returns**

[`string[]`](https://learn.microsoft.com/dotnet/api/system.string)
