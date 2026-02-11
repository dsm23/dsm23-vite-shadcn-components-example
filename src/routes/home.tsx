import type { FunctionComponent } from "react";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [
  { title: "Vite Shadcn Components Example" },
  { name: "description", content: "Welcome to Shadcn examples." },
];

const Home: FunctionComponent<Route.ComponentProps> = () => (
  <main className="p-4 text-center">
    <h1 className="text-2xl">Home Page</h1>
    <a
      className="mt-2 block text-blue-800 underline hover:text-blue-900"
      href="https://reactrouter.com/docs"
    >
      React Router Docs
    </a>
  </main>
);

export default Home;
