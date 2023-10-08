import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: any) {
  const body = await req.json();
  console.log(body.messages)


  const chatCompletion = await openai.chat.completions.create({
    messages: [
    {"role": "user", "content": `${body.messages}`}],
    model: "gpt-3.5-turbo",
    max_tokens: 128,
  });

  const chatMessage = chatCompletion.choices[0].message.content

  return Response.json(chatMessage)

}