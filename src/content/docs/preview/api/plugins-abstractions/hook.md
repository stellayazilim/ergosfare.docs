---
title: "Hook"
description: "Where in a generated dispatch plan a PipelineInvokableAttribute method's call is emitted."
sidebar:
  label: "Hook"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Where in a generated dispatch plan a [`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute) method's
call is emitted.

```csharp
public enum Hook
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/Hook.cs#L37)

## Remarks

Every member names a point that exists in **every** pipeline and costs it nothing: all
four are straight-line positions, so a plan never grows a `try`, a `catch` or a
`finally` because a plugin asked for one. A pipeline always starts, always reaches
its handler, and — when it completes — always ends; nothing else about its shape is
guaranteed.

The interceptor stages are deliberately not addressable. A plugin declaring itself against
a stage a plan does not have would either be silently dropped or force the plan to grow
one, and both are worse than saying that a plugin observes the pipeline rather than its
composition. That is also the answer for everything these four cannot see — the failure
path, the produced result, a point that must run on every exit: an interceptor sees them,
and a plugin package ships interceptors just as easily.

Points coincide rather than disappear. In a pipeline with no pre interceptors
[`Hook.Start`](/ergosfare.docs/preview/api/plugins-abstractions/hook#start) and [`Hook.PreMain`](/ergosfare.docs/preview/api/plugins-abstractions/hook#premain) name the same instant, as do
[`Hook.PostMain`](/ergosfare.docs/preview/api/plugins-abstractions/hook#postmain) and [`Hook.Finish`](/ergosfare.docs/preview/api/plugins-abstractions/hook#finish) with no post interceptors; both hooks
still run, in declaration order. In a broadcast [`Hook.PreMain`](/ergosfare.docs/preview/api/plugins-abstractions/hook#premain) and
[`Hook.PostMain`](/ergosfare.docs/preview/api/plugins-abstractions/hook#postmain) name the seam around a *delivery*, so they run once per
handler.

The list is short because every member is a permanent promise about the shape of the
emitted plan. A point that is not already true of every pipeline does not belong in it.

## Fields

### `Finish`

```csharp
Finish = 3
```

The pipeline is done and control is returning to the call site.

**Returns**

[`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook)

The end of a pipeline that completed. A failure leaves through the exception path and
an `Abort()` cuts the pipeline, and neither arrives here — running on those paths
would take a `finally` the plan does not otherwise have. A plugin that must close
something on every path registers a final interceptor, which is the participant whose
whole definition is that.

### `PostMain`

```csharp
PostMain = 2
```

Immediately after the main handler returns, before any post interceptor.

**Returns**

[`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook)

### `PreMain`

```csharp
PreMain = 1
```

Immediately before the main handler. The message is the final one — whatever the pre
chain rewrote it to.

**Returns**

[`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook)

### `Start`

```csharp
Start = 0
```

Before anything runs — the first thing in the pipeline. The message is the one the
call site passed; no participant has seen it, let alone rewritten it.

**Returns**

[`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook)
