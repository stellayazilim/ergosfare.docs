---
title: "DispatchKind"
description: "The dispatch surface a recorded dispatch site went through; see DispatchSiteAttribute."
sidebar:
  label: "DispatchKind"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchSites`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

The dispatch surface a recorded dispatch site went through; see
[`DispatchSiteAttribute`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchsiteattribute).

```csharp
public enum DispatchKind : byte
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/DispatchSites/DispatchKind.cs#L6)

## Fields

### `Command`

```csharp
Command = 0
```

An `ICommandMediator.SendAsync` dispatch.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `Event`

```csharp
Event = 3
```

An `IEventMediator.PublishAsync` dispatch.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `Message`

```csharp
Message = 4
```

A core `IMessageMediator` dispatch (module-agnostic).

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `Query`

```csharp
Query = 1
```

An `IQueryMediator.QueryAsync` dispatch.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `Stream`

```csharp
Stream = 2
```

An `IQueryMediator.StreamAsync` dispatch.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)
