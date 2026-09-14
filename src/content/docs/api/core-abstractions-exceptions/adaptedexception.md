---
title: "AdaptedException"
description: "An exception that carries the result value it was derived from, so code raising a failure out of a result carrier can hand the carrier itself to whoever catc…"
sidebar:
  label: "AdaptedException"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

An exception that carries the result value it was derived from, so code raising a
failure out of a result carrier can hand the carrier itself to whoever catches it.

```csharp
public sealed class AdaptedException : Exception, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Exceptions/AdaptedException.cs#L17)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

The framework never raises this exception. It is available to
[`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1) implementations and to application code that turns
a failed result into a throw without losing the original value.

## Constructors

### `AdaptedException(string, object)`

```csharp
public AdaptedException(string message, object originalResult)
```

An exception that carries the result value it was derived from, so code raising a
failure out of a result carrier can hand the carrier itself to whoever catches it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The exception message. |
| `originalResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The result value the failure was derived from. Cannot be `null`. |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `originalResult` is `null`. |

The framework never raises this exception. It is available to
[`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1) implementations and to application code that turns
a failed result into a throw without losing the original value.

## Properties

### `OriginalResult`

```csharp
public object OriginalResult { get; }
```

The result value this exception was derived from, held by reference.

**Returns**

[`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### `GetOriginalResult<TResult>()`

```csharp
public TResult GetOriginalResult<TResult>() where TResult : notnull
```

Returns [`AdaptedException.OriginalResult`](/ergosfare.docs/api/core-abstractions-exceptions/adaptedexception#originalresult) cast to `TResult`.

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The type the original result is expected to be. |

**Returns**

`TResult` — The original result.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidCastException`](https://learn.microsoft.com/dotnet/api/system.invalidcastexception) | The original result is not a `TResult`. |
