import { cookies } from "next/headers";

export default async  function Default() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  console.log("about server component");
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
