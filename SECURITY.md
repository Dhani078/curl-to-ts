SECURITY POLICY: curl-to-ts

Data Handling Guarantees

- Completely Offline: No external HTTP calls are ever made by curl-to-ts.
- Private Credentials: Authorization headers and cookies found in cURL commands are transformed into runtime parameters so tokens are never baked into generated files.

Vulnerability Reporting

Report issues to:
- Maintainer: Dhani078
- Email: dhanisepeda@gmail.com
