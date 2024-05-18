"use client";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState<string>("");

  // pages\api\verify.ts
  const handleVerify = async () => {
    const response = await axios.get("/api/verify");
    setData(response?.data?.message ?? "");
  };

  return (
    <>
      <button onClick={() => signOut()}>Logout</button>
      <div>
        <button onClick={handleVerify}>Verify User</button>
        <div>{data}</div>
      </div>
    </>
  );
}
