---
title: "Result<TValue>"
description: "The framework's default value-carried outcome: a successful TValue, or a failure wrapping the Result<TValue>.Exception that describes it — without throwing."
sidebar:
  label: "Result<TValue>"
  order: 15
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The framework's default value-carried outcome: a successful `TValue`,
or a failure wrapping the [`Result<TValue>.Exception`](/ergosfare.docs/api/core-abstractions/result-1#exception) that describes it — without throwing.
See [`Result`](/ergosfare.docs/api/core-abstractions/result) for the zero-allocation rationale.

```csharp
public readonly record struct Result<TValue> : IEquatable<Result<TValue>>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Results/Result%5BT%5D.cs#L8)

**Type parameters**

| Name | Description |
| --- | --- |
| `TValue` | The successful payload type. |

**Implements:** `IEquatable<Result<TValue>>`

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

### `Value`

```csharp
public TValue Value { get; }
```

The successful payload. Throws [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) when the
outcome is a failure — read [`Result<TValue>.Exception`](/ergosfare.docs/api/core-abstractions/result-1#exception) or use
[`Result<TValue>.TryGetValue(out TValue)`](/ergosfare.docs/api/core-abstractions/result-1#trygetvalueout-tvalue)/[`Result<TValue>.GetValueOrDefault()`](/ergosfare.docs/api/core-abstractions/result-1#getvalueordefault) on paths where failure is
possible.

**Returns**

`TValue`

## Methods

### `Fail(Exception)`

```csharp
public static Result<TValue> Fail(Exception exception)
```

A failed outcome carrying `exception` — without throwing it, so no
stack trace is captured and no unwind runs.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. Must not be null. |

**Returns**

[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1)

### `GetValueOrDefault()`

```csharp
public TValue? GetValueOrDefault()
```

The successful payload, or `default` on failure. Never throws.

**Returns**

`TValue`

### `Ok(TValue)`

```csharp
public static Result<TValue> Ok(TValue value)
```

A successful outcome carrying `value`. Allocation-free.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `value` | `TValue` |  |

**Returns**

[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1)

### `ToString()`

```csharp
public override string ToString()
```

Returns the fully qualified type name of this instance.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string) — The fully qualified type name.

### `TryGetValue(out TValue)`

```csharp
public bool TryGetValue(out TValue value)
```

Pattern-friendly access: `true` with the payload on success.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `value` | `TValue` |  |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean)

## Operators

### `implicit operator Result<TValue>(TValue)`

```csharp
public static implicit operator Result<TValue>(TValue value)
```

Success values convert implicitly, keeping handler returns terse.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `value` | `TValue` |  |

**Returns**

[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1)
