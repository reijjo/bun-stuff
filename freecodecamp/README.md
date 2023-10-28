# TUTORIAL

## Basics

### package.json

add

```json
  "scripts": {
    "start": "bun run index.ts",
		"dev": "bun --watch index.ts",
		"hot": "bun --hot run index.ts"
  },
```

hot and dev are basically the same but,

- --watch mode is more reliable and consistent, as it ensures that your code is always in a fresh state. It is also faster to start, as it does not need to scan your files for changes. However, it may be slower to reload, as it has to restart the process and re-import all the files.

- --hot mode is more convenient and efficient, as it preserves your state and only reloads the changed files. It is also faster to reload, as it does not need to restart the process. However, it may be slower to start, as it has to scan your files for changes. It may also introduce some bugs or inconsistencies, as some files may depend on the state of other files.

(from Bing)

### Add a packages

bun add figlet
bun add @types/figlet

(figlet makes ascii art)

## API stuff with Elysia (framework, like Express for nodejs)

`https://elysiajs.com/`
`bun create elysia [YOUR_APP_NAME]`

### Get started

- `bun create elysia bun-rest-api` cd bun-rest-api
- `bun run dev`
- index.ts

```ts
import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello from Elysia, I am gonna build RESTFUL APIs")
  .get("/post/:id", ({ params: { id } }) => {
    return { id: id, title: "Learn Bun" };
  })
  .post("/post", ({ body }) => {
    return body;
  })
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
```

use Postman to test the api localhost:3001/post/4 <= should return 4, Learn Bun

....

## Frontend with bun

- `bun create vite [PROJECT_NAME]`
- `bun create vite react-app` -> React -> TypeScript + SWC
- change in package.json

```json
	"scripts": {
		"dev": "vite"
	}
```

to

```json
	"scripts": {
		"dev": "bunx --bun vite"
	}
```

## Express with bun

- `mkdir express-with-bun` -> `cd express-with-bun` -> `touch server.ts`
- `bun add express @types/express`
- server.ts file

```ts
import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello world taas");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

- `bun server.ts`
