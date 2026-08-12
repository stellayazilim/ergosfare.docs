---
title: "IResultAdapter<TResult>"
description: "Extracts a value-carried failure out of a pipeline result of type TResult without throwing it — the bridge that lets result-pattern values (the framework's o…"
sidebar:
  label: "IResultAdapter<TResult>"
  order: 12
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Extracts a value-carried failure out of a pipeline result of type
`TResult` without throwing it — the bridge that lets result-pattern
values (the framework's own [`Result`](/ergosfare.docs/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1), or foreign
carriers such as FluentResults/OneOf) trigger the exception-interceptor stage.

```csharp
public interface IResultAdapter<TResult>
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IResultAdapter.cs#L16)

**Type parameters**

| Name | Description |
| --- | --- |
| `TResult` | The closed pipeline result type the adapter understands. |

## Remarks

Typed on purpose: the previous object-based contract boxed every value-typed result on
every probe and re-discovered its target by `CanAdapt` checks. This shape binds per
closed result type — resolved once per pipeline, called devirtualized, and passed by
readonly reference so nothing is copied or boxed. A pipeline whose result type has no
adapter pays nothing at all.

## Methods

### `TryGetException(in TResult, out Exception?)`

```csharp
bool TryGetException(in TResult result, out Exception? exception)
```

Attempts to extract a failure from `result` without throwing.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `result` | `TResult` | The pipeline result to inspect. |
| `exception` | [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception) | The carried failure, when present. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when a failure was extracted; otherwise `false`.
