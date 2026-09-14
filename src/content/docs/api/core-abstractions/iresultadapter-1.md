---
title: "IResultAdapter<TResult>"
description: "Reads a failure out of a result value without throwing it, so a result that carries its error as data still reaches the exception-interceptor stage."
sidebar:
  label: "IResultAdapter<TResult>"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Reads a failure out of a result value without throwing it, so a result that carries its
error as data still reaches the exception-interceptor stage.

```csharp
public interface IResultAdapter<TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IResultAdapter.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The closed result type this adapter reads. |

## Remarks

Implement this for any carrier that represents failure as a value — the built-in
[`Result`](/ergosfare.docs/api/core-abstractions-results/result) and [`Result<TValue>`](/ergosfare.docs/api/core-abstractions-results/result-1), or a third-party type such as
FluentResults or OneOf. An adapter is bound once per closed result type; a pipeline
whose result type has no adapter skips the probe entirely.

## Methods

### `TryGetException(in TResult, out Exception?)`

```csharp
bool TryGetException(in TResult result, out Exception? exception)
```

Reads the failure carried by `result`, if there is one.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | `TResult` | The result value to inspect. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The carried failure when this method returns `true`; otherwise `null`. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when `result` carries a failure.
