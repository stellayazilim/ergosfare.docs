---
title: "ErgosfareContextScope"
description: "The child context of a nested dispatch, together with the lifetime that ends it."
sidebar:
  label: "ErgosfareContextScope"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The child context of a nested dispatch, together with the lifetime that ends it. Open
one with [`ErgosfareContext.CreateScope()`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext#createscope), pass [`ErgosfareContextScope.Context`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontextscope#context) to the
inner mediator call, and dispose the scope when that call completes.

```csharp
public readonly struct ErgosfareContextScope : IDisposable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Context/ErgosfareContextScope.cs#L14)

**Implements:** [`IDisposable`](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Remarks

The child starts with no items, so nested work is isolated by default, and inherits the
parent's cancellation token. Disposing recycles the child, which must not be used
afterwards; the parent context is untouched throughout, including when the nested
pipeline aborts. The scope is a struct, so opening one allocates nothing.

## Properties

### `Context`

```csharp
public ErgosfareContext Context { get; }
```

The child context to pass to the nested dispatch.

**Returns**

[`ErgosfareContext`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext)

## Methods

### `Dispose()`

```csharp
public void Dispose()
```

Ends the scope and recycles the child context, which must not be used afterwards.

Disposing a `default(ErgosfareContextScope)` — one that never came from
[`ErgosfareContext.CreateScope()`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext#createscope) and so holds no context — does nothing,
rather than throwing out of the `using` block.
