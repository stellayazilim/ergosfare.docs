---
title: "Result<TValue>"
description: "The outcome of a pipeline that produces a TValue: either that value, or a failure carrying the Result<TValue>.Exception that describes it."
sidebar:
  label: "Result<TValue>"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Results`](/ergosfare.docs/preview/api/core-abstractions-results)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The outcome of a pipeline that produces a `TValue`: either that
value, or a failure carrying the [`Result<TValue>.Exception`](/ergosfare.docs/preview/api/core-abstractions-results/result-1#exception) that describes it.

```csharp
public readonly record struct Result<TValue> : IEquatable<Result<TValue>>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Results/Result%5BT%5D.cs#L12)

**Type parameters**

| Name | Description |
| --- | --- |
| `TValue` | The payload type of a successful outcome. |

**Implements:** `IEquatable<Result<TValue>>`

## Remarks

The payload counterpart of [`Result`](/ergosfare.docs/preview/api/core-abstractions-results/result), with the same properties: failures are
carried as data rather than thrown, neither outcome allocates, and the framework reads
the carrier without any registration.

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

### `Value`

```csharp
public TValue Value { get; }
```

The payload of a successful outcome.

**Returns**

`TValue`

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) | The outcome is a failure. Use [`Result<TValue>.TryGetValue(out TValue)`](/ergosfare.docs/preview/api/core-abstractions-results/result-1#trygetvalueout-tvalue) or [`Result<TValue>.GetValueOrDefault()`](/ergosfare.docs/preview/api/core-abstractions-results/result-1#getvalueordefault) where failure is possible. |

## Methods

### `Fail(Exception)`

```csharp
public static Result<TValue> Fail(Exception exception)
```

Returns a failed outcome carrying `exception`, without throwing it.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure to carry. Cannot be `null`. |

**Returns**

[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/result-1) — The failed outcome.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ArgumentNullException`](https://learn.microsoft.com/dotnet/api/system.argumentnullexception) | `exception` is `null`. |

### `GetValueOrDefault()`

```csharp
public TValue? GetValueOrDefault()
```

Returns the payload, or the default of `TValue` on failure.

**Returns**

`TValue` — The payload, or its default.

### `Ok(TValue)`

```csharp
public static Result<TValue> Ok(TValue value)
```

Returns a successful outcome carrying `value`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `value` | `TValue` | The payload. |

**Returns**

[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/result-1) — The successful outcome.

### `ToString()`

```csharp
public override string ToString()
```

Returns `Ok` with the payload, or `Fail` with the carried exception's type
name.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `TryGetValue(out TValue)`

```csharp
public bool TryGetValue(out TValue value)
```

Reads the payload when this outcome is a success.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `value` | `TValue` | The payload when this method returns `true`; otherwise the default of `TValue`. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the outcome is a success.

## Operators

### `implicit operator Result<TValue>(TValue)`

```csharp
public static implicit operator Result<TValue>(TValue value)
```

Converts a payload into a successful outcome, so a handler can return the value
directly.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `value` | `TValue` | The payload. |

**Returns**

[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/result-1)
