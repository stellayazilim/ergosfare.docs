---
title: "PipelineInvokableAttribute"
description: "Marks a method to be called from inside every dispatch pipeline its filters admit, at the given PipelineInvokableAttribute.Hook."
sidebar:
  label: "PipelineInvokableAttribute"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Marks a method to be called from inside every dispatch pipeline its filters admit, at the
given [`PipelineInvokableAttribute.Hook`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute#hook).

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP002")]
[AttributeUsage(AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
public sealed class PipelineInvokableAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/PipelineInvokableAttribute.cs#L65)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

The method observes: it reads the message and the execution context and does its own
work. It cannot rewrite the message or produce a result — those belong to pre- and
post-interceptors. What it can still do, it does through the context: `Abort()`
stops the pipeline, and throwing routes into the exception stages.

One attribute covers every kind of pipeline because no hook carries a result: the points
a plugin can address belong to the pipeline itself, not to what it produces.

Declare the method generic over the message and it is closed over the concrete type at
each site, so a value-typed message is not boxed. The constraint doubles as a filter: a
method constrained `where TMessage : ICacheableQuery` reaches only pipelines whose
message satisfies it, and costs nothing elsewhere because nothing is emitted there.
Parameters are matched by what they are, in any order — the message, the
`ErgosfareContext`, and anything else resolved from the dispatching provider.

**The declaring service is a singleton and cannot be anything else.** It is registered
with `TryAddSingleton`, so it is constructed once per container and a dispatch never
pays to build one. A hook method must therefore keep no per-dispatch state on the
service: every dispatch in flight shares the instance. A transient registration would not
help either, since two hooks are two separate resolutions and would see two different
objects.

State that must travel between hooks — a timestamp, a scope, a correlation id — belongs
in `ErgosfareContext.Items`, which exists per dispatch for exactly this. A
per-dispatch *dependency* is a different matter: declare it as a parameter and it
is resolved from the dispatching provider at the call site, so a scoped service reaches a
singleton hook without the service ever holding one.

The return type decides how the call is made. A `void` method is called plainly and
never enters an async state machine, which is what makes a counter or a log line cheap; a
method returning `ValueTask` is awaited. `void` alone would not be enough,
since it cannot be awaited and `async void` loses both completion and failure.

Nothing at all is emitted for a plugin that is not referenced, so an application without
plugins gets exactly the pipeline it had before.

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

Marks a method to be called from inside every dispatch pipeline its filters admit, at the
given [`PipelineInvokableAttribute.Hook`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute#hook).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `hook` | [`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook) | The point in the pipeline to call the method at. |

The method observes: it reads the message and the execution context and does its own
work. It cannot rewrite the message or produce a result — those belong to pre- and
post-interceptors. What it can still do, it does through the context: `Abort()`
stops the pipeline, and throwing routes into the exception stages.

One attribute covers every kind of pipeline because no hook carries a result: the points
a plugin can address belong to the pipeline itself, not to what it produces.

Declare the method generic over the message and it is closed over the concrete type at
each site, so a value-typed message is not boxed. The constraint doubles as a filter: a
method constrained `where TMessage : ICacheableQuery` reaches only pipelines whose
message satisfies it, and costs nothing elsewhere because nothing is emitted there.
Parameters are matched by what they are, in any order — the message, the
`ErgosfareContext`, and anything else resolved from the dispatching provider.

**The declaring service is a singleton and cannot be anything else.** It is registered
with `TryAddSingleton`, so it is constructed once per container and a dispatch never
pays to build one. A hook method must therefore keep no per-dispatch state on the
service: every dispatch in flight shares the instance. A transient registration would not
help either, since two hooks are two separate resolutions and would see two different
objects.

State that must travel between hooks — a timestamp, a scope, a correlation id — belongs
in `ErgosfareContext.Items`, which exists per dispatch for exactly this. A
per-dispatch *dependency* is a different matter: declare it as a parameter and it
is resolved from the dispatching provider at the call site, so a scoped service reaches a
singleton hook without the service ever holding one.

The return type decides how the call is made. A `void` method is called plainly and
never enters an async state machine, which is what makes a counter or a log line cheap; a
method returning `ValueTask` is awaited. `void` alone would not be enough,
since it cannot be awaited and `async void` loses both completion and failure.

Nothing at all is emitted for a plugin that is not referenced, so an application without
plugins gets exactly the pipeline it had before.

## Properties

### `Hook`

```csharp
public Hook Hook { get; }
```

The point in the pipeline this method is called at.

**Returns**

[`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook)
