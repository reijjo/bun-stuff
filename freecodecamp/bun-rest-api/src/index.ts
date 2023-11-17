import { Elysia, t } from "elysia";

// Define plugin
const plugin = new Elysia()
  .state("plugin-version", 1)
  .get("/form-plugin", () => "Hi")
  .get("/greet", () => "Hello Dev!");

// Application
const app = new Elysia()
  .get("/", () => "Hello Elysia")

  // Use plugin
  .use(plugin)

  // Extra info
  .state("version", 1)
  .decorate("getDate", () => Date.now())

  // Routes
  .get("/post/:id", ({ params: { id } }) => {
    return { id: id, title: "Learn Bun" };
  })
  .post("/post", ({ body, set }) => {
    set.status = 201;
    return body;
  })
  .get("/track/*", () => {
    return "Track Route";
  })

  // Using the .state and .decorate here
  .get("/tracks", ({ store, getDate }) => {
    // return new Response(
    //   JSON.stringify({
    //     tracks: ["Dancing Feat", "Sam I", "Animals"],
    //   }),
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    console.log("store", store);
    console.log("getDate", getDate());
    console.log("store plugin-version", store["plugin-version"]);
    return { tracks: ["Dancing Fast", "Sam I", "Animals", "New Song"] };
  });

// Groups
app.group("/user", (app) =>
  app

    // Validations
    .post("/sign-in", ({ body }) => body, {
      body: t.Object({
        username: t.String(),
        password: t.String(),
      }),
      response: t.Object({
        username: t.String(),
        password: t.String(),
      }),
    })
    .post("/sign-up", () => "Signup Route")
    .post("/profile", () => "Profile Route")
    .get("/:id", () => "User by id")
);

app
  .group("/v1", (app) =>
    app
      .get("/", () => "Version 1")
      .group("/products", (app) =>
        app
          .post("/", () => "Create Product")
          .get(
            "/:id",
            ({ params: { id } }) => {
              return id;
            },
            {
              params: t.Object({
                id: t.Numeric(),
              }),
            }
          )
          .put("/:id", () => "UPDATE PRODUCT BY ID")
          .delete("/:id", () => "DELETE PRODUCT BY ID")
      )
  )

  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
