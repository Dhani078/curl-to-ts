ARCHITECTURE: curl-to-ts

Data Flow Diagram

```
+-----------------------------------------------------------+
|                        CLI Runner                         |
|                     (bin/curl-to-ts.js)                   |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     cURL Lexer / Tokenizer                |
|   - Tokenizes bash / shell quoted arguments               |
|   - Handles backslash escapes and multiline line-endings  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     Request AST Model                     |
|   - URL, query parameters, HTTP method                    |
|   - Header key-value map, raw data payload                |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                    Schema & Type Inferer                  |
|   - Parses JSON body into abstract type tree              |
|   - Generates TypeScript interface definitions            |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     Code Emitter                          |
|   - Emits export async function <name>(...)               |
|   - Writes to stdout or --out destination file            |
+-----------------------------------------------------------+
```

Component Responsibilities

- bin/curl-to-ts.js: CLI argument handler and I/O coordinator.
- src/lexer.js: Shell string tokenizer supporting bash quoting.
- src/parser.js: Extracts HTTP properties from token stream.
- src/inferer.js: Type inference from JSON and query strings.
- src/emitter.js: TypeScript code formatting and text generation.
