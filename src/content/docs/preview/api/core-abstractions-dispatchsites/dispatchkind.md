---
title: "DispatchKind"
description: "Which mediator surface a recorded dispatch site called; see DispatchSiteAttribute."
sidebar:
  label: "DispatchKind"
  order: 1
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.DispatchSites`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Which mediator surface a recorded dispatch site called; see
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

A call to `ICommandMediator.SendAsync`.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `Event`

```csharp
Event = 3
```

A call to `IEventMediator.PublishAsync`.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `Query`

```csharp
Query = 1
```

A call to `IQueryMediator.QueryAsync`.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)

### `Stream`

```csharp
Stream = 2
```

A call to `IQueryMediator.StreamAsync`.

**Returns**

[`DispatchKind`](/ergosfare.docs/preview/api/core-abstractions-dispatchsites/dispatchkind)
