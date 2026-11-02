SECURITY POLICY: curl-to-ts

1. Security Posture and Data Privacy
curl-to-ts is frequently fed proprietary API request snippets containing authorization headers, session tokens, and business payloads.
- Complete In-Memory Isolation: Input strings are never saved to disk or temporary cache files.
- Zero Network Activity: No telemetry, logging, or remote calls.
- Safe Evaluation: Does not use eval() or Function() constructor to parse input. Uses secure JSON.parse with regex tokenizer.

2. Vulnerability Reporting
For security disclosures:
- Maintainer: Dhani078
- Security Contact: dhanisepeda@gmail.com
