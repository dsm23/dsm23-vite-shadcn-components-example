import type { FunctionComponent } from "react";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";

const Home: FunctionComponent<Route.ComponentProps> = () => (
  <main className="space-y-2 p-4 text-center">
    <h1 className="text-2xl">Radix Button</h1>

    <Button>Default</Button>
  </main>
);

export default Home;
