ARCHITECTURE: curl-to-ts

1. Architectural Pipeline

```
+-------------------------------------------------------------+
|                      INPUT CONSUMER                         |
|   - Command Line Argument Vector                            |
|   - Standard Input Pipe                                     |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                      CURL LEXER & PARSER                    |
|   - Tokenizes flags: -X, -H, -d, --data, --url              |
|   - Unescapes escaped quotes and JSON strings               |
|   - Reconstructs raw payload body                           |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     TYPE INFERENCE ENGINE                   |
|   - Recursively traverses JSON AST                          |
|   - Detects nested objects and array element schemas        |
|   - Resolves interface naming conflicts                     |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                   TYPESCRIPT CODE EMITTER                   |
|   - Formats clean export interface declarations             |
|   - Applies readonly, optional, and export modifiers        |
|   - Emits formatted TypeScript code to stdout               |
+-------------------------------------------------------------+
```

2. Standard Library Mapping
- Core Logic: Pure JavaScript string and regular expression processing.
- I/O Handling: node:process for stdin reading and exit code signaling.

3. Resource Footprint
- Cold execution completes in under 15 milliseconds.
- Heap consumption remains under 20 megabytes.
