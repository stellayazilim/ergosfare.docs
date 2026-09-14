---
title: "Hook"
description: "Where in a dispatch a PipelineInvokableAttribute method is called."
sidebar:
  label: "Hook"
  order: 2
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Where in a dispatch a [`PipelineInvokableAttribute`](/ergosfare.docs/api/plugins-abstractions/pipelineinvokableattribute) method is called.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP002")]
public enum Hook
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Plugins.Abstractions/Hook.cs#L28)

## Remarks

All four points exist in every pipeline and none of them costs it anything: each is a
position on the straight-line path, so a plan never gains a `try`, a `catch` or
a `finally` because a plugin asked for one. Every pipeline starts, reaches its
handler, and — when it completes — ends; nothing else about its shape is promised.

The interceptor stages cannot be addressed. A plugin aimed at a stage a given pipeline
does not have would either be dropped silently or force that stage into existence.
Anything these four cannot see — the failure path, the result, a point that runs on every
exit — is what an interceptor is for, and a plugin package can ship interceptors too.

Points coincide rather than disappear: with no pre-interceptors, [`Hook.Start`](/ergosfare.docs/api/plugins-abstractions/hook#start) and
[`Hook.PreMain`](/ergosfare.docs/api/plugins-abstractions/hook#premain) name the same instant and both run, and likewise
[`Hook.PostMain`](/ergosfare.docs/api/plugins-abstractions/hook#postmain) and [`Hook.Finish`](/ergosfare.docs/api/plugins-abstractions/hook#finish) with no post-interceptors. In a broadcast,
[`Hook.PreMain`](/ergosfare.docs/api/plugins-abstractions/hook#premain) and [`Hook.PostMain`](/ergosfare.docs/api/plugins-abstractions/hook#postmain) surround each *delivery*, so they
run once per handler.

## Fields

### `Finish`

```csharp
Finish = 3
```

The pipeline has completed and control is returning to the call site.

**Returns**

[`Hook`](/ergosfare.docs/api/plugins-abstractions/hook)

Only reached by a pipeline that completed. A failure leaves through the exception
path and `Abort()` cuts the pipeline short, and neither arrives here — running on
those paths would need a `finally` the plan does not otherwise have. To close
something on every path, register a final interceptor.

### `PostMain`

```csharp
PostMain = 2
```

Immediately after the main handler returns, before any post-interceptor.

**Returns**

[`Hook`](/ergosfare.docs/api/plugins-abstractions/hook)

### `PreMain`

```csharp
PreMain = 1
```

Immediately before the main handler, with the message as the pre-interceptors left
it.

**Returns**

[`Hook`](/ergosfare.docs/api/plugins-abstractions/hook)

### `Start`

```csharp
Start = 0
```

Before anything else runs. The message is the one the call site passed, untouched by
any participant.

**Returns**

[`Hook`](/ergosfare.docs/api/plugins-abstractions/hook)
