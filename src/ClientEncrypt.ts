import CryptoJS from "crypto-js";

export function encrypt_message(message: string) {
    return CryptoJS.AES.encrypt(
      message,
      process.env.NEXT_PUBLIC_CLIENTKEY
    ).toString();
  }
  
  export function decrypt_message(message: string) {
    return CryptoJS.AES.decrypt(message, process.env.NEXT_PUBLIC_CLIENTKEY).toString(
      CryptoJS.enc.Utf8
    );
  }