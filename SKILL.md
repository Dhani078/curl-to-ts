---
name: curl-to-ts
description: Instant cURL command to TypeScript interface generator CLI and agent skill. Parses HTTP headers, query params, and JSON payloads into clean TypeScript types.
risk: safe
version: 1.0.0
---

NAME
curl-to-ts - cURL command to TypeScript interface generator

SYNOPSIS
npx curl-to-ts [curl-command] [options]

COMMANDS
- parse [curl-command]: Convert cURL string into TypeScript interfaces.
- --stdin: Read cURL string from standard input stream.

OPTIONS
- --name <name>: Set name of primary generated interface.
- --readonly: Add readonly modifier to all generated properties.
- --optional: Mark nullable fields as optional.
- --json: Emit structured schema representation.

DETERMINISTIC BEHAVIOR AND INVARIANTS
1. The tool must accept valid cURL strings containing -X, -H, -d, --data, or bare URLs.
2. If the payload is invalid JSON, the tool must output a descriptive syntax error and exit with code 1.
3. Nested objects must be extracted into distinct PascalCase interfaces rather than inline type literals.
4. Output must be strictly deterministic: identical cURL input produces byte-identical TypeScript output.

AGENT INTEGRATION INSTRUCTIONS
When generating types from external API docs or network logs:
1. Extract cURL snippet.
2. Execute npx curl-to-ts "<curl-string>" --name <TargetName>.
3. Import or append generated interfaces directly into TypeScript source files.

AUTHOR
Dhani078 (dhanisepeda@gmail.com)
