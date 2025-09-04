import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Top 5 TCG" },
    { name: "description", content: "Top 5 Check TCG!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
