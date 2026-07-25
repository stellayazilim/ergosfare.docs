---
title: "IMessageMediationStrategy<TMessage, TMessageResult>"
description: "Defines a strategy for mediating messages of a specific type and producing results of a specific type."
sidebar:
  label: "IMessageMediationStrategy<TMessage, TMessageResult>"
  order: 7
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Defines a strategy for mediating messages of a specific type and producing results of a specific type.

```csharp
public interface IMessageMediationStrategy<in TMessage, out TMessageResult> where TMessage : notnull
```

[View source](https://github.com/stellayazilim/ergosfare/blob/main/src/Stella.Ergosfare.Core.Abstractions/IMessageMediationStrategy.cs#L15)

**Type parameters**

| Name | Description |
| --- | --- |
| `TMessage` | The type of message to be mediated. |
| `TMessageResult` | The type of result produced by the mediation process. |

## Remarks

Message mediation strategies encapsulate the logic for processing messages through the handling pipeline.
Different strategies can implement different patterns such as single handler execution, broadcast to multiple
handlers,
or more complex orchestration of handlers. The strategy determines how pre-handlers, main handlers, post-handlers,
and error handlers are invoked during the mediation process.

## Methods

### `Mediate(TMessage, IMessageDependencies, IExecutionContext, IServiceProvider)`

```csharp
TMessageResult Mediate(TMessage message, IMessageDependencies messageDependencies, IExecutionContext executionContext, IServiceProvider serviceProvider)
```

Mediates a message by executing the appropriate handlers and producing a result.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `message` | `TMessage` | The message to be mediated. |
| `messageDependencies` | [`IMessageDependencies`](/ergosfare.docs/api/core-abstractions/imessagedependencies) | The dependencies required for message handling, including handlers, pre-handlers, post-handlers, and error handlers. |
| `executionContext` | [`IExecutionContext`](/ergosfare.docs/api/core-abstractions/iexecutioncontext) | The context in which the mediation is executed, providing access to cancellation tokens, shared data, and other execution-related information. The context is a pure data carrier between handlers; it plays no part in handler resolution. |
| `serviceProvider` | [`IServiceProvider`](https://learn.microsoft.com/dotnet/api/system.iserviceprovider) | The provider of the scope the dispatch runs in. The strategy resolves handler and interceptor instances from it at invocation time — resolution is the dispatcher's responsibility. |

**Returns**

`TMessageResult` — The result of the mediation process, of type `TMessageResult`.

The implementation of this method defines the specific pattern for mediating messages, such as
executing a single handler, broadcasting to multiple handlers, or implementing more complex orchestration logic.
