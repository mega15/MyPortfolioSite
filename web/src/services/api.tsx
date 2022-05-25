import { settings } from "../settings";

export default async function SendMsg(name:string, title:string, email:string, message:string) {
    
    const body = {
        name:name,
        title:title,
        email:email,
        message:message
    };

    await fetch(settings.msgFuncUrl,  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
}