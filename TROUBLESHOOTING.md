TROUBLESHOOTING: curl-to-ts

Diagnostic Runbook for Common Failures

Problem 1: Error: Failed to parse cURL payload as JSON
- Symptom: CLI exits with code 1 and specifies JSON syntax error.
- Cause: The -d or --data argument contains truncated or unescaped quotes.
- Solution: Ensure internal double quotes are escaped or wrap the cURL body in single quotes.

Problem 2: Warning: No URL found in cURL string
- Symptom: Generated interface defaults to ApiResponse.
- Cause: cURL argument did not match standard HTTP or HTTPS URL pattern.
- Solution: Verify that the cURL string contains a valid target URL.

Problem 3: Nested interface names collide
- Symptom: Multiple interfaces generated with identical names.
- Cause: Sibling objects in payload share identical property keys.
- Solution: curl-to-ts automatically appends parent name prefixes to disambiguate nested interfaces.
