---
title: "UnplannedDispatchException"
description: "Thrown when a dispatch has no compiled plan to run it."
sidebar:
  label: "UnplannedDispatchException"
  order: 8
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Exceptions`](/ergosfare.docs/preview/api/core-abstractions-exceptions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Thrown when a dispatch has no compiled plan to run it. Nothing is dispatched at run time
that was not produced at compile time, so a pipeline the generator did not bake — or one
that no longer matches what it baked — fails loudly instead of running a degraded lane.

```csharp
public class UnplannedDispatchException : InvalidOperationException, ISerializable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Exceptions/UnplannedDispatchException.cs#L15)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Exception`](https://learn.microsoft.com/dotnet/api/system.exception), [`SystemException`](https://learn.microsoft.com/dotnet/api/system.systemexception), [`InvalidOperationException`](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

**Implements:** [`ISerializable`](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Remarks

The message states which construct went unplanned and what to do about it;
[`UnplannedDispatchException.Reason`](/ergosfare.docs/preview/api/core-abstractions-exceptions/unplanneddispatchexception#reason) says why without parsing. A message nobody serves still raises
[`NoHandlerFoundException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/nohandlerfoundexception), and a contested one still raises
[`MultipleHandlerFoundException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/multiplehandlerfoundexception) — this exception covers the pipelines that
would have run, had a plan been compiled for them.

## Constructors

### `UnplannedDispatchException(Type, UnplannedDispatchReason, string)`

```csharp
public UnplannedDispatchException(Type messageType, UnplannedDispatchReason reason, string message)
```

Initializes the exception for one unplanned dispatch.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The message type whose dispatch had no plan. |
| `reason` | [`UnplannedDispatchReason`](/ergosfare.docs/preview/api/core-abstractions-exceptions/unplanneddispatchreason) | Why the dispatch had no plan. |
| `message` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The exception message. |

## Properties

### `MessageType`

```csharp
public Type MessageType { get; }
```

The message type whose dispatch had no plan.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)

### `Reason`

```csharp
public UnplannedDispatchReason Reason { get; }
```

Why the dispatch had no plan.

**Returns**

[`UnplannedDispatchReason`](/ergosfare.docs/preview/api/core-abstractions-exceptions/unplanneddispatchreason)
