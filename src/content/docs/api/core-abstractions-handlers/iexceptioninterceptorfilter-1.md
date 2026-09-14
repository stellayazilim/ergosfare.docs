---
title: "IExceptionInterceptorFilter<TException>"
description: "Narrows an exception interceptor to TException and the types derived from it, the way a catch clause does."
sidebar:
  label: "IExceptionInterceptorFilter<TException>"
  order: 13
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Handlers`](/ergosfare.docs/api/core-abstractions-handlers)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Narrows an exception interceptor to `TException` and the types
derived from it, the way a `catch` clause does.

```csharp
public interface IExceptionInterceptorFilter<TException> : IExceptionInterceptorFilter where TException : Exception
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Handlers/ExceptionInterceptors/IExceptionInterceptorFilter%5BTException%5D.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TException` | The exception type this interceptor accepts. |

## Remarks

Implement this alongside an exception-interceptor contract; the test is supplied here,
so there is nothing to write. Generated pipelines read
`TException` off this contract and emit the same test, so filtering
behaves identically however the interceptor was registered.
