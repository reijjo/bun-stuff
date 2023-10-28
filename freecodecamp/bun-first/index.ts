import figlet from "figlet"; // makes ascii art

const server = Bun.serve({
  port: 3001,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const body = figlet.textSync("I am learning Bun!?");
      return new Response(body);
    }

    if (url.pathname === "/about") {
      return new Response("About me!");
    }

    if (url.pathname === "/contact") {
      return new Response("Contact Me!");
    }

    // handle Error
    if (url.pathname === "/feed") {
      throw new Error("Could not fetch feed");
    }

    // reads a file
    if (url.pathname === "/greet") {
      return new Response(Bun.file("./greet.txt"));
    }

    return new Response("404!");
  },
  // handle error in readable format
  error(error) {
    return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Listening on port http://localhost:${server.port}`);
