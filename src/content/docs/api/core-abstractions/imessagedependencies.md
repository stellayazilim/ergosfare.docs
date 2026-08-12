---
title: "IMessageDependencies"
description: "Represents the resolved pipeline of a message type: the fixed set of handler and interceptor references per stage, ordered and ready to resolve per dispatch."
sidebar:
  label: "IMessageDependencies"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Represents the resolved pipeline of a message type: the fixed set of handler and
interceptor references per stage, ordered and ready to resolve per dispatch.

```csharp
public interface IMessageDependencies
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IMessageDependencies.cs#L15)

## Remarks

Instances are provider-independent and cached process-wide. Interceptor stages contain
both direct and indirect (assignable message type) registrations merged into a single
list — direct entries first, then indirect, each segment ordered by weight and handler
type name. Main handlers keep the direct/indirect split because mediation strategies
treat them differently (e.g. single-handler validation applies to direct handlers only).

## Properties

### `ExceptionInterceptors`

```csharp
IReadOnlyList<IHandlerReference<IExceptionInterceptor>> ExceptionInterceptors { get; }
```

Gets the exception interceptors for the message (direct first, then indirect).

**Returns**

`IReadOnlyList<IHandlerReference<IExceptionInterceptor>>`

### `FinalInterceptors`

```csharp
IReadOnlyList<IHandlerReference<IFinalInterceptor>> FinalInterceptors { get; }
```

Gets the final interceptors for the message (direct first, then indirect).

**Returns**

`IReadOnlyList<IHandlerReference<IFinalInterceptor>>`

### `Handlers`

```csharp
IReadOnlyList<IHandlerReference<IHandler>> Handlers { get; }
```

Gets the direct main handlers for the message.

**Returns**

`IReadOnlyList<IHandlerReference<IHandler>>`

### `IndirectHandlers`

```csharp
IReadOnlyList<IHandlerReference<IHandler>> IndirectHandlers { get; }
```

Gets the indirect main handlers for the message (registered for an assignable message type).

**Returns**

`IReadOnlyList<IHandlerReference<IHandler>>`

### `PostInterceptors`

```csharp
IReadOnlyList<IHandlerReference<IPostInterceptor>> PostInterceptors { get; }
```

Gets the post-interceptors for the message (direct first, then indirect).

**Returns**

`IReadOnlyList<IHandlerReference<IPostInterceptor>>`

### `PreInterceptors`

```csharp
IReadOnlyList<IHandlerReference<IPreInterceptor>> PreInterceptors { get; }
```

Gets the pre-interceptors for the message (direct first, then indirect).

**Returns**

`IReadOnlyList<IHandlerReference<IPreInterceptor>>`
