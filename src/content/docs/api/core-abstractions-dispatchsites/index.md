---
title: "Stella.Ergosfare.Core.Abstractions.DispatchSites"
description: "Types in the Stella.Ergosfare.Core.Abstractions.DispatchSites namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.DispatchSites` namespace contains 4 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`DispatchKind`](/ergosfare.docs/api/core-abstractions-dispatchsites/dispatchkind) | Enum | The dispatch surface a recorded dispatch site went through; see [`DispatchSiteAttribute`](/ergosfare.docs/api/core-abstractions-dispatchsites/dispatchsiteattribute). |
| [`DispatchManifestAttribute`](/ergosfare.docs/api/core-abstractions-dispatchsites/dispatchmanifestattribute) | Class | Assembly-level marker stamped by the source generator whenever it ran with dispatch-site manifest support — including when the assembly contains no dispatch site at all. Its presence is what lets an aggregating composition root distinguish "this assembly truly dispatches nothing" from "this assembly predates manifests (or was built without the generator), so its dispatch sites are unknown". Unreachable-handler judgment (ERGOSG007) and compile-time handler trimming stay silent while any Ergosfare-referencing assembly in the closure lacks the marker. |
| [`DispatchSiteAttribute`](/ergosfare.docs/api/core-abstractions-dispatchsites/dispatchsiteattribute) | Class | Assembly-level record of one dispatch site the source generator observed in the assembly's own source: a distinct (static message type, dispatch surface) pair reached by at least one call. The generator emitting into a composition root aggregates these manifests from every referenced assembly to judge whole-closure dispatch reachability — provably dead dispatches (ERGOSG005) and handlers no dispatch site can reach (ERGOSG007) — without needing the referenced assemblies' syntax. |
| [`ManualRegistrationAttribute`](/ergosfare.docs/api/core-abstractions-dispatchsites/manualregistrationattribute) | Class | Assembly-level record of one provable manual registration the source generator observed in the assembly's own source: a `Register<T>()` or `Register(typeof(T))` call whose type argument is statically known. Manual registration is the same source-generated collection path as `RegisterGenerated()` — per type instead of in bulk — so an aggregating composition root counts these types' handler contracts as coverage evidence exactly like discovered ones when judging dead dispatches (ERGOSG005/006). |
