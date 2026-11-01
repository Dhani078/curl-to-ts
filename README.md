curl-to-ts

[![Release](https://img.shields.io/github/v/release/Dhani078/curl-to-ts?color=blue)](https://github.com/Dhani078/curl-to-ts/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Instant, zero-dependency cURL to TypeScript SDK generator. Converts raw cURL commands and browser network exports into clean, fully-typed native fetch functions and interfaces.

---

The Problem

Developers copy cURL requests from browser network tabs, Postman, or API documentation multiple times a day:
- Writing typed fetch wrappers manually takes 10 to 20 minutes per endpoint.
- Headers, authorization tokens, query params, and JSON payloads are prone to copy-paste typos.
- Existing online converters either require heavy dependencies or send API tokens to third-party servers.

---

The Solution

curl-to-ts parses cURL command syntax locally using a deterministic tokenizer:
- Extracts HTTP method, URL, query string, headers, and body.
- Infers TypeScript interfaces for request body and parameters.
- Generates a standalone TypeScript function using native global fetch.
- Zero network requests. Completely offline and private.

---

Installation and Usage

Run directly via npx:

```bash
npx curl-to-ts "curl -X POST https://api.example.com/v1/orders -H 'Authorization: Bearer token123' -d '{\"item\":\"laptop\",\"qty\":1}'"
```

Save generated SDK directly to a file:

```bash
npx curl-to-ts "curl https://api.example.com/users/42" --out src/api/user.ts
```

Read cURL command from clipboard or standard input:

```bash
cat curl.txt | npx curl-to-ts --stdin
```

---

Generated Code Example

Input:
```bash
curl -X POST https://api.example.com/items -H "Content-Type: application/json" -d '{"name":"widget","price":25}'
```

Output:
```typescript
export interface CreateItemsPayload {
  name: string;
  price: number;
}

export interface CreateItemsOptions {
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export async function createItems(
  payload: CreateItemsPayload,
  options: CreateItemsOptions = {}
): Promise<Response> {
  const url = "https://api.example.com/items";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(payload),
    signal: options.signal,
  });
}
```

---

CLI Options

- `--out <path>`: Write generated TypeScript code to specified file path.
- `--function-name <name>`: Custom name for the exported TypeScript function.
- `--zod`: Generate Zod validation schema alongside TypeScript interface.
- `--named-params`: Pack URL path parameters into an options object.
- `--stdin`: Read input string from standard input stream.

---

Author

Dhani078
