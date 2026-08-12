---
title: "Stella.Ergosfare.Core"
description: "Types in the Stella.Ergosfare.Core namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core` namespace contains 1 public type.

| Type | Kind | Summary |
| --- | --- | --- |
| [`MessageDispatchEngine`](/ergosfare.docs/api/core/messagedispatchengine) | Class | The scope-free dispatch engine behind every mediator facade: the pipeline-executor lookup, pooled execution context, and completion handling of the [`IMessageMediator`](/ergosfare.docs/api/core-abstractions/imessagemediator) executor path, with the calling scope's provider supplied per call instead of being captured per instance. One process-wide singleton serves every scope, so resolving an engine-backed facade builds exactly one object per resolution. |
