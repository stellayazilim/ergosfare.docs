---
title: "StreamCompletion"
description: "How a stream ended."
sidebar:
  label: "StreamCompletion"
  order: 4
---

**Namespace:** [`Stella.Ergosfare.Core.Abstractions.Streaming`](/ergosfare.docs/preview/api/core-abstractions-streaming)  
**Assembly:** `Stella.Ergosfare.Core.Abstractions.dll`

How a stream ended.

```csharp
public enum StreamCompletion
```

[View source](https://github.com/stellayazilim/Ergosfare/blob/preview/src/Stella.Ergosfare.Core.Abstractions/Streaming/StreamCompletion.cs#L10)

## Remarks

A stream ends once. There is no resuming a faulted one: the handler runs a single time
for the whole sequence, so when it stops there is nobody left to produce the rest.

## Fields

### `Cancelled`

```csharp
Cancelled = 2
```

The dispatch was cancelled before the producer finished.

**Returns**

[`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion)

### `Completed`

```csharp
Completed = 1
```

Every chunk was produced and the producer closed the channel.

**Returns**

[`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion)

### `Faulted`

```csharp
Faulted = 3
```

A failure ended the stream; what was already delivered stays delivered.

**Returns**

[`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion)

### `Open`

```csharp
Open = 0
```

The stream is still open.

**Returns**

[`StreamCompletion`](/ergosfare.docs/preview/api/core-abstractions-streaming/streamcompletion)
