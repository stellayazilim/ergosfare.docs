---
title: "Result"
description: "The outcome of a pipeline that produces no payload: either success, or a failure carrying the Result.Exception that describes it."
sidebar:
  label: "Result"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The outcome of a pipeline that produces no payload: either success, or a failure
carrying the [`Result.Exception`](/ergosfare.docs/api/core-abstractions-results/result#exception) that describes it.

```csharp
public readonly record struct Result : IEquatable<Result>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Results/Result.cs#L19)

**Implements:** `IEquatable<Result>`

## Remarks

Returning a failure is not the same as throwing one. The exception is carried as data,
so no stack trace is captured and no unwind runs, and the type is a
`readonly record struct`, so neither outcome allocates.

The framework recognizes this type without any registration: a pipeline whose result
carries a failure enters the exception-interceptor stage exactly as a thrown failure
would, and an unhandled one is returned to the caller as a failed result rather than
being thrown.

## Properties

### `Exception`

```csharp
public Exception? Exception { get; }
```

The carried failure, or `null` on success.

**Returns**

[`Exception`](https://learn.microsoft.com/dotnet/api/system.exception)

### `IsSuccess`

```csharp
public bool IsSuccess { get; }
```

Whether this outcome is a success.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### `Fail(Exception)`

```csharp
public static Result Fail(Exception exception)
```

Returns a failed outcome carrying `exception`, without throwing it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. Cannot be `null`. |

**Returns**

[`Result`](/ergosfare.docs/api/core-abstractions-results/result) — The failed outcome.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `exception` is `null`. |

### `Ok()`

```csharp
public static Result Ok()
```

Returns a successful outcome.

**Returns**

[`Result`](/ergosfare.docs/api/core-abstractions-results/result)

### `ToString()`

```csharp
public override string ToString()
```

Returns `Ok`, or `Fail` with the carried exception's type name.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)
