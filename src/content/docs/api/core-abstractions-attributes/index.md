---
title: "Stella.Ergosfare.Core.Abstractions.Attributes"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Attributes namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Attributes` namespace contains 8 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`Discovery`](/ergosfare.docs/api/core-abstractions-attributes/discovery) | Class | Evaluates the discovery attributes at runtime — [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute), [`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute), and the key patterns registration calls pass. |
| [`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) | Class | Puts a type behind one or more discovery keys, so it registers only when a registration call asks for one of them. |
| [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute) | Class | Keeps a type out of automatic discovery. Generated registration skips it whatever discovery key or pattern is requested. |
| [`ExcludeFromPipelineAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefrompipelineattribute) | Class | Detaches a message from interceptors it only matches covariantly — those registered against one of its base types or interfaces. |
| [`GroupAttribute`](/ergosfare.docs/api/core-abstractions-attributes/groupattribute) | Class | Assigns a participant to one or more pipeline groups, so a dispatch can select which participants run. |
| [`IgnoreResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/ignoreresultadapterattribute) | Class | Takes a message type out of result adaptation completely: no annotated adapter, no built-in [`Result`](/ergosfare.docs/api/core-abstractions-results/result) or [`Result<TValue>`](/ergosfare.docs/api/core-abstractions-results/result-1) adapter, and no application-wide default adapter applies to it. |
| [`ResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/resultadapterattribute) | Class | Binds a message type to the [`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1) that reads value-carried failures out of its pipeline result. |
| [`WeightAttribute`](/ergosfare.docs/api/core-abstractions-attributes/weightattribute) | Class | Sets the invocation order of a participant within its pipeline stage. |
