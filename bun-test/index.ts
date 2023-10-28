const server = Bun.serve({
  port: 3001,
  fetch(req) {
    return new Response("WOOP WOOP BUN!");
  },
});

console.log(`Bun server listening on http://localhost:${server.port}`);

/*
	NODEMON:
	bun --hot run index.ts
*/
