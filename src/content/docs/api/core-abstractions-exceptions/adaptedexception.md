---
title: "AdaptedException"
description: "Exception wrapper used by result adapters to surface errors without directly throwing the original result type."
sidebar:
  label: "AdaptedException"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Exception wrapper used by result adapters to surface errors without
directly throwing the original result type.

```csharp
public sealed class AdaptedException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/AdaptedException.cs#L9)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Constructors

### `AdaptedException(string, object)`

```csharp
public AdaptedException(string message, object originalResult)
```

Exception wrapper used by result adapters to surface errors without
directly throwing the original result type.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Human-readable message for the exception. |
| `originalResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The original result object that was adapted. |

## Properties

### `OriginalResult`

```csharp
public object OriginalResult { get; }
```

Gets the original result object that triggered this exception.
Stored by reference, not copied.

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `GetOriginalResult<TResult>()`

```csharp
public TResult GetOriginalResult<TResult>() where TResult : notnull
```

Retrieves the original result as a strongly typed value.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The expected type of the original result. |

**Returns**

`TResult` — The original result cast to `TResult`.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidCastException`](https://learn.microsoft.com/dotnet/api/system.invalidcastexception) | Thrown if the original result cannot be cast to the requested type. |
