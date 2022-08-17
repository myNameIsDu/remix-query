import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { type LoaderFunction, json } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  console.log("loader back ----");
  return json({ id: "front" });
};

export default function Index() {
  const { id } = useLoaderData();
  return (
    <>
      <Link to={`${id}`}>back</Link>
      <Outlet />
    </>
  );
}
