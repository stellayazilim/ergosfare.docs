---
title: "ExecutionContextScope"
description: "A child execution-context scope for nested dispatches: the handler opens a scope, passes ExecutionContextScope.Context to the inner mediator call, and dispos…"
sidebar:
  label: "ExecutionContextScope"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

A child execution-context scope for nested dispatches: the handler opens a scope,
passes [`ExecutionContextScope.Context`](/ergosfare.docs/preview/api/core-abstractions/executioncontextscope#context) to the inner mediator call, and disposes the scope when
done. The child starts with clean items (isolation by default) and inherits the
parent's cancellation token, so nested work stays on the outer cancellation chain.
Disposing returns a pooled child to its pool — the context must not be used after the
scope is disposed.

```csharp
public readonly struct ExecutionContextScope : IDisposable
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Context/ExecutionContextScope.cs#L18)

**Implements:** [`IDisposable`](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Remarks

The scope is a struct: `using var scope = ctx.CreateScope();` allocates nothing.
An `Abort()` inside the child only aborts the inner pipeline; nothing ambient is
overwritten, so there is no restore step — the parent context stays untouched in the
caller's parameter.

## Constructors

### `ExecutionContextScope(IExecutionContext)`

```csharp
public ExecutionContextScope(IExecutionContext context)
```

Wraps a child context in a scope. Called by context implementations.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `context` | [`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext) |  |

## Properties

### `Context`

```csharp
public IExecutionContext Context { get; }
```

The child execution context to pass to nested mediator calls.

**Returns**

[`IExecutionContext`](/ergosfare.docs/preview/api/core-abstractions/iexecutioncontext)

## Methods

### `Dispose()`

```csharp
public void Dispose()
```

Ends the scope, returning a pooled child context to its pool. The context must not
be used afterwards.
