---
title: "Stella.Ergosfare.Core.Abstractions.Results"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Results namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Results` namespace contains 4 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`DefaultResultAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/defaultresultadapter) | Class | The application-wide fallback adapter, configured once inside `AddErgosfare` and registered into the container as a normal singleton service. A result slot that binds nothing more specific — no [`ResultAdapterAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/resultadapterattribute) on the message, not a native [`Result`](/ergosfare.docs/preview/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions/result-1) carrier — falls back to this adapter when it can serve the slot; a slot it cannot serve keeps the classic try/catch semantics. Nobody is forced onto the value channel: with no default configured and no annotation, pipelines behave exactly as before. |
| [`ResultAdapterBinding`](/ergosfare.docs/preview/api/core-abstractions-results/resultadapterbinding) | Class | Resolves the result adapter of a (message, result-slot) pair. Resolution ladder: [`IgnoreResultAdapterAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/ignoreresultadapterattribute) opts the message out entirely; else the message's [`ResultAdapterAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/resultadapterattribute) when its adapter fits the slot exactly; else the built-in adapters of the framework's own [`Result`](/ergosfare.docs/preview/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions/result-1) carriers; else — on the provider-taking overload — the container's configured [`DefaultResultAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/defaultresultadapter) when it can serve the slot; else `null`, the overwhelmingly common case, in which the pipeline performs no probing at all and keeps the classic try/catch semantics. Nobody is forced onto the value channel — adapters are a recommended win, never a requirement. |
| [`ResultExceptionAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter) | Class | The framework's default adapter for its own [`Result`](/ergosfare.docs/preview/api/core-abstractions/result) carrier: a field read, no boxing, no reflection. Bound automatically — never registered by hand. |
| [`ResultExceptionAdapter<TValue>`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter-1) | Class | The framework's default adapter for [`Result<TValue>`](/ergosfare.docs/preview/api/core-abstractions/result-1); see [`ResultExceptionAdapter`](/ergosfare.docs/preview/api/core-abstractions-results/resultexceptionadapter). |
