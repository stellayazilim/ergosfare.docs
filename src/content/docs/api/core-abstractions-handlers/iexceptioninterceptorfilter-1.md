---
title: "IExceptionInterceptorFilter<TException>"
description: "Declares the exception type an interceptor accepts."
sidebar:
  label: "IExceptionInterceptorFilter<TException>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Declares the exception type an interceptor accepts. Matching follows `catch`
semantics: `TException` and every type derived from it.

```csharp
public interface IExceptionInterceptorFilter<TException> : IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionInterceptorFilter%5BTException%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The exception type this interceptor accepts. |

## Remarks

This contract carries the exception type into the generated pipelines: the source
generator reads `TException` off it and bakes the same test into
the emitted plan as a compile-time `is` check, so both registration axes filter
identically.
