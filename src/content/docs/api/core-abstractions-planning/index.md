---
title: "Stella.Ergosfare.Core.Abstractions.Planning"
description: "Types in the Stella.Ergosfare.Core.Abstractions.Planning namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.Planning` namespace contains 6 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`DispatchPlanCatalog`](/ergosfare.docs/api/core-abstractions-planning/dispatchplancatalog) | Class | A container's runtime catalog of selected registrations and executable generated plans. |
| [`FrozenParticipant`](/ergosfare.docs/api/core-abstractions-planning/frozenparticipant) | Class | One participant of a frozen composition: the type to run, and the groups it runs under. |
| [`GeneratedPlanRegistry`](/ergosfare.docs/api/core-abstractions-planning/generatedplanregistry) | Class | The process-wide store of executable generated plans and registration descriptors. Generated registration code fills it as assemblies load. |
| [`GeneratedSelectionAttribute`](/ergosfare.docs/api/core-abstractions-planning/generatedselectionattribute) | Class | Compiler-only selection exported by a configuration method. Generated automatically. |
| [`GeneratedSelectionCallAttribute`](/ergosfare.docs/api/core-abstractions-planning/generatedselectioncallattribute) | Class | Compiler-only edge between configuration methods. Generated automatically. |
| [`PipelineDescriptor`](/ergosfare.docs/api/core-abstractions-planning/pipelinedescriptor) | Class | Runtime metadata describing a generated pipeline's participants, groups and ordering. The two handler segments and four interceptor stages distinguish direct and indirect participants. Execution belongs to the separately generated plan. |
