curl-to-ts

[![Release](https://img.shields.io/github/v/release/Dhani078/curl-to-ts?color=blue)](https://github.com/Dhani078/curl-to-ts/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Instant cURL to TypeScript type interface generator CLI. Parses HTTP request headers, method, parameters, and payload data into strongly typed TypeScript contracts in milliseconds with zero dependencies.

---

THE PROBLEM

Translating raw cURL commands and API documentation payloads into TypeScript is tedious and error-prone:
- Manually inspecting JSON payloads to declare type interfaces wastes engineering time.
- Nested JSON objects and heterogeneous arrays require manual recursive typing.
- Copy-pasting from API documentation introduces typos in property names.
- Online conversion websites pose security and privacy risks by exposing proprietary API structures and credentials.
- Existing tools pull hundreds of dependencies or require heavy GUI editors.

---

THE SOLUTION

curl-to-ts provides zero-dependency native conversion:
- Parses cURL command arguments into method, URL, headers, and body payload.
- Infers TypeScript primitive types (string, number, boolean, null, object, arrays).
- Handles recursive nested objects and heterogeneous arrays with union typing.
- Generates clean, production-ready interface definitions ready to paste into codebase.
- Operates 100 percent locally in under 20 milliseconds.

---

QUICKSTART

Convert cURL directly via command line:

```bash
npx curl-to-ts "curl -X POST https://api.example.com/v1/users -H 'Content-Type: application/json' -d '{\"name\": \"Dhani\", \"age\": 25, \"isAdmin\": true}'"
```

Pipe cURL command from clipboard or file:

```bash
cat curl.txt | npx curl-to-ts
```

Specify custom interface name:

```bash
npx curl-to-ts "curl -d '{\"id\": 101, \"status\": \"active\"}' https://api.example.com" --name UserStatus
```

---

COMMAND MATRIX

Command | Argument | Description | Default
--- | --- | --- | ---
curl-to-ts | [curl-command] | Parse command string and output TypeScript | Required argument or stdin
curl-to-ts --stdin | None | Read cURL command from standard input | Reads process.stdin
curl-to-ts --help | None | Print comprehensive command list and flags | Flag
curl-to-ts --version | None | Print current semantic version | Flag

---

CLI OPTIONS

- `--name <InterfaceName>`: Set root interface identifier (default: ApiResponse).
- `--prefix <prefix>`: Add prefix to generated types (e.g., I, Api).
- `--readonly`: Mark all generated properties with readonly modifier.
- `--optional`: Mark properties with null or missing data as optional (?).
- `--json`: Output parsed AST and type schema as JSON.

---

INTERACTIVE WORKFLOW PREVIEW

```
$ npx curl-to-ts "curl -X POST https://api.example.com/orders -d '{\"orderId\": \"ORD-9821\", \"amount\": 149.50, \"items\": [{\"sku\": \"A1\", \"qty\": 2}], \"paid\": true}'" --name OrderPayload

export interface OrderItem {
  sku: string;
  qty: number;
}

export interface OrderPayload {
  orderId: string;
  amount: number;
  items: OrderItem[];
  paid: boolean;
}
```

---

DATA SAFETY GUARANTEES

- Offline Standard Library: Built purely with native Node.js string and regex processing.
- Zero Remote Calls: Operates in memory with zero network exposure.

---

LICENSE AND AUTHOR

- License: MIT License
- Author: Dhani078 (dhanisepeda@gmail.com)
- Source Repository: https://github.com/Dhani078/curl-to-ts
