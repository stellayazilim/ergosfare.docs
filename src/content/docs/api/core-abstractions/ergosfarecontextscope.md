---
title: "ErgosfareContextScope"
description: "A child execution-context scope for nested dispatches: the handler opens a scope, passes ErgosfareContextScope.Context to the inner mediator call, and dispos…"
sidebar:
  label: "ErgosfareContextScope"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A child execution-context scope for nested dispatches: the handler opens a scope,
passes [`ErgosfareContextScope.Context`](/ergosfare.docs/api/core-abstractions/ergosfarecontextscope#context) to the inner mediator call, and disposes the scope when
done. The child starts with clean items (isolation by default) and inherits the
parent's cancellation token, so nested work stays on the outer cancellation chain.
Disposing returns the child to the pool — the context must not be used after the
scope is disposed.

```csharp
public readonly struct ErgosfareContextScope : IDisposable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Context/ErgosfareContextScope.cs#L17)

**Implements:** [`IDisposable`](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Remarks

The scope is a struct: `using var scope = ctx.CreateScope();` allocates nothing.
An `Abort()` inside the child only aborts the inner pipeline; nothing ambient is
overwritten, so there is no restore step — the parent context stays untouched in the
caller's parameter.

## Properties

### `Context`

```csharp
public ErgosfareContext Context { get; }
```

The child execution context to pass to nested mediator calls.

**Returns**

[`ErgosfareContext`](/ergosfare.docs/api/core-abstractions/ergosfarecontext)

## Methods

### `Dispose()`

```csharp
public void Dispose()
```

Ends the scope, returning the child context to the pool. The context must not
be used afterwards.

Null-conditional for the one shape that has no context to return: a
`default(ErgosfareContextScope)` that never came from `CreateScope()`.
Disposing that stays the no-op it has always been rather than throwing out of a
`using` and masking whatever the block was really doing.
