import { type LoaderFunction, json } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  console.log("loader type ----");
  return json({ id: "type" });
};

export default function Type() {
  return <div>type</div>;
}
