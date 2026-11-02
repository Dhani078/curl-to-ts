SPECIFICATION: curl-to-ts

1. Scope and Technical Purpose
curl-to-ts parses cURL command syntax, extracts HTTP metadata, parses JSON request or response bodies, and compiles structural TypeScript interface declarations.

2. Parsing Grammar and Extraction
- Method Extraction: Matches -X <METHOD> or infers POST if -d or --data is present, otherwise defaults to GET.
- URL Extraction: Extracts scheme, host, port, path, and search parameters.
- Header Extraction: Matches -H 'Header-Name: Value' headers into key-value map.
- Body Extraction: Matches -d, --data, --data-raw, or --data-binary payloads.

3. Type Inference Rules
- string: Values wrapped in quotes or ISO dates.
- number: Floating point or integer numeric literals.
- boolean: Literal true or false.
- null: Null literals (inferred as any or unknown if isolated).
- Array<T>: Arrays where all elements match type T.
- (T | U)[]: Heterogeneous arrays with multiple distinct element types.
- InterfaceName: Objects with child properties extracted to separate named interface.

4. Exit Codes
- 0: Successful parse and generation.
- 1: Malformed cURL command or unparseable JSON payload.
- 2: Missing input argument.
