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
| [`Result`](/ergosfare.docs/api/core-abstractions-results/result) | Struct | The outcome of a pipeline that produces no payload: either success, or a failure carrying the [`Result.Exception`](/ergosfare.docs/api/core-abstractions-results/result#exception) that describes it. |
| [`Result<TValue>`](/ergosfare.docs/api/core-abstractions-results/result-1) | Struct | The outcome of a pipeline that produces a `TValue`: either that value, or a failure carrying the [`Result<TValue>.Exception`](/ergosfare.docs/api/core-abstractions-results/result-1#exception) that describes it. |
| [`ResultExceptionAdapter`](/ergosfare.docs/api/core-abstractions-results/resultexceptionadapter) | Class | Reads and builds the framework's [`Result`](/ergosfare.docs/api/core-abstractions-results/result) carrier. Bound automatically — never registered by hand. |
| [`ResultExceptionAdapter<TValue>`](/ergosfare.docs/api/core-abstractions-results/resultexceptionadapter-1) | Class | Reads and builds the framework's [`Result<TValue>`](/ergosfare.docs/api/core-abstractions-results/result-1) carrier; the payload counterpart of [`ResultExceptionAdapter`](/ergosfare.docs/api/core-abstractions-results/resultexceptionadapter). |
