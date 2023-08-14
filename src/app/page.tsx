"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const makeRequest = async () => {
  const response = await fetch("/api/test", {
    credentials: "include",
  });

  const data = await response.json();

  console.log("DATA:", data);
};

export default function Home() {
  const { data, status, update } = useSession();

  return (
    <main>
      {status === "loading" && <button disabled>loading...</button>}
      {status === "authenticated" && (
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => update()}>Update session</button>
          <button onClick={() => makeRequest()}>Make request</button>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
      {status === "unauthenticated" && (
        <div>
          <button onClick={() => signIn("github")}>Sign in</button>
        </div>
      )}
      <pre>{JSON.stringify({ data, status }, null, 2)}</pre>
    </main>
  );
}
