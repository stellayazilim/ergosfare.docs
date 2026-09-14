---
title: "Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection"
description: "Types in the Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection` namespace contains 5 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`IModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodule) | Interface | A unit of registration: one call that adds a set of participants and services to the container. |
| [`IModuleConfiguration`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleconfiguration) | Interface | What a module registers into while the container is being built. |
| [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | Interface | What `AddErgosfare` hands the caller: the place modules are registered and the framework configured. |
| [`ModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/moduleregistry) | Class | Collects the modules an application registers and, once configuration is done, puts everything they named into the container. |
| [`ServiceCollectionExtensions`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/servicecollectionextensions) | Class | Adds Ergosfare to a dependency injection container. |
