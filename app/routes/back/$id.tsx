import { type LoaderFunction, json } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  console.log("loader $id ----");
  return json({ id: "$id" });
};

export default function Type() {
  return <div>$id</div>;
}
