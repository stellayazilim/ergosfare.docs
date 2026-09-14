---
title: "IMessage"
description: "Marks a type as a message that can be dispatched through an Ergosfare pipeline."
sidebar:
  label: "IMessage"
  order: 5
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions`](/ergosfare.docs/preview/api/core-abstractions)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

Marks a type as a message that can be dispatched through an Ergosfare pipeline.

```csharp
public interface IMessage
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/IMessage.cs#L12)

## Remarks

The interface declares no members. It exists so handler and interceptor contracts can
constrain their message type argument, and so registration can recognize which types
participate in dispatch.
