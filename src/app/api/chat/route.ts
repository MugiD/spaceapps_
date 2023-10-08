import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

export async function POST(req: any) {
  const body = await req.json();

  // const messages = [
  //   {
  //     role: "system",
  //     content: ``,
  //   },
  // ];
  // messages.push(...body?.messages);

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "act as if you are a guide that helps people travel on mars talk about any places you can visit there and how the person should spend their vacation on mars" }],
    model: "gpt-3.5-turbo",
    max_tokens: 128,
  });

  const chatMessage = chatCompletion.choices[0].message.content

  return Response.json(chatMessage)

 
  // if (!res.ok) {
  //   throw new Error(res.statusText);
  // }
  // return Response.json(data)
}