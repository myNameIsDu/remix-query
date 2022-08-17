import { Link, Outlet } from "@remix-run/react";

import { type LoaderFunction, json } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  console.log("loader front ----");
  return json({ id: "front" });
};

export default function Index() {
  return (
    <>
      <Link to={`type?id=1`}>front</Link>
      <Outlet />
    </>
  );
}
