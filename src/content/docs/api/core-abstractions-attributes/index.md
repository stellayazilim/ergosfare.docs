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
| [`Discovery`](/ergosfare.docs/api/core-abstractions-attributes/discovery) | Class | Runtime evaluation of the discovery attributes — the reference semantics for how [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute), [`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) and key patterns compose. Source-generated registration evaluates the same rules at compile time; this helper is the runtime mirror the contract suite pins them against. |
| [`DiscoveryKeyAttribute`](/ergosfare.docs/api/core-abstractions-attributes/discoverykeyattribute) | Class | Gates a registrable construct behind one or more discovery keys: a keyed type is excluded from default discovery (`RegisterGenerated()`) and registers only when a registration call selects one of its keys, e.g. `RegisterGenerated("reporting")` or `RegisterGenerated("reporting.*")`. |
| [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefromdiscoveryattribute) | Class | Excludes a registrable construct from automatic discovery entirely: source-generated registration skips the type, regardless of discovery keys or patterns. Explicit registration (`Register<T>()`, `Register(Type)`) still works. |
| [`ExcludeFromPipelineAttribute`](/ergosfare.docs/api/core-abstractions-attributes/excludefrompipelineattribute) | Class | Excludes a message from covariantly matched interceptors: interceptors registered against a base type or interface of the message (e.g. an `IEvent`-wide pre-interceptor) no longer apply to it. Interceptors registered against the message type itself always run — they were written for this message deliberately. |
| [`GroupAttribute`](/ergosfare.docs/api/core-abstractions-attributes/groupattribute) | Class | Specifies one or more group names for a class, typically used to categorize handlers, messages, or modules. |
| [`IgnoreResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/ignoreresultadapterattribute) | Class | Opts a message type out of result adaptation entirely: no annotation binding, no built-in [`Result`](/ergosfare.docs/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1) adapter, no configured default adapter — the message's pipelines keep the classic try/catch semantics, and the dispatch path performs no probing at all. The escape hatch for applications that configure a default adapter but want individual messages off the value channel. |
| [`ResultAdapterAttribute`](/ergosfare.docs/api/core-abstractions-attributes/resultadapterattribute) | Class | Declares, on a message type, the [`IResultAdapter<TResult>`](/ergosfare.docs/api/core-abstractions/iresultadapter-1) that surfaces value-carried failures out of the message's pipeline result — the declarative, per-message binding: no runtime registration, no adapter list. The framework's own [`Result`](/ergosfare.docs/api/core-abstractions/result)/[`Result<TValue>`](/ergosfare.docs/api/core-abstractions/result-1) carriers need no annotation (they bind to their built-in adapters); an unannotated message with any other result type performs no probing at all. |
| [`WeightAttribute`](/ergosfare.docs/api/core-abstractions-attributes/weightattribute) | Class | Specifies a weight for a class, typically used to influence the execution order or priority of handlers or modules. |
