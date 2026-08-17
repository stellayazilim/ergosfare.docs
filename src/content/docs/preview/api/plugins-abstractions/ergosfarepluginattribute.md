---
title: "ErgosfarePluginAttribute"
description: "Declares the assembly to be an Ergosfare plugin, and names it."
sidebar:
  label: "ErgosfarePluginAttribute"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/preview/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Declares the assembly to be an Ergosfare plugin, and names it. The generator running in
the plugin's own compilation reads this and emits the module facade the consumer calls:
an `IModule` implementation plus an `Add<Name>` extension on the module
registry.

```csharp
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = false)]
public sealed class ErgosfarePluginAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Plugins.Abstractions/ErgosfarePluginAttribute.cs#L54)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

A declaration rather than a call, because a class library has no entry point a
`CreatePlugin(...)` call could sit in, and because everything the generator reads
has to live in the input compilation — as source, or as metadata on a reference.

Nothing needs to be listed here beyond the name and, when the plugin takes settings, the
type carrying them. The services to register are the types carrying
[`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute) methods, which the generator already sees; the
hooks, families and keys are declared on those types and methods.

**Settings.** Naming an `optionsType` makes the generated
`Add<Name>` take one and registers the instance the consumer passed as a
singleton. The type itself is the plugin author's own — an ordinary class the generator
neither writes nor requires anything of. From the registration, both ways of reading it
work and neither needs wiring: a service can take it as a constructor parameter and get it
once at construction, or a hook method can take it as a parameter and have it resolved
from the dispatching provider at the call site.

The consumer constructs the instance, so what they wrote is what gets registered — no
builder in between, and nothing configurable that the call site cannot see.

## Examples

In the plugin:

```csharp
[assembly: ErgosfarePlugin("Tracing", typeof(TracingOptions))]
```

In the consumer, against the generated facade:

```csharp
services.AddErgosfare(o => o.AddTracing(new TracingOptions { SampleRate = 0.1 }));
```


## Constructors

### `ErgosfarePluginAttribute(string, Type?)`

```csharp
public ErgosfarePluginAttribute(string name, Type? optionsType = null)
```

Declares the assembly to be an Ergosfare plugin, and names it. The generator running in
the plugin's own compilation reads this and emits the module facade the consumer calls:
an `IModule` implementation plus an `Add<Name>` extension on the module
registry.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `name` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The plugin's name, used verbatim for the generated `Add<Name>` method and the module type. Must be a valid C# identifier. |
| `optionsType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The plugin's settings type, or `null` when it takes none — in which case `Add<Name>` is parameterless, as it is today. |

A declaration rather than a call, because a class library has no entry point a
`CreatePlugin(...)` call could sit in, and because everything the generator reads
has to live in the input compilation — as source, or as metadata on a reference.

Nothing needs to be listed here beyond the name and, when the plugin takes settings, the
type carrying them. The services to register are the types carrying
[`PipelineInvokableAttribute`](/ergosfare.docs/preview/api/plugins-abstractions/pipelineinvokableattribute) methods, which the generator already sees; the
hooks, families and keys are declared on those types and methods.

**Settings.** Naming an `optionsType` makes the generated
`Add<Name>` take one and registers the instance the consumer passed as a
singleton. The type itself is the plugin author's own — an ordinary class the generator
neither writes nor requires anything of. From the registration, both ways of reading it
work and neither needs wiring: a service can take it as a constructor parameter and get it
once at construction, or a hook method can take it as a parameter and have it resolved
from the dispatching provider at the call site.

The consumer constructs the instance, so what they wrote is what gets registered — no
builder in between, and nothing configurable that the call site cannot see.

## Properties

### `Name`

```csharp
public string Name { get; }
```

The plugin's name, as it appears in the generated facade.

**Returns**

[`string`](https://learn.microsoft.com/dotnet/api/system.string)

### `OptionsType`

```csharp
public Type? OptionsType { get; }
```

The plugin's settings type, or `null` when it declares none.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
