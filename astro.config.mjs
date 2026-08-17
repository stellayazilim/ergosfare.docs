// @ts-check
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

import react from "@astrojs/react";

import starlightMcp from '@stellayazilim/mcp-starlight';

/**
 * Feeds the generated .NET API surface to the MCP catalog as a structured
 * collection, so `search_reference` can answer with exact signatures instead of
 * prose. The integration knows nothing about docfx — it just publishes whatever
 * entries it is handed.
 */
function apiReferenceCollection() {
    const path = fileURLToPath(new URL('./public/api-catalog.json', import.meta.url));
    if (!fs.existsSync(path)) return {};

    const { versions } = JSON.parse(fs.readFileSync(path, 'utf8'));
    const entries = versions.flatMap((version) =>
        version.types.map((type) => ({
            id: `${version.id}:${type.uid}`,
            title: type.name,
            signature: type.syntax,
            summary: type.summary,
            detail: `${version.id} ${type.namespace} ${type.members.map((m) => m.name).join(' ')}`,
            route: type.docUrl,
        })),
    );

    return { api: { label: '.NET API reference', entries } };
}

/**
 * Directives for an AI client reading the catalog.
 *
 * `@stellayazilim/mcp-starlight` has no first-class "instructions" option, so the
 * one place a standing directive can live is a published collection: its label
 * lands in the `search_reference` tool description, which a client sees before it
 * asks anything, and its entries are retrievable like any other reference entry.
 *
 * Both entries answer questions a model otherwise gets wrong by default — it
 * answers from a remembered surface that has since moved, and it reasons from
 * whichever locale the conversation happens to be in.
 */
function researchGuidance() {
    return {
        guidance: {
            label: 'read this before answering from memory',
            entries: [
                {
                    id: 'guidance:lines',
                    title: 'Stable and preview document different surfaces',
                    summary:
                        'Two documentation lines are published. Pages under /preview describe the pre-release ' +
                        'surface; pages at the site root describe stable v2. They are not interchangeable, and ' +
                        'APIs removed in one still exist in the other.',
                    detail:
                        'version line stable preview which line release pre-release surface differs. ' +
                        'Decide which line the question is about before answering. If the user does not say, ' +
                        'ask, or answer for both and label each. Never blend a signature from one line into an ' +
                        'example for the other. When a remembered API contradicts these pages, these pages are ' +
                        'right: this library changed substantially across the preview line.',
                },
                {
                    id: 'guidance:language',
                    title: 'Research against the English pages; Turkish covers the basics only',
                    summary:
                        'The English documentation is the canonical set and covers every section. The Turkish ' +
                        'pages translate the basics — getting started, core concepts, cross-cutting concerns — ' +
                        'and lag the English ones when the surface changes.',
                    detail:
                        'language locale turkish türkçe english canonical translation research which pages to read. ' +
                        'Search and read the English pages when researching a topic, including when the user is ' +
                        'writing in Turkish, then answer in the language they used. Cite the English page. ' +
                        'Reach for a Turkish page when the user asks for the Turkish wording itself, or wants a ' +
                        'link to send someone — not as the source to reason from. A topic absent from the Turkish ' +
                        'set is not absent from the documentation.',
                },
            ],
        },
    };
}

/**
 * Sidebar entries for the generated API Reference, keyed by documented line
 * (`stable` for the site root, `preview` for the line under /preview). The keys
 * come from `VERSIONS` in scripts/api-ref/config.ts.
 *
 * The fragment is written by `npm run gen_api_ref` and is git-ignored, so a
 * fresh checkout has no file here. Falling back to empty groups keeps
 * `astro build` working without it — the site just ships without the API
 * sections rather than failing to build.
 */
function apiReferenceSidebar(version) {
    const path = fileURLToPath(new URL('./src/generated/api-sidebar.json', import.meta.url));
    if (!fs.existsSync(path)) {
        console.warn('[astro.config] No API reference sidebar found. Run `npm run gen_api_ref` to generate it.');
        return [];
    }
    const groups = JSON.parse(fs.readFileSync(path, 'utf8'));
    return groups[version] ? [groups[version]] : [];
}

// https://astro.build/config
export default defineConfig({
    outDir: "docs",
    site: "https://stellayazilim.github.io/ergosfare.docs",
    trailingSlash: "ignore",
    base: "/ergosfare.docs",
    integrations: [starlight({
        
        logo: { src: "./src/assets/ergosfare.svg", replacesTitle: true},
        favicon: "./src/assets/favicon.png",
        components: {
            Sidebar: "./src/components/Navigation.astro",
            PageFrame: "./src/components/PageFrame.astro",
            Header: "./src/components/Header.astro",
            ContentPanel: "./src/components/ContentPanel.astro",
            TwoColumnContent: "./src/components/TwoColumnContent.astro",
            Pagination: "./src/components/Pagination.astro",
        },
        title: 'Ergosfare',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/stellayazilim/ergosfare' }],
        // Both documented lines live in one sidebar config because Starlight
        // resolves a single sidebar per locale. `Navigation.astro` filters it down
        // to the line the reader is on, keyed off the `preview/` route prefix — so
        // a stable page never shows the preview tree and vice versa.
        sidebar: [
            // ------------------------------------------------------ v2 stable (root)
            {
                label: "Getting started",
                translations: { tr: "Başlarken" },
                items: [
                    { label: "Introduction", slug: "getting-started/introduction", translations: { tr: "Giriş" } },
                    { label: "Using Ergosfare docs with AI", slug: "getting-started/using-docs-with-ai", translations: { tr: "Ergosfare Dokümanlarını AI ile Kullanma" } },
                    { label: "Installation", slug: "getting-started/installation", translations: { tr: "Kurulum" } },
                    { label: "Quick start", slug: "getting-started/quick-start", translations: { tr: "Hızlı Başlangıç" } },
                    { label: "Configuring Ergosfare", slug: "getting-started/configuring", translations: { tr: "Ergosfare'yi Yapılandırma" } },
                ],
            },
            {
                label: "Core concepts", translations: { tr: "Temel Kavramlar" }, items: [
                    { label: "Compile-time discovery", slug: "core-concepts/compile-time-discovery", translations: { tr: "Derleme Zamanı Keşif" } },
                    { label: "Discovery keys", slug: "core-concepts/discovery-keys", translations: { tr: "Keşif Anahtarları" } },
                    { label: "Polymorphism", slug: "core-concepts/polymorphism", translations: { tr: "Çok Biçimlilik" } },
                    { label: "Interceptors", slug: "core-concepts/interceptors", translations: { tr: "Interceptorlar" } },
                    { label: "Execution context", slug: "core-concepts/execution-context", translations: { tr: "Yürütme Bağlamı" } },
                    { label: "Nested dispatch", slug: "core-concepts/nested-dispatch", translations: { tr: "İç İçe Dispatch" } },
                    { label: "Modules and plugins", slug: "core-concepts/plugins", translations: { tr: "Modüller ve Eklentiler" } },
                ]
            },
            {
                label: "Core components", translations: { tr: "Temel Bileşenler" },
                items: [
                    { label: "Modules and extensions", slug: "core-components/modules-extensions", translations: { tr: "Modüller ve Uzantılar" } },
                    { label: "Command module", translations: { tr: "Command Modülü" }, items: [
                        { label: "Defining a command", slug: "core-components/command/command-definition", translations: { tr: "Command Tanımlama" } },
                        { label: "Defining a command handler", slug: "core-components/command/command-handler", translations: { tr: "Command Handler Tanımlama" } }
                    ]},
                    { label: "Query module", translations: { tr: "Query Modülü" }, items: [
                        { label: "Defining a query", slug: "core-components/query/query-definition", translations: { tr: "Query Tanımlama" } },
                        { label: "Defining a query handler", slug: "core-components/query/query-handler", translations: { tr: "Query Handler Tanımlama" } }
                    ]},
                    { label: "Event module", translations: { tr: "Event Modülü" }, items: [
                        { label: "Defining an event", slug: "core-components/event/event-definition", translations: { tr: "Event Tanımlama" } },
                        { label: "Defining an event handler", slug: "core-components/event/event-handler", translations: { tr: "Event Handler Tanımlama" } }
                    ]}
                ]
            },
            {
                label: "Cross-cutting concerns", translations: { tr: "Katmanlar Arası Kaygılar" }, items: [
                    { label: "Pre-interceptors", slug: "cross-cutting-concerns/pre-interceptors", translations: { tr: "Ön-Interceptorlar" } },
                    { label: "Post-interceptors", slug: "cross-cutting-concerns/post-interceptors", translations: { tr: "Son-Interceptorlar" } },
                    { label: "Exception interceptors", slug: "cross-cutting-concerns/exception-interceptors", translations: { tr: "Hata Interceptorları" } },
                    { label: "Final interceptors", slug: "cross-cutting-concerns/final-interceptors", translations: { tr: "Final Interceptorlar" } },
                    { label: "Groups and weights", slug: "cross-cutting-concerns/groups-and-weights", translations: { tr: "Gruplar ve Ağırlıklar" } },
                ]
            },
            {
                label: "Advanced", translations: { tr: "İleri Seviye" }, items: [
                    { label: "Performance", slug: "advanced/performance", translations: { tr: "Performans" } },
                    { label: "Native AOT and trimming", slug: "advanced/aot-and-trimming", translations: { tr: "Native AOT ve Trimming" } },
                    { label: "Experimental APIs", slug: "advanced/experimental-apis", translations: { tr: "Deneysel API'ler" } },
                ]
            },
            {
                label: "Recipes", translations: { tr: "Tarifler" }, items: [
                    { label: "RabbitMQ consumer", slug: "recipes/rabbitmq-consumer", translations: { tr: "RabbitMQ Consumer" } },
                ]
            },
            {
                label: "Migration", translations: { tr: "Geçiş" }, items: [
                    { label: "v2.2 to v2.3", slug: "migration/v2.2-to-v2.3", translations: { tr: "v2.2'den v2.3'e" } },
                    { label: "v1 to v2", slug: "migration/v1-to-v2", translations: { tr: "v1'den v2'ye" } },
                ]
            },
            ...apiReferenceSidebar('stable'),

            // --------------------------------------------------------- v2 preview
            {
                label: "Getting started",
                translations: { tr: "Başlarken" },
                items: [
                    { label: "Introduction", slug: "preview/getting-started/introduction", translations: { tr: "Giriş" } },
                    { label: "Using Ergosfare docs with AI", slug: "preview/getting-started/using-docs-with-ai", translations: { tr: "Ergosfare Dokümanlarını AI ile Kullanma" } },
                    { label: "Installation", slug: "preview/getting-started/installation", translations: { tr: "Kurulum" } },
                    { label: "Quick start", slug: "preview/getting-started/quick-start", translations: { tr: "Hızlı Başlangıç" } },
                    { label: "Configuring Ergosfare", slug: "preview/getting-started/configuring", translations: { tr: "Ergosfare'yi Yapılandırma" } },
                ],
            },
            {
                label: "Core concepts", translations: { tr: "Temel Kavramlar" }, items: [
                    { label: "Compile-time discovery", slug: "preview/core-concepts/compile-time-discovery", translations: { tr: "Derleme Zamanı Keşif" } },
                    { label: "Discovery keys", slug: "preview/core-concepts/discovery-keys", translations: { tr: "Keşif Anahtarları" } },
                    { label: "Polymorphism", slug: "preview/core-concepts/polymorphism", translations: { tr: "Çok Biçimlilik" } },
                    { label: "Interceptors", slug: "preview/core-concepts/interceptors", translations: { tr: "Interceptorlar" } },
                    { label: "Execution context", slug: "preview/core-concepts/execution-context", translations: { tr: "Yürütme Bağlamı" } },
                    { label: "Nested dispatch", slug: "preview/core-concepts/nested-dispatch", translations: { tr: "İç İçe Dispatch" } },
                    { label: "Modules", slug: "preview/core-concepts/modules", translations: { tr: "Modüller" } },
                ]
            },
            {
                label: "Core components", translations: { tr: "Temel Bileşenler" },
                items: [
                    { label: "Modules and extensions", slug: "preview/core-components/modules-extensions", translations: { tr: "Modüller ve Uzantılar" } },
                    { label: "Command module", translations: { tr: "Command Modülü" }, items: [
                        { label: "Defining a command", slug: "preview/core-components/command/command-definition", translations: { tr: "Command Tanımlama" } },
                        { label: "Defining a command handler", slug: "preview/core-components/command/command-handler", translations: { tr: "Command Handler Tanımlama" } }
                    ]},
                    { label: "Query module", translations: { tr: "Query Modülü" }, items: [
                        { label: "Defining a query", slug: "preview/core-components/query/query-definition", translations: { tr: "Query Tanımlama" } },
                        { label: "Defining a query handler", slug: "preview/core-components/query/query-handler", translations: { tr: "Query Handler Tanımlama" } }
                    ]},
                    { label: "Event module", translations: { tr: "Event Modülü" }, items: [
                        { label: "Defining an event", slug: "preview/core-components/event/event-definition", translations: { tr: "Event Tanımlama" } },
                        { label: "Defining an event handler", slug: "preview/core-components/event/event-handler", translations: { tr: "Event Handler Tanımlama" } }
                    ]}
                ]
            },
            {
                label: "Cross-cutting concerns", translations: { tr: "Katmanlar Arası Kaygılar" }, items: [
                    { label: "Pre-interceptors", slug: "preview/cross-cutting-concerns/pre-interceptors", translations: { tr: "Ön-Interceptorlar" } },
                    { label: "Post-interceptors", slug: "preview/cross-cutting-concerns/post-interceptors", translations: { tr: "Son-Interceptorlar" } },
                    { label: "Exception interceptors", slug: "preview/cross-cutting-concerns/exception-interceptors", translations: { tr: "Hata Interceptorları" } },
                    { label: "Final interceptors", slug: "preview/cross-cutting-concerns/final-interceptors", translations: { tr: "Final Interceptorlar" } },
                    { label: "Groups and weights", slug: "preview/cross-cutting-concerns/groups-and-weights", translations: { tr: "Gruplar ve Ağırlıklar" } },
                ]
            },
            {
                label: "Best practices", translations: { tr: "İyi Uygulamalar" }, items: [
                    { label: "Messages and handlers", slug: "preview/best-practices/messages-and-handlers", translations: { tr: "Mesajlar ve Handler'lar" } },
                    { label: "Interceptor or handler", slug: "preview/best-practices/interceptor-or-handler", translations: { tr: "Interceptor mı Handler mı" } },
                    { label: "Working with diagnostics", slug: "preview/best-practices/diagnostics", translations: { tr: "Tanılamalarla Çalışmak" } },
                    { label: "Composition root and testing", slug: "preview/best-practices/composition-root", translations: { tr: "Composition Root ve Test" } },
                ]
            },
            {
                label: "Advanced", translations: { tr: "İleri Seviye" }, items: [
                    { label: "Performance", slug: "preview/advanced/performance", translations: { tr: "Performans" } },
                    { label: "Native AOT and trimming", slug: "preview/advanced/aot-and-trimming", translations: { tr: "Native AOT ve Trimming" } },
                    { label: "Plugins", slug: "preview/advanced/plugins", translations: { tr: "Eklentiler" } },
                    { label: "Experimental APIs", slug: "preview/advanced/experimental-apis", translations: { tr: "Deneysel API'ler" } },
                ]
            },
            {
                label: "Recipes", translations: { tr: "Tarifler" }, items: [
                    { label: "RabbitMQ consumer", slug: "preview/recipes/rabbitmq-consumer", translations: { tr: "RabbitMQ Consumer" } },
                    { label: "Unit of work", slug: "preview/recipes/unit-of-work", translations: { tr: "Unit of Work" } },
                ]
            },
            {
                label: "Migration", translations: { tr: "Geçiş" }, items: [
                    { label: "v2.2 to v2.3", slug: "preview/migration/v2.2-to-v2.3", translations: { tr: "v2.2'den v2.3'e" } },
                    { label: "v1 to v2", slug: "preview/migration/v1-to-v2", translations: { tr: "v1'den v2'ye" } },
                ]
            },
            ...apiReferenceSidebar('preview'),
        ],
        customCss: [
        './src/styles/global.css'
        ],

        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en', // lang is required for root locales
            },
            tr: {
                label: "Türkçe",
                lang: 'tr'
            }
        }
}), markdoc(), react(), starlightMcp({
    siteLabel: 'Ergosfare',
    // `preview/` is a documentation line, not a content folder — telling the
    // integration lets its tools scope answers to the stable or the preview line.
    versions: ['preview'],
    // Stamps the catalog with the commit it was built from, so a long-running MCP
    // client can tell a redeployed catalog from the one it loaded and re-fetch.
    // Set by Actions; undefined locally, where the integration falls back to
    // hashing the catalog's contents.
    revision: process.env.GITHUB_SHA,
    // The API reference is machine-generated and already reachable through the
    // structured collection below; indexing 300 more pages of it as prose would
    // only dilute search.
    exclude: ['api'],
    collections: () => ({ ...researchGuidance(), ...apiReferenceCollection() }),
})],

  vite: {
    plugins: [tailwindcss()],
  },
});
