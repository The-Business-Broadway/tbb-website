import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Hero } from "~/components/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "The Business Broadway" },
    { name: "description", content: "Welcome to The Business Broadway!" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
