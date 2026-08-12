---
title: "ErgosfareContext"
description: "The execution context for message handling and mediation: contextual information such as the cancellation token and per-dispatch items, plus control over pip…"
sidebar:
  label: "ErgosfareContext"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The execution context for message handling and mediation: contextual information such as
the cancellation token and per-dispatch items, plus control over pipeline execution
(scoping and abort). Handlers and interceptors receive it as their last parameter.

```csharp
public sealed class ErgosfareContext
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Context/ErgosfareContext.cs#L27)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

The type is sealed and taken concretely by every handler and interceptor contract, so member
access is a direct call — there is no interface to dispatch through.

Instances are pooled: a dispatch rents one from `ErgosfareContextPool` and returns
it when the pipeline completes, so a context is only valid for the duration of its dispatch —
user code must not hold a reference past the handler's completion. The items dictionary is
created lazily on first write and kept (cleared) across reuses; the read paths never allocate
it.

A context constructed directly (rather than rented) is never pooled and costs exactly what an
unpooled context did; this is how tests and callers that want to own the items dictionary
build one.

## Constructors

### `ErgosfareContext(IDictionary<object, object?>?, CancellationToken)`

```csharp
public ErgosfareContext(IDictionary<object, object?>? items = null, CancellationToken cancellationToken = default)
```

The execution context for message handling and mediation: contextual information such as
the cancellation token and per-dispatch items, plus control over pipeline execution
(scoping and abort). Handlers and interceptors receive it as their last parameter.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `items` | `IDictionary<object, object>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

The type is sealed and taken concretely by every handler and interceptor contract, so member
access is a direct call — there is no interface to dispatch through.

Instances are pooled: a dispatch rents one from `ErgosfareContextPool` and returns
it when the pipeline completes, so a context is only valid for the duration of its dispatch —
user code must not hold a reference past the handler's completion. The items dictionary is
created lazily on first write and kept (cleared) across reuses; the read paths never allocate
it.

A context constructed directly (rather than rented) is never pooled and costs exactly what an
unpooled context did; this is how tests and callers that want to own the items dictionary
build one.

## Properties

### `CancellationToken`

```csharp
public CancellationToken CancellationToken { get; }
```

Gets the cancellation token associated with the execution context.
Handlers should periodically check this token and abort execution if cancellation is
requested, and propagate it to any work they start.

**Returns**

[`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

### `Items`

```csharp
public IDictionary<object, object?> Items { get; }
```

Gets a key/value collection for sharing data within the scope of this execution.
Data is scoped to the current execution and is not shared across different mediation
operations. The backing dictionary is created lazily on first access so dispatches that
never touch shared items pay no allocation for it.

**Returns**

`IDictionary<object, object>`

## Methods

### `Abort()`

```csharp
public void Abort()
```

Ends the current mediation: nothing after the calling participant runs, and the
caller is told, by [`ExecutionAbortedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception).

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ExecutionAbortedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception) | Always — this is how the abort travels. |

The dispatch was asked for by the call site, so the call site is who hears that it
did not happen — a pipeline whose participants can abort is one the caller wraps in
a `try`. The alternative, returning the result type's default, is
indistinguishable from a handler that legitimately produced nothing.

Stopping means stopping: nothing downstream runs. Not the rest of the current stage,
not the exception stage — an abort is not a failure and exception interceptors exist
to handle failures — and not the final stage either. There is no result to expect
from a pipeline that was cut, which is why the signal carries none.

Nothing catches this on the way out. The stages that do have exception handling —
the strategies and the emitted plans — filter it through untouched and skip their
own remaining work, so what the caller receives is the participant's own signal with
its stack intact.

### `Abort(string?, object?)`

```csharp
public void Abort(string? reason, object? value)
```

Stops the pipeline, saying why and handing the caller something to act on. See
[`ErgosfareContext.Abort()`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext#abort).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the pipeline is being stopped; arrives on [`ExecutionAbortedException.Reason`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception#reason). |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | What the caller should act on; arrives on [`ExecutionAbortedException.Value`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception#value). |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ExecutionAbortedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception) | Always — this is how the abort travels. |

The dispatch was asked for by the call site, so the call site is who hears that it
    did not happen — a pipeline whose participants can abort is one the caller wraps in
    a `try`. The alternative, returning the result type's default, is
    indistinguishable from a handler that legitimately produced nothing.

    Stopping means stopping: nothing downstream runs. Not the rest of the current stage,
    not the exception stage — an abort is not a failure and exception interceptors exist
    to handle failures — and not the final stage either. There is no result to expect
    from a pipeline that was cut, which is why the signal carries none.

    Nothing catches this on the way out. The stages that do have exception handling —
    the strategies and the emitted plans — filter it through untouched and skip their
    own remaining work, so what the caller receives is the participant's own signal with
    its stack intact.

### `Abort(string?)`

```csharp
public void Abort(string? reason)
```

Stops the pipeline, saying why. See [`ErgosfareContext.Abort()`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontext#abort).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the pipeline is being stopped; arrives on [`ExecutionAbortedException.Reason`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception#reason). |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ExecutionAbortedException`](/ergosfare.docs/preview/api/core-abstractions-exceptions/executionabortedexception) | Always — this is how the abort travels. |

The dispatch was asked for by the call site, so the call site is who hears that it
    did not happen — a pipeline whose participants can abort is one the caller wraps in
    a `try`. The alternative, returning the result type's default, is
    indistinguishable from a handler that legitimately produced nothing.

    Stopping means stopping: nothing downstream runs. Not the rest of the current stage,
    not the exception stage — an abort is not a failure and exception interceptors exist
    to handle failures — and not the final stage either. There is no result to expect
    from a pipeline that was cut, which is why the signal carries none.

    Nothing catches this on the way out. The stages that do have exception handling —
    the strategies and the emitted plans — filter it through untouched and skip their
    own remaining work, so what the caller receives is the participant's own signal with
    its stack intact.

### `CreateScope()`

```csharp
public ErgosfareContextScope CreateScope()
```

Opens a child execution-context scope for a nested mediator call: the child starts
with clean items and inherits this context's cancellation token. Dispose the scope
when the nested call completes; the child must not be used afterwards.

**Returns**

[`ErgosfareContextScope`](/ergosfare.docs/preview/api/core-abstractions/ergosfarecontextscope)

### `Get<TType>(string)`

```csharp
public TType Get<TType>(string key) where TType : notnull
```

Retrieves an item of the specified type from the context using the given key.
Never allocates the backing dictionary.

**Type parameters**

| Name | Description |
| --- | --- |
| `TType` | The type of the item to retrieve. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key associated with the item. |

**Returns**

`TType` — The item associated with the specified key.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`KeyNotFoundException`](https://learn.microsoft.com/dotnet/api/system.collections.generic.keynotfoundexception) | Thrown if no item exists with the specified key. |
| [`InvalidCastException`](https://learn.microsoft.com/dotnet/api/system.invalidcastexception) | Thrown if the stored item cannot be cast to `TType`. |

### `Has(string)`

```csharp
public bool Has(string key)
```

Checks whether an item with the specified key exists in the context.
Never allocates the backing dictionary: an empty context answers `false`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key to check for existence. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` if an item with the given key exists; otherwise, `false`.

### `Set(string, object)`

```csharp
public void Set(string key, object item)
```

Stores an item in the execution context under the specified key.
If an item with the same key already exists, it will be overwritten.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The unique key to associate with the item. |
| `item` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The object to store in the context. |

### `TryGet<TType>(string, out TType)`

```csharp
public bool TryGet<TType>(string key, out TType item)
```

Attempts to retrieve an item of the specified type from the context using the
given key. Never allocates the backing dictionary.

**Type parameters**

| Name | Description |
| --- | --- |
| `TType` | The type of the item expected. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key associated with the item. |
| `item` | `TType` | When this method returns, contains the retrieved item if found and of the correct type; otherwise, the default value for `TType`. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` if an item with the given key exists and is of the correct type; otherwise, `false`.
