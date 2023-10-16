import { sendMessages } from "@libf";

type typeToken = `ey${string}`;

export function SendServerDate(Token: typeToken) {
  return sendMessages(Token, [
    {
      type: "text",
      text: new Date()
    }
  ])
}
