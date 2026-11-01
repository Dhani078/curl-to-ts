FAQ: curl-to-ts

Q: Does curl-to-ts support multiline curl commands with backslashes?
A: Yes. curl-to-ts automatically normalizes line continuations and unescapes shell quote strings.

Q: How does it infer TypeScript types without making the network call?
A: For POST and PUT bodies containing JSON or form-urlencoded data, curl-to-ts inspects property keys and sample primitive values to construct the Request interface. For live response typing, pass the `--fetch` flag to execute a single test probe.

Q: Can I output Axios code instead of native fetch?
A: Yes. Use `--client axios` to generate Axios request calls with typed generics.
