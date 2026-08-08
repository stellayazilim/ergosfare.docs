---
title: "Stella.Ergosfare.Core.Abstractions.DispatchRoots"
description: "Types in the Stella.Ergosfare.Core.Abstractions.DispatchRoots namespace."
sidebar:
  label: "Overview"
  order: 0
---

The `Stella.Ergosfare.Core.Abstractions.DispatchRoots` namespace contains 13 public types.

| Type | Kind | Summary |
| --- | --- | --- |
| [`GeneratedDispatchRoots`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots) | Class | Process-wide store of generically instantiated dispatch roots, populated by source-generated registration code. Each root closes a dispatch generic over a concrete message (and result) type at compile time, letting the dispatch caches construct their pipeline executors and invokers without [`MakeGenericType(params Type[])`](https://learn.microsoft.com/dotnet/api/system.type.makegenerictype) — and giving Native AOT and trimming a static anchor for every instantiation, value-type messages and results included, which shared generic code cannot cover. The reflective `MakeGenericType` paths remain as the fallback for types without a root (open generics, runtime-only registrations). |
| [`IMessageResultRootVisitor<TReturn, TState>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/imessageresultrootvisitor-2) | Interface | Generic re-entry point for consumers of [`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot). |
| [`IMessageRootVisitor<TReturn, TState>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/imessagerootvisitor-2) | Interface | Generic re-entry point for consumers of [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot). |
| [`IResultPlanRootVisitor<TReturn, TState>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/iresultplanrootvisitor-2) | Interface | Generic re-entry point for consumers of [`ResultPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resultplanroot). |
| [`IVoidPlanRootVisitor<TReturn, TState>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/ivoidplanrootvisitor-2) | Interface | Generic re-entry point for consumers of [`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidplanroot). |
| [`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot) | Class | A dispatch root closed over a concrete (message, result) pair; see [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot). |
| [`MessageResultRoot<TMessage, TResult>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot-2) | Class | The concrete closure of [`MessageResultRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageresultroot); instantiated by generated code. |
| [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot) | Class | A dispatch root closed over a concrete message type. A consumer implements [`IMessageRootVisitor<TReturn, TState>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/imessagerootvisitor-2) to re-enter a generic context with the root's type argument and construct its closed dispatch component there — no reflection involved. |
| [`MessageRoot<TMessage>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot-1) | Class | The concrete closure of [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot); instantiated by generated code. |
| [`ResultPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resultplanroot) | Class | A compile-time pipeline plan closed over a result-producing message, its result type and its sole async handler; the result-producing counterpart of [`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidplanroot). |
| [`ResultPlanRoot<TMessage, TResult, THandler>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resultplanroot-3) | Class | The concrete closure of [`ResultPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/resultplanroot); instantiated by generated code. |
| [`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidplanroot) | Class | A compile-time pipeline plan closed over a void message and its sole async handler; see [`GeneratedDispatchRoots.AddVoidPlan<TMessage, THandler>()`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/generateddispatchroots#addvoidplantmessage-thandler) and [`MessageRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/messageroot) for the visitor re-entry pattern. |
| [`VoidPlanRoot<TMessage, THandler>`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidplanroot-2) | Class | The concrete closure of [`VoidPlanRoot`](/ergosfare.docs/preview/api/core-abstractions-dispatchroots/voidplanroot); instantiated by generated code. |
