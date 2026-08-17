---
title: "Stella.Ergosfare.Plugins.Abstractions"
description: "Types in the Stella.Ergosfare.Plugins.Abstractions namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Plugins.Abstractions` namespace contains 5 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`ErgosfarePluginAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/ergosfarepluginattribute) | Class | Declares the assembly to be an Ergosfare plugin, and names it. The generator running in the plugin's own compilation reads this and emits the module facade the consumer calls: an `IModule` implementation plus an `Add<Name>` extension on the module registry. |
| [`Hook`](/ergosfare.docs/preview/api/plugins-abstractions/hook) | Enum | Where in a generated dispatch plan a [`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute) method's call is emitted. |
| [`Module`](/ergosfare.docs/preview/api/plugins-abstractions/module) | Enum | The message families a plugin method applies to, as a filter on emission ([`PluginServiceFilterAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pluginservicefilterattribute)). |
| [`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute) | Class | Marks a method whose call the generator emits directly into every dispatch plan the method's filters admit, at the given [`PipelineInvokableAttribute.Hook`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute#hook). |
| [`PluginServiceFilterAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pluginservicefilterattribute) | Class | Narrows which dispatch plans a plugin service's [`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute) methods are emitted into. Applied to the service, it filters every method on it; applied to a method, only that one. |
