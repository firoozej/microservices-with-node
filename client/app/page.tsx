import { request } from "@/app/utilities";
import { headers } from "next/headers";

export default async function Home() {
  const { data }: any = await request("api/users/currentuser", { headers: headers() });

  return data?.currentUser?.id ? <h1>Logged In</h1> : <h1>Not logged in</h1>;
}
