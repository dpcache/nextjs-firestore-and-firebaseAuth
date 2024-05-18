'use client';
import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  const session = useSession();
  return (
    <>
      <button onClick={() => signOut()}>Logout</button>
    </>
  )
}