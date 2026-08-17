---
title: "PipelineInvokableAttribute"
description: "Marks a method whose call the generator emits directly into every dispatch plan the method's filters admit, at the given PipelineInvokableAttribute.Hook."
sidebar:
  label: "PipelineInvokableAttribute"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Marks a method whose call the generator emits directly into every dispatch plan the
method's filters admit, at the given [`PipelineInvokableAttribute.Hook`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute#hook).

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
public sealed class PipelineInvokableAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/PipelineInvokableAttribute.cs#L71)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

The method is an **observer**: it reads the message and the execution context, and
does its own work. It does not rewrite the message or produce a result — that is what pre
and post interceptors are for, and a second way to do it would only be a second set of
semantics to keep consistent. What it can do beyond observing, it does through the
context: `Abort()` stops the pipeline, and throwing routes to the exception stages.

One attribute serves every pipeline, resultless or result-producing, because no hook
carries a result: the three points a plugin can address are properties of the pipeline
itself, not of what it produces.

Declare the method generic over the message and the generator closes it over the concrete
type at each emission site — no boxing for value-typed messages, and the constraint
doubles as a filter: a method constrained `where TMessage : ICacheableQuery` is
emitted only into plans whose message satisfies it, and costs nothing anywhere else
because nothing is emitted there.

Parameters are bound by what they are, in any order: the message type parameter, the
`ErgosfareContext`, and anything else from the dispatching provider.

**The declaring service is a singleton, and that is not configurable.** The generated
module registers it with `TryAddSingleton`, so it is resolved once per container and
a dispatch never pays for constructing one. Which means a hook method must not keep
per-dispatch state on the service: every dispatch in flight shares the instance. Two hooks
are also two separate resolutions, so a transient registration would not rescue it — the
second hook would get a different object than the first.

State that has to travel between hooks — a timestamp, a scope, a correlation id — belongs
in `ErgosfareContext.Items`, which is created per dispatch and is the pipeline's own
channel for exactly this. A per-dispatch *dependency* is a different question and has
its own answer: declare it as a parameter, and it is resolved from the dispatching
provider at the call site, so a scoped service reaches a singleton hook without the
service ever capturing one.

The return type decides how the call is emitted. A `void` method is emitted as a
plain call and never enters an async state machine — which is what makes a synchronous
counter or a log line genuinely cheap. A method returning `ValueTask` is emitted
with `await`. `void` alone would not do: it is not awaitable, and
`async void` loses both the completion and the exception.

Nothing is emitted for a plugin that is not referenced, so a consumer with no plugins
gets the plan it would have had before this attribute existed.

## Examples


```csharp
[PipelineInvokable(Hook.Start)]
public void Began<TMessage>(TMessage message, ErgosfareContext context)
    => context.Items["started"] = Stopwatch.GetTimestamp();

[PipelineInvokable(Hook.Finish)]
public void Ended<TMessage>(TMessage message, ErgosfareContext context)
    => _duration.Record(Stopwatch.GetElapsedTime((long) context.Items["started"]).TotalMilliseconds);
```


## Constructors

### `PipelineInvokableAttribute(Hook)`

```csharp
public PipelineInvokableAttribute(Hook hook)
```

Marks a method whose call the generator emits directly into every dispatch plan the
method's filters admit, at the given [`PipelineInvokableAttribute.Hook`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute#hook).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `hook` | [`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook) |  |

The method is an **observer**: it reads the message and the execution context, and
does its own work. It does not rewrite the message or produce a result — that is what pre
and post interceptors are for, and a second way to do it would only be a second set of
semantics to keep consistent. What it can do beyond observing, it does through the
context: `Abort()` stops the pipeline, and throwing routes to the exception stages.

One attribute serves every pipeline, resultless or result-producing, because no hook
carries a result: the three points a plugin can address are properties of the pipeline
itself, not of what it produces.

Declare the method generic over the message and the generator closes it over the concrete
type at each emission site — no boxing for value-typed messages, and the constraint
doubles as a filter: a method constrained `where TMessage : ICacheableQuery` is
emitted only into plans whose message satisfies it, and costs nothing anywhere else
because nothing is emitted there.

Parameters are bound by what they are, in any order: the message type parameter, the
`ErgosfareContext`, and anything else from the dispatching provider.

**The declaring service is a singleton, and that is not configurable.** The generated
module registers it with `TryAddSingleton`, so it is resolved once per container and
a dispatch never pays for constructing one. Which means a hook method must not keep
per-dispatch state on the service: every dispatch in flight shares the instance. Two hooks
are also two separate resolutions, so a transient registration would not rescue it — the
second hook would get a different object than the first.

State that has to travel between hooks — a timestamp, a scope, a correlation id — belongs
in `ErgosfareContext.Items`, which is created per dispatch and is the pipeline's own
channel for exactly this. A per-dispatch *dependency* is a different question and has
its own answer: declare it as a parameter, and it is resolved from the dispatching
provider at the call site, so a scoped service reaches a singleton hook without the
service ever capturing one.

The return type decides how the call is emitted. A `void` method is emitted as a
plain call and never enters an async state machine — which is what makes a synchronous
counter or a log line genuinely cheap. A method returning `ValueTask` is emitted
with `await`. `void` alone would not do: it is not awaitable, and
`async void` loses both the completion and the exception.

Nothing is emitted for a plugin that is not referenced, so a consumer with no plugins
gets the plan it would have had before this attribute existed.

## Properties

### `Hook`

```csharp
public Hook Hook { get; }
```

The pipeline point the call is emitted at.

**Returns**

[`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook)
