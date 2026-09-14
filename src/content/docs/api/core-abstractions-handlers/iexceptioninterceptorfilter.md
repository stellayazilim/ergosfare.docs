---
title: "IExceptionInterceptorFilter"
description: "Narrows an exception interceptor to the failures it accepts."
sidebar:
  label: "IExceptionInterceptorFilter"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Narrows an exception interceptor to the failures it accepts.

```csharp
public interface IExceptionInterceptorFilter
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionInterceptorFilter.cs#L21)

## Remarks

The exception stage asks each interceptor that implements this contract whether it
accepts the failure, and skips the ones that say no — a skipped interceptor does not
count as having handled anything, so a failure every interceptor rejects stays
unhandled and settles as if no interceptor were registered at all.

An interceptor that does not implement this contract accepts every failure. Prefer the
typed [`IExceptionInterceptorFilter<TException>`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptorfilter-1), which implements
[`IExceptionInterceptorFilter.Matches(Exception)`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptorfilter#matchesexception) for you; implement this one directly only for a test the exception
type alone cannot express.

## Methods

### `Matches(Exception)`

```csharp
bool Matches(Exception exception)
```

Reports whether this interceptor accepts `exception`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The failure the pipeline raised. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` to run this interceptor for the failure.
