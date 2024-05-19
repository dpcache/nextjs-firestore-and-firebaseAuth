import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getSession } from "next-auth/react";

type ResponseData = {
  message: string;
};

/**
 * VERIFY USER!
 * 
 * In NextAuth.js, 
 *  you typically don't need to send anything in the request body for the REST API to verify the user using getSession. Here's why:
  Automatic Session Inclusion: 
    NextAuth.js automatically handles session information. 
    It stores session data in cookies (by default) or other configured mechanisms that get included in every request to your Next.js application.
  getSession Extracts Session: 
    Your protected API route utilizes getSession from next-auth/react (or similar functionality) to retrieve the session data from these automatic mechanisms within the request.
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const session = await getSession({ req });
  console.log(session);
  if (session?.user?.name) {
    return res
      .status(200)
      .json({
        message: `Verified through REST! Hello ${session.user.name}!`,
      });
  }
  return res.status(401).json({ message: "Unauthorized" });
}
