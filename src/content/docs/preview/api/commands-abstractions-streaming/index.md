---
title: "Stella.Ergosfare.Commands.Abstractions.Streaming"
description: "Types in the Stella.Ergosfare.Commands.Abstractions.Streaming namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Commands.Abstractions.Streaming` namespace contains 3 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`CommandStream<TChunk, TSelf>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/commandstream-2) | Class | A command input stream. Declare metadata as properties on the concrete message. |
| [`ErgosfareCommandStream<TChunk, TMeta, TResult>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/ergosfarecommandstream-3) | Class | A command whose payload arrives in chunks and which returns a `TResult`. |
| [`ErgosfareCommandStream<TChunk, TMeta>`](/ergosfare.docs/preview/api/commands-abstractions-streaming/ergosfarecommandstream-2) | Class | A command whose payload arrives in chunks and which returns nothing. |
