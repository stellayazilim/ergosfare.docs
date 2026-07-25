---
title: "Stella.Ergosfare.Core.Abstractions.Attributes"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Attributes namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Attributes` namespace contains 6 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`Discovery`](/ergosfare.docs/preview/api/core-abstractions-attributes/discovery) | Class | Runtime evaluation of the discovery attributes — the single source of truth for how [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/excludefromdiscoveryattribute), [`DiscoveryKeyAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/discoverykeyattribute) and key patterns compose. The reflection-based scanning paths (`RegisterFromAssembly`) call into this so their semantics stay identical to source-generated registration, which evaluates the same rules at compile time. |
| [`DiscoveryKeyAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/discoverykeyattribute) | Class | Gates a registrable construct behind one or more discovery keys: a keyed type is excluded from default discovery (`RegisterGenerated()`, `RegisterFromAssembly(assembly)`) and registers only when a registration call selects one of its keys, e.g. `RegisterGenerated("reporting")` or `RegisterGenerated("reporting.*")`. |
| [`ExcludeFromDiscoveryAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/excludefromdiscoveryattribute) | Class | Excludes a registrable construct from automatic discovery entirely: both source-generated registration and reflection-based assembly scanning (`RegisterFromAssembly`) skip the type, regardless of discovery keys or patterns. Explicit registration (`Register<T>()`, `Register(Type)`) still works. |
| [`ExcludeFromPipelineAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/excludefrompipelineattribute) | Class | Excludes a message from covariantly matched interceptors: interceptors registered against a base type or interface of the message (e.g. an `IEvent`-wide pre-interceptor) no longer apply to it. Interceptors registered against the message type itself always run — they were written for this message deliberately. |
| [`GroupAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/groupattribute) | Class | Specifies one or more group names for a class, typically used to categorize handlers, messages, or modules. |
| [`WeightAttribute`](/ergosfare.docs/preview/api/core-abstractions-attributes/weightattribute) | Class | Specifies a weight for a class, typically used to influence the execution order or priority of handlers or modules. |
