import { ApolloServerPluginLandingPageGraphQLPlayground as Playground } from "apollo-server-core";
import { connectToDb } from "./db/db.js";
import { ApolloServer } from "apollo-server";
import { schema } from "./graphql/schema.js";

const server = new ApolloServer({
  schema,
  plugins: [Playground()],
});

async function initServer() {
  try {
    await connectToDb();
    server.listen().then(({ url }) => {
      console.log(`Server started at ${url}`);
    });
    /**
     * Code here!
     */
  } catch (error) {
    throw new Error(error);
  }
}

initServer();
