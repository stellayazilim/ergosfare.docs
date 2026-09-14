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
| [`ErgosfarePluginAttribute`](/ergosfare.docs/api/plugins-abstractions/ergosfarepluginattribute) | Class | Declares an assembly to be an Ergosfare plugin and gives it a name. |
| [`Hook`](/ergosfare.docs/api/plugins-abstractions/hook) | Enum | Where in a dispatch a [`PipelineInvokableAttribute`](/ergosfare.docs/api/plugins-abstractions/pipelineinvokableattribute) method is called. |
| [`Module`](/ergosfare.docs/api/plugins-abstractions/module) | Enum | The message families a plugin method applies to, used by [`PluginServiceFilterAttribute`](/ergosfare.docs/api/plugins-abstractions/pluginservicefilterattribute). |
| [`PipelineInvokableAttribute`](/ergosfare.docs/api/plugins-abstractions/pipelineinvokableattribute) | Class | Marks a method to be called from inside every dispatch pipeline its filters admit, at the given [`PipelineInvokableAttribute.Hook`](/ergosfare.docs/api/plugins-abstractions/pipelineinvokableattribute#hook). |
| [`PluginServiceFilterAttribute`](/ergosfare.docs/api/plugins-abstractions/pluginservicefilterattribute) | Class | Narrows which pipelines a plugin service's [`PipelineInvokableAttribute`](/ergosfare.docs/api/plugins-abstractions/pipelineinvokableattribute) methods reach. On the service it filters every method; on a method, only that one. |
