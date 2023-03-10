// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CryptoJS from "crypto-js";

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'POST') {
    const { message } = req.body;
    console.log("received 1st encrypted message from the client : ", message);
    // encrypt the message before sending it back
    const encryptedMessage = CryptoJS.AES.encrypt(message, process.env.SERVERKEY).toString();
    console.log("sending 2nd encrypted message to the client : ", encryptedMessage);
    return res.status(200).json({message: encryptedMessage})
  } else {
    // not allowed
    return res.status(405).json({ message: 'Method not allowed' });
  }
}


// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
