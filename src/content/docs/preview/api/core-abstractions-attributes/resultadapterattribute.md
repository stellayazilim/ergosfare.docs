---
title: "ResultAdapterAttribute"
description: "Declares, on a message type, the IResultAdapter<TResult> that surfaces value-carried failures out of the message's pipeline result — the declarative, per-mes…"
sidebar:
  label: "ResultAdapterAttribute"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Declares, on a message type, the [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) that surfaces
value-carried failures out of the message's pipeline result — the declarative,
per-message binding: no runtime registration, no adapter list. The framework's own
[`Result`](/ergosfare.docs/preview/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions/result-1) carriers need no annotation (they
bind to their built-in adapters); an unannotated message with any other result type
performs no probing at all.

```csharp
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface)]
public sealed class ResultAdapterAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/ResultAdapterAttribute.cs#L19)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

The adapter type must implement [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) for the message's
declared result type and expose a public parameterless constructor; one instance is
created per message type and cached. The source generator bakes the binding into the
message's execution plan and fails the build when the adapter does not fit the declared
result (planned diagnostic ERGOSG011).

## Constructors

### `ResultAdapterAttribute(Type)`

```csharp
public ResultAdapterAttribute(Type adapterType)
```

Declares, on a message type, the [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) that surfaces
value-carried failures out of the message's pipeline result — the declarative,
per-message binding: no runtime registration, no adapter list. The framework's own
[`Result`](/ergosfare.docs/preview/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions/result-1) carriers need no annotation (they
bind to their built-in adapters); an unannotated message with any other result type
performs no probing at all.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

The adapter type must implement [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) for the message's
declared result type and expose a public parameterless constructor; one instance is
created per message type and cached. The source generator bakes the binding into the
message's execution plan and fails the build when the adapter does not fit the declared
result (planned diagnostic ERGOSG011).

## Properties

### `AdapterType`

```csharp
public Type AdapterType { get; }
```

The adapter type bound to the message's pipeline result.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
