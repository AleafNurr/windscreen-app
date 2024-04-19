import type { MetaFunction } from "@vercel/remix";

import Home from "~/src/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Mercury Bar Glass & Windscreen" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Home />
  );
}
