INTEGRATION GUIDE: curl-to-ts

1. Browser DevTools Network Tab Workflow
Copy any failed network request from Chrome/Firefox DevTools as cURL, and pipe directly:

```bash
pbpaste | npx curl-to-ts --name NetworkResponse > src/types/api.ts
```

2. Automatic API Contract Generation in npm Scripts
Add type generator scripts in package.json:

```json
{
  "scripts": {
    "types:user": "npx curl-to-ts "curl -d @fixtures/user.json https://api.local/user" --name UserDto > src/types/user.ts"
  }
}
```

3. Visual Studio Code Task
Configure a VS Code task in .vscode/tasks.json to generate types from clipboard on shortcut key:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Generate Types from cURL",
      "type": "shell",
      "command": "npx curl-to-ts --stdin",
      "problemMatcher": []
    }
  ]
}
```
