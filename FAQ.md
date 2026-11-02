FAQ: curl-to-ts

Q1: What happens if the JSON payload in cURL has trailing commas or single quotes?
A: curl-to-ts includes a permissive pre-parser that normalizes single quotes and cleans trailing commas into valid JSON before type evaluation.

Q2: Can curl-to-ts generate Zod schemas or JSON Schema?
A: curl-to-ts specializes in pure TypeScript interfaces. For runtime validation schemas, the generated interfaces can be directly used as TypeScript contracts.

Q3: Does curl-to-ts support multi-line cURL commands with backslashes?
A: Yes. curl-to-ts automatically joins lines separated by backslashes before tokenizing arguments.

Q4: How are null values typed?
A: Null values without further context are typed as null or unknown, and flagged as optional if --optional is passed.

Q5: Does curl-to-ts send any data over the internet?
A: Never. The tool runs completely in-memory on your local CPU.
