---
name: curl-to-ts
description: Instant zero-dependency cURL to TypeScript SDK generator. Use when user provides a cURL command or API request and needs a clean, fully-typed fetch function, interface definitions, or client SDK.
version: 1.0.0
author: Dhani078
---

Curl to TypeScript Skill

Use when integrating third-party APIs, converting browser cURL copies, or scaffolding API client libraries.

Instructions

1. Receive and parse raw cURL snippet:
   ```bash
   npx curl-to-ts "<curl-command>" --out src/api/<endpoint>.ts
   ```

2. Validate inferred types:
   - Verify parameter types (string, number, boolean, object).
   - Ensure sensitive tokens (Bearer, Basic auth) are parameterized rather than hardcoded.

3. Integration:
   - Import the generated function into your UI component or backend service.
   - Run typecheck (`tsc --noEmit`) to verify clean compilation.
