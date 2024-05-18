import { authOptions } from '../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth'
import './globals.css'
import { Inter } from 'next/font/google'
import SessionProvider from './SessionProvider';
import Login from './Login';
import Home from './page';
import { firestore_db } from './firebase/config';

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  const querySnapshot = await firestore_db.collection("users").get();
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log("FireStore: ", data);
  console.log("Session: ", session);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {session?.user?.name ?
            <div>Hello {session?.user?.name}</div>
            :
            <div>Please login!</div>
          }
          {!session ? (
            <Login />
          ) : (
            <Home />
          )}
        </SessionProvider>
      </body>
    </html>
  )
}