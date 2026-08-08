---
title: "IResultAdapter"
description: "Defines a contract for adapting and inspecting result objects of arbitrary types to extract exceptions without throwing them directly."
sidebar:
  label: "IResultAdapter"
  order: 16
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Defines a contract for adapting and inspecting result objects of arbitrary types
to extract exceptions without throwing them directly.

```csharp
public interface IResultAdapter
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/IResultAdapter.cs#L23)

## Remarks

The primary purpose of a result adapter is to enable the framework to invoke
exception interceptors based on exceptions contained within result objects,
without having to throw these exceptions. This allows the message handling
pipeline to process results and exceptions consistently, regardless of whether
the exception occurred naturally or is wrapped inside a result type.

Implementations of this interface allow the pipeline to remain agnostic to the
specific result type returned by handlers, supporting result wrapper types
such as `FluentResult`, `OneOf`, or any custom domain-specific result object.

Multiple adapters can be registered in an [`IResultAdapterService`](/ergosfare.docs/preview/api/core-abstractions/iresultadapterservice), and
each adapter is evaluated in order until one indicates it can adapt the result
and successfully extracts an exception.

## Methods

### `CanAdapt(object)`

```csharp
bool CanAdapt(object result)
```

Determines whether this adapter can handle the provided `result` object.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result object to evaluate. This may be any object type. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` if this adapter can process the given result; otherwise, `false`.

### `TryGetException(object, out Exception?)`

```csharp
bool TryGetException(object result, out Exception? exception)
```

Attempts to extract an [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) from the given result object
without throwing it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result object to inspect. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception extracted from the result, if found. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` if an exception was successfully extracted; otherwise, `false`.

This method should only be called after [`IResultAdapter.CanAdapt(object)`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter#canadaptobject) returns `true`
for the same result object. Implementations should handle the logic for retrieving
exceptions from wrapped or custom result types, allowing the framework to invoke
exception interceptors without throwing.
