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
    console.log("received 2nd encrypted message from the client : ", message);
    // decrypt the message before sending it back
    const decryptedMessage = CryptoJS.AES.decrypt(message, process.env.SERVERKEY).toString(CryptoJS.enc.Utf8);
    console.log("sending 1st decrypted message to the client : ", decryptedMessage);
    return res.status(200).json({message: decryptedMessage})
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
