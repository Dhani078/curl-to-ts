SPECIFICATION: curl-to-ts

1. Scope and Objective

curl-to-ts parses POSIX and Windows cURL command lines and emits valid, formatted TypeScript code that re-implements the request using the native Fetch API standard.

2. Syntax Parsing Requirements

2.1. Flags Supported
- Method: -X, --request (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS)
- Headers: -H, --header (Key: Value parsing with quote stripping)
- Data: -d, --data, --data-raw, --data-binary (JSON object inference and string escape handling)
- URL: Positional URL argument or explicit --url flag
- Authentication: -u, --user (Basic auth encoding to standard Base64 header)
- Compression: --compressed (Flag handled without breaking output)

2.2. Type Inference Engine
- String detection: Quoted values, dates, URLs, email addresses.
- Number detection: Digits, integers, floating point values.
- Boolean detection: true, false literals.
- Array detection: Homogeneous and heterogeneous array structures.
- Nullable detection: null values flagged as optional or union with null.

3. Exit Codes

- 0: Successful parse and TypeScript output generation.
- 1: Failed to parse cURL command string (syntax error or unclosed quotes).
- 2: Invalid options supplied.
- 3: Destination file write failure.
