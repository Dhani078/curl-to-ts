EXAMPLES: curl-to-ts

Scenario 1: Simple POST Request with JSON Body
```bash
$ npx curl-to-ts "curl -X POST https://api.shop.com/cart -d '{\"cartId\": 42, \"active\": true}'"

export interface ApiResponse {
  cartId: number;
  active: boolean;
}
```

Scenario 2: Nested Object Hierarchy
```bash
$ npx curl-to-ts "curl -X POST https://api.com/profile -d '{\"user\": {\"id\": \"usr_1\", \"settings\": {\"theme\": \"dark\", \"notifications\": true}}}'" --name UserProfile

export interface Settings {
  theme: string;
  notifications: boolean;
}

export interface User {
  id: string;
  settings: Settings;
}

export interface UserProfile {
  user: User;
}
```

Scenario 3: Array of Primitive and Object Elements
```bash
$ npx curl-to-ts "curl -d '{\"tags\": [\"fast\", \"secure\"], \"metrics\": [{\"name\": \"cpu\", \"val\": 98.4}]}'" --name MetricsPayload

export interface Metric {
  name: string;
  val: number;
}

export interface MetricsPayload {
  tags: string[];
  metrics: Metric[];
}
```

Scenario 4: Reading cURL from File
```bash
$ cat request.curl | npx curl-to-ts --name FilePayload
```

Scenario 5: Emitting Readonly Properties
```bash
$ npx curl-to-ts "curl -d '{\"apiKey\": \"key_123\"}'" --readonly

export interface ApiResponse {
  readonly apiKey: string;
}
```
