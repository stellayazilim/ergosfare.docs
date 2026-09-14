---
title: "ResultAdapterAttribute"
description: "Binds a message type to the IResultAdapter<TResult> that reads value-carried failures out of its pipeline result."
sidebar:
  label: "ResultAdapterAttribute"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Attributes`](/ergosfare.docs/preview/api/core-abstractions-attributes)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Binds a message type to the [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) that reads
value-carried failures out of its pipeline result.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP001")]
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Struct|AttributeTargets.Interface)]
public sealed class ResultAdapterAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Attributes/ResultAdapterAttribute.cs#L26)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

The adapter type must implement [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) for the message's
declared result type and expose a public parameterless constructor; one instance is
created per message type and reused. A message whose result is the built-in
[`Result`](/ergosfare.docs/preview/api/core-abstractions-results/result) or [`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/result-1) needs no annotation — those bind to
their own adapters — and a message with any other result type and no annotation is never
probed for failures.

The attribute is inherited, so an annotation on a base message type covers the messages
derived from it. An adapter that cannot serve the declared result type — or that the
generated registration cannot name — fails the build with ERGO011. The binding itself is
resolved at compile time and written into the generated adapter table, so this annotation
is read by the generator rather than at run time.

## Constructors

### `ResultAdapterAttribute(Type)`

```csharp
public ResultAdapterAttribute(Type adapterType)
```

Binds a message type to the [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) that reads
value-carried failures out of its pipeline result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `adapterType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) |  |

The adapter type must implement [`IResultAdapter<TResult>`](/ergosfare.docs/preview/api/core-abstractions/iresultadapter-1) for the message's
declared result type and expose a public parameterless constructor; one instance is
created per message type and reused. A message whose result is the built-in
[`Result`](/ergosfare.docs/preview/api/core-abstractions-results/result) or [`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/result-1) needs no annotation — those bind to
their own adapters — and a message with any other result type and no annotation is never
probed for failures.

The attribute is inherited, so an annotation on a base message type covers the messages
derived from it. An adapter that cannot serve the declared result type — or that the
generated registration cannot name — fails the build with ERGO011. The binding itself is
resolved at compile time and written into the generated adapter table, so this annotation
is read by the generator rather than at run time.

## Properties

### `AdapterType`

```csharp
public Type AdapterType { get; }
```

The adapter type bound to this message's pipeline result.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

Carried for what reads the annotation — the generator, and anything inspecting the
declaration. Nothing constructs it from here, which is why it needs no trimming
annotation to survive.
