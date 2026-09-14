---
title: "ErgosfareContext"
description: "The execution context of one dispatch: the cancellation token, the items participants share with each other, and the means to open a nested scope or stop the…"
sidebar:
  label: "ErgosfareContext"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The execution context of one dispatch: the cancellation token, the items participants
share with each other, and the means to open a nested scope or stop the pipeline. Every
handler and interceptor receives it as its last parameter.

```csharp
public sealed class ErgosfareContext
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/Context/ErgosfareContext.cs#L22)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object)

## Remarks

A context is valid only for the dispatch it belongs to. Dispatches rent contexts from a
pool and return them once the pipeline completes, so holding a reference past the
handler's completion observes another dispatch's state. A context constructed directly
is never pooled, which is how a caller that wants to keep the items dictionary builds
one.

The items dictionary is allocated on first write. Every read path — [`ErgosfareContext.Has(string)`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#hasstring),
[`ErgosfareContext.Get<TType>(string)`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#getttypestring), [`ErgosfareContext.TryGet<TType>(string, out TType)`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#trygetttypestring-out-ttype) — leaves it unallocated.

## Constructors

### `ErgosfareContext(IDictionary<object, object?>?, CancellationToken)`

```csharp
public ErgosfareContext(IDictionary<object, object?>? items = null, CancellationToken cancellationToken = default)
```

The execution context of one dispatch: the cancellation token, the items participants
share with each other, and the means to open a nested scope or stop the pipeline. Every
handler and interceptor receives it as its last parameter.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `items` | `IDictionary<object, object>` |  |
| `cancellationToken` | [`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) |  |

A context is valid only for the dispatch it belongs to. Dispatches rent contexts from a
pool and return them once the pipeline completes, so holding a reference past the
handler's completion observes another dispatch's state. A context constructed directly
is never pooled, which is how a caller that wants to keep the items dictionary builds
one.

The items dictionary is allocated on first write. Every read path — [`ErgosfareContext.Has(string)`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#hasstring),
[`ErgosfareContext.Get<TType>(string)`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#getttypestring), [`ErgosfareContext.TryGet<TType>(string, out TType)`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#trygetttypestring-out-ttype) — leaves it unallocated.

## Properties

### `CancellationToken`

```csharp
public CancellationToken CancellationToken { get; }
```

The cancellation token for this dispatch. Handlers should observe it and pass it to
any work they start.

**Returns**

[`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

### `Items`

```csharp
public IDictionary<object, object?> Items { get; }
```

The items shared between the participants of this dispatch. The dictionary is
allocated on first access and belongs to this dispatch alone.

**Returns**

`IDictionary<object, object>`

## Methods

### `Abort()`

```csharp
public void Abort()
```

Ends the dispatch: nothing after the calling participant runs, and the caller is
told by [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception).

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) | Always; this is how the abort travels. |

Stopping stops everything downstream — the rest of the current stage, the exception
stage, and the final stage alike. An abort is not a failure, so the exception
interceptors do not see it, and there is no result for the pipeline to produce,
which is why the signal carries none.

Nothing swallows the signal on its way out: the strategies and generated plans let
it pass through their own exception handling untouched, so the caller receives the
participant's signal with its original stack. Callers that dispatch abortable
pipelines should expect it.

### `Abort(string?, object?)`

```csharp
public void Abort(string? reason, object? value)
```

Ends the dispatch, recording why and handing the caller a value to act on. See
[`ErgosfareContext.Abort()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#abort).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the dispatch is ending; arrives on [`ExecutionAbortedException.Reason`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception#reason). |
| `value` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The value for the caller to act on; arrives on [`ExecutionAbortedException.Value`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception#value). |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) | Always; this is how the abort travels. |

Stopping stops everything downstream — the rest of the current stage, the exception
    stage, and the final stage alike. An abort is not a failure, so the exception
    interceptors do not see it, and there is no result for the pipeline to produce,
    which is why the signal carries none.

    Nothing swallows the signal on its way out: the strategies and generated plans let
    it pass through their own exception handling untouched, so the caller receives the
    participant's signal with its original stack. Callers that dispatch abortable
    pipelines should expect it.

### `Abort(string?)`

```csharp
public void Abort(string? reason)
```

Ends the dispatch, recording why. See [`ErgosfareContext.Abort()`](/ergosfare.docs/api/core-abstractions/ergosfarecontext#abort).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `reason` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | Why the dispatch is ending; arrives on [`ExecutionAbortedException.Reason`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception#reason). |

**Exceptions**

| Type | Condition |
| --- | --- |
| [`ExecutionAbortedException`](/ergosfare.docs/api/core-abstractions-exceptions/executionabortedexception) | Always; this is how the abort travels. |

Stopping stops everything downstream — the rest of the current stage, the exception
    stage, and the final stage alike. An abort is not a failure, so the exception
    interceptors do not see it, and there is no result for the pipeline to produce,
    which is why the signal carries none.

    Nothing swallows the signal on its way out: the strategies and generated plans let
    it pass through their own exception handling untouched, so the caller receives the
    participant's signal with its original stack. Callers that dispatch abortable
    pipelines should expect it.

### `CreateScope()`

```csharp
public ErgosfareContextScope CreateScope()
```

Opens a child context for a nested dispatch. The child starts with no items and
inherits this context's cancellation token, keeping nested work on the same
cancellation chain.

**Returns**

[`ErgosfareContextScope`](/ergosfare.docs/api/core-abstractions/ergosfarecontextscope) — A scope holding the child context. Dispose it when the nested dispatch completes; the child must not be used afterwards.

### `Get<TType>(string)`

```csharp
public TType Get<TType>(string key) where TType : notnull
```

Returns the item stored under `key`, cast to
`TType`.

**Type parameters**

| Name | Description |
| --- | --- |
| `TType` | The type to cast the stored item to. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key to read. |

**Returns**

`TType` — The stored item.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`KeyNotFoundException`](https://learn.microsoft.com/dotnet/api/system.collections.generic.keynotfoundexception) | Nothing is stored under `key`. |
| [`InvalidCastException`](https://learn.microsoft.com/dotnet/api/system.invalidcastexception) | The stored item is not a `TType`. |

### `Has(string)`

```csharp
public bool Has(string key)
```

Reports whether an item is stored under `key`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key to look for. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when an item is stored under that key.

### `Set(string, object)`

```csharp
public void Set(string key, object item)
```

Stores `item` under `key`, replacing whatever was
stored under that key.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key to store under. |
| `item` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The value to store. |

### `TryGet<TType>(string, out TType)`

```csharp
public bool TryGet<TType>(string key, out TType item)
```

Reads the item stored under `key` when there is one.

**Type parameters**

| Name | Description |
| --- | --- |
| `TType` | The type to cast the stored item to. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key to read. |
| `item` | `TType` | The stored item when this method returns `true`; otherwise the default value of `TType`. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` when an item is stored under that key.

**Exceptions**

| Type | Condition |
| --- | --- |
| [`InvalidCastException`](https://learn.microsoft.com/dotnet/api/system.invalidcastexception) | An item is stored under `key` but is not a `TType`. A stored item of the wrong type is a failure, not a miss — this method returns `false` only when the key is absent. |
