EXAMPLES: curl-to-ts

1. Convert Simple GET Request
Command:
```bash
npx curl-to-ts 'curl https://api.github.com/users/Dhani078'
```

Output:
```typescript
export interface GetUserResponse {
  login: string;
  id: number;
  avatar_url: string;
}

export async function getUser(): Promise<GetUserResponse> {
  const response = await fetch("https://api.github.com/users/Dhani078", {
    method: "GET"
  });
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  return response.json();
}
```

---

2. Convert Authenticated POST Request With JSON Body
Command:
```bash
npx curl-to-ts "curl -X POST https://api.stripe.com/v1/charges -H 'Authorization: Bearer tok_123' -d 'amount=2000&currency=usd'"
```

---

3. Generate Standalone TypeScript File
Command:
```bash
npx curl-to-ts --input request.sh --output src/api/client.ts
```
