---
title: "Stella.Ergosfare.Core.Abstractions.DispatchSites"
description: "Types in the Stella.Ergosfare.Core.Abstractions.DispatchSites namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.DispatchSites` namespace contains 3 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind) | Enum | Which mediator surface a recorded dispatch site called; see [`DispatchSiteAttribute`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchsiteattribute). |
| [`DispatchManifestAttribute`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchmanifestattribute) | Class | Marks an assembly whose dispatch sites the source generator recorded — including an assembly that dispatches nothing at all. |
| [`DispatchSiteAttribute`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchsiteattribute) | Class | Records one dispatch site the source generator saw in an assembly's own source: a distinct pair of static message type and mediator surface that at least one call reached. |
