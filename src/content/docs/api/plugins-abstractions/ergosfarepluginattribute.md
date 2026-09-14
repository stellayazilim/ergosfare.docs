---
title: "ErgosfarePluginAttribute"
description: "Declares an assembly to be an Ergosfare plugin and gives it a name."
sidebar:
  label: "ErgosfarePluginAttribute"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Plugins.Abstractions`](/ergosfare.docs/api/plugins-abstractions)  
**Assembly:** `Stella.Ergosfare.Plugins.Abstractions.dll`

Declares an assembly to be an Ergosfare plugin and gives it a name.

```csharp
[Obsolete("Experimental API: subject to change or removal in any release.", false, DiagnosticId = "ERGOEXP002")]
[AttributeUsage(AttributeTargets.Assembly, AllowMultiple = false)]
public sealed class ErgosfarePluginAttribute : Attribute
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/main/src/Stella.Ergosfare.Plugins.Abstractions/ErgosfarePluginAttribute.cs#L48)

**Inherits:** [`object`](https://learn.microsoft.com/dotnet/api/system.object), [`Attribute`](https://learn.microsoft.com/dotnet/api/system.attribute)

## Remarks

The generator running in the plugin's own compilation reads this and writes the facade
consumers call: an `IModule` implementation and an `Add<Name>` extension
on the module registry. It is a declaration rather than a call because a class library
has no entry point to put a call in, and because everything the generator reads has to be
in the compilation — as source, or as metadata on a reference.

Nothing else needs listing. The services to register are the types carrying
[`PipelineInvokableAttribute`](/ergosfare.docs/api/plugins-abstractions/pipelineinvokableattribute) methods, which the generator already sees, and
the hooks and filters are declared on those types and methods.

Naming an options type makes the generated `Add<Name>` take one and registers
the instance the consumer passed as a singleton. The type is the plugin author's own —
an ordinary class the generator neither writes nor constrains. Both ways of reading it
work without wiring: a service can take it as a constructor parameter and receive it once
at construction, or a hook method can take it as a parameter and have it resolved at the
call site. Because the consumer constructs the instance, what they wrote is what gets
registered — no builder in between, and nothing configurable the call site cannot see.

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

Declares an assembly to be an Ergosfare plugin and gives it a name.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `name` | [`string`](https://learn.microsoft.com/dotnet/api/system.string) | The plugin's name, used verbatim for the generated `Add<Name>` method and module type. Must be a valid C# identifier. |
| `optionsType` | [`Type`](https://learn.microsoft.com/dotnet/api/system.type) | The plugin's options type, or `null` when it takes none — in which case `Add<Name>` is parameterless. |

The generator running in the plugin's own compilation reads this and writes the facade
consumers call: an `IModule` implementation and an `Add<Name>` extension
on the module registry. It is a declaration rather than a call because a class library
has no entry point to put a call in, and because everything the generator reads has to be
in the compilation — as source, or as metadata on a reference.

Nothing else needs listing. The services to register are the types carrying
[`PipelineInvokableAttribute`](/ergosfare.docs/api/plugins-abstractions/pipelineinvokableattribute) methods, which the generator already sees, and
the hooks and filters are declared on those types and methods.

Naming an options type makes the generated `Add<Name>` take one and registers
the instance the consumer passed as a singleton. The type is the plugin author's own —
an ordinary class the generator neither writes nor constrains. Both ways of reading it
work without wiring: a service can take it as a constructor parameter and receive it once
at construction, or a hook method can take it as a parameter and have it resolved at the
call site. Because the consumer constructs the instance, what they wrote is what gets
registered — no builder in between, and nothing configurable the call site cannot see.

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

The plugin's options type, or `null` when it declares none.

**Returns**

[`Type`](https://learn.microsoft.com/dotnet/api/system.type)
