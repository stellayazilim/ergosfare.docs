---
title: "Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection"
description: "Types in the Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Extensions.MicrosoftDependencyInjection` namespace contains 10 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`CoreModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/coremodule) | Class | Represents the core module of the framework, responsible for configuring and registering core message types into the message registry. |
| [`CoreModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/coremodulebuilder) | Class | Provides a fluent API for registering message types into the [`IMessageRegistry`](/ergosfare.docs/api/core-abstractions-registry/imessageregistry). |
| [`IModule`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodule) | Interface | Represents a module in an application that can be configured and built. |
| [`IModuleBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imodulebuilder) | Interface | Provides a builder interface for registering types into a module. Supports registration of individual types and bulk registration from assemblies. |
| [`IModuleConfiguration`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleconfiguration) | Interface | Represents the configuration context for a module. Provides access to the service collection and message registry associated with the module during setup. |
| [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry) | Interface | Represents a registry that holds and manages modules, allowing registration and configuration. |
| [`ModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/moduleregistry) | Class | Represents a central registry for application modules. Handles registration, initialization, and handler discovery for all modules. |
| [`ModuleRegistryExtensions`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/moduleregistryextensions) | Class | Provides extension methods for configuring and registering modules with an [`IModuleRegistry`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/imoduleregistry). |
| [`ResultAdapterBuilder`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/resultadapterbuilder) | Class | Provides a fluent API for registering [`IResultAdapter`](/ergosfare.docs/api/core-abstractions/iresultadapter) implementations into an [`IResultAdapterService`](/ergosfare.docs/api/core-abstractions/iresultadapterservice). |
| [`ServiceCollectionExtensions`](/ergosfare.docs/api/core-extensions-microsoftdependencyinjection/servicecollectionextensions) | Class | Provides extension methods for registering and configuring the Stella.Ergosfare framework with the ASP.NET Core dependency injection system. |
