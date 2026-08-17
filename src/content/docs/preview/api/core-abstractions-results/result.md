---
title: "Result"
description: "The framework's default value-carried outcome for pipelines without a payload: success, or a failure wrapping the Result.Exception that describes it — withou…"
sidebar:
  label: "Result"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/preview/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The framework's default value-carried outcome for pipelines without a payload: success,
or a failure wrapping the [`Result.Exception`](/ergosfare.docs/preview/api/core-abstractions-results/result#exception) that describes it — without throwing.

```csharp
public readonly record struct Result : IEquatable<Result>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Results/Result.cs#L20)

**Implements:** `IEquatable<Result>`

## Remarks

A `readonly record struct` by design: constructing and returning one allocates
nothing, and — because .NET captures an exception's stack trace at `throw` time,
not at construction — a handler that returns [`Result.Fail(Exception)`](/ergosfare.docs/preview/api/core-abstractions-results/result#failexception) instead of throwing
skips the stack capture and the two-pass unwind entirely. The success path costs a
single field read to check.

The framework recognizes this type natively: a pipeline whose result carries a failure
routes it to the exception-interceptor stage exactly as a thrown exception would be,
via [`ResultExceptionAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter) — no user adapter registration needed.

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

Whether the outcome is a success.

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### `Fail(Exception)`

```csharp
public static Result Fail(Exception exception)
```

A failed outcome carrying `exception` — without throwing it, so no
stack trace is captured and no unwind runs.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. Must not be null. |

**Returns**

[`Result`](/ergosfare.docs/preview/api/core-abstractions-results/result)

### `Ok()`

```csharp
public static Result Ok()
```

The successful outcome. Allocation-free.

**Returns**

[`Result`](/ergosfare.docs/preview/api/core-abstractions-results/result)

### `ToString()`

```csharp
public override string ToString()
```

Returns the fully qualified type name of this instance.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string) — The fully qualified type name.
