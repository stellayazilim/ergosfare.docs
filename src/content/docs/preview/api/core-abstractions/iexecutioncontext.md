---
title: "IExecutionContext"
description: "Represents the execution context for message handling and mediation."
sidebar:
  label: "IExecutionContext"
  order: 3
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents the execution context for message handling and mediation.
Provides access to contextual information such as cancellation tokens, items, pipeline state,
and control over pipeline execution (retry, pause, continue, abort).

```csharp
public interface IExecutionContext
```

[View source](https://github.com/stellayazilim/ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Context/Abstractions/IExecutionContext.cs#L8)

## Properties

### `CancellationToken`

```csharp
CancellationToken CancellationToken { get; }
```

Gets the cancellation token associated with the execution context.
Handlers should periodically check this token and abort execution if cancellation is requested.

**Returns**

[`CancellationToken`](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

### `Items`

```csharp
IDictionary<object, object?> Items { get; }
```

Gets a key/value collection for sharing data within the scope of this execution.
Data is scoped to the current execution and is not shared across different mediation operations.

**Returns**

`IDictionary<object, object>`

## Methods

### `Abort(object?)`

```csharp
void Abort(object? messageResult = null)
```

Aborts the execution of the current mediation operation.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `messageResult` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The message result to set before aborting. Required if the message has a specific result type and the execution is aborted in the pre-handler phase. |

When called, execution is immediately aborted and no further handlers are executed.
If a message result is required, it must be provided to satisfy the result type requirement.

### `CreateScope()`

```csharp
ExecutionContextScope CreateScope()
```

Opens a child execution-context scope for a nested mediator call: the child starts
with clean items and inherits this context's cancellation token. Dispose the scope
when the nested call completes; the child must not be used afterwards.

**Returns**

[`ExecutionContextScope`](/ergosfare.docs/preview/api/core-abstractions/executioncontextscope)

### `Get<TType>(string)`

```csharp
TType Get<TType>(string key) where TType : notnull
```

Retrieves an item of type `TType` from the execution context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TType` | The expected type of the item. |

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
| [`InvalidCastException`](https://learn.microsoft.com/dotnet/api/system.invalidcastexception) | Thrown if the item is not of type `TType`. |

### `Has(string)`

```csharp
bool Has(string key)
```

Determines whether an item with the specified key exists in the execution context.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key to check for existence. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` if an item with the key exists; otherwise, `false`.

### `Set(string, object)`

```csharp
void Set(string key, object item)
```

Stores an item in the execution context associated with the specified key.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key used to identify the item. |
| `item` | [`object`](https://learn.microsoft.com/dotnet/api/system.object) | The object to store in the context. |

### `TryGet<TType>(string, out TType)`

```csharp
bool TryGet<TType>(string key, out TType item)
```

Tries to retrieve an item of type `TType` from the execution context.

**Type parameters**

| Name | Description |
| --- | --- |
| `TType` | The expected type of the item. |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `key` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The key associated with the item. |
| `item` | `TType` | When this method returns, contains the retrieved item if found; otherwise, the default value of `TType`. |

**Returns**

[`bool`](https://learn.microsoft.com/dotnet/api/system.boolean) — `true` if the item was found and is of type `TType`; otherwise, `false`.
