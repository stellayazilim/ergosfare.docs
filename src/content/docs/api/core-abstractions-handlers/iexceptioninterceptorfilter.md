---
title: "IExceptionInterceptorFilter"
description: "The erased probe an exception interceptor carries when it accepts only some exceptions."
sidebar:
  label: "IExceptionInterceptorFilter"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The erased probe an exception interceptor carries when it accepts only some exceptions.
The exception stage asks every interceptor that implements it whether the thrown
exception is one it accepts, runs only those that answer yes, and rethrows the original
exception unwrapped when none does.

```csharp
public interface IExceptionInterceptorFilter
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionInterceptorFilter.cs#L20)

## Remarks

An interceptor that does not implement this contract accepts every exception — the
untyped facades keep their unfiltered behavior with no opt-in.

The probe is deliberately separate from the dispatch contracts
([`IExceptionInterceptor<TMessage, TResult>`](/ergosfare.docs/api/core-abstractions-handlers/iexceptioninterceptor-2) and the asynchronous pair):
filtering is orthogonal to which typed member the stage invokes, so a filtered
interceptor is dispatched through exactly the same arm as an unfiltered one.

## Methods

### `Matches(Exception)`

```csharp
bool Matches(Exception exception)
```

Determines whether this interceptor accepts the thrown exception.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The exception the pipeline threw. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when the interceptor should run for this exception; otherwise `false`.
