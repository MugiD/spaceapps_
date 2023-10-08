"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


export default function Chat({planetname}: {planetname: string}) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = async (newMessage: string) => {
    setMessages([...messages, { content: newMessage, role: 'user' }]);
    if (newMessage !== "") {

    // const newMessages = [...messages, { role: "user", content: newMessage }];
    // setMessages((prevMsgs) => [
    //   ...prevMsgs,
    //   { role: "user", content: newMessage },
    // ]);
    // const last1Messages = newMessages.slice(-1);

    let newnewmessage = `act as if you are a guide named Nika that helps people travel on ${planetname}. ${newMessage}`
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [newnewmessage],
        // messages: [...last1Messages, { role: "system", content:  }],
      }), 
    });

      if (response.ok) {
        const data = await response.json();
        const newMessages = [
          ...messages,
          { content: newMessage, role: "user" },
          { content: data, role: "assistant" },
        ];
        setMessages(newMessages);
        console.log(data);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    }
  };

  return (
    <div className="w-[60%] pt-10 h-screen mx-auto">
      <div className="h-[90%] overflow-y-scroll snap-y">
      {messages.map(({ content, role }, index) => (
          <div  className={`my-10 flex md:w-[300px] w-[200px] lg:w-[400px] text-white bg-opacity-60  mb-2 ${role === "assistant" ? "bg-[#282A37] mr-[50%] text-left rounded-t-3xl rounded-br-3xl"  : " bg-[#0057FF] ml-[50%] rounded-t-3xl rounded-bl-3xl"}` } key={index}>
            <div className="flex p-4 text-base md:gap-2 md:py-6  lg:px-0">
              <div className="flex flex-col sm:flex-row px-4">
                <div className="">
                  <div
                    className="prose break-all "
                  >
                    {content}
                    </div>
                </div>
                  <div className="flex flex-row">
                  </div>
              </div>
            </div>
          </div>
          ))}
      </div>
      <div className="flex w-full">
        <input
          aria-label="chat input"
          required
          className="m-0 w-[95%] py-3 pl-4 pr-12 text-white bg-[#282A37] rounded-l-md focus:outline-0"
          placeholder="Ask you guide anything!!"
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(input);
              setInput("");
            }
          }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
          className="bg-[#282A37] w-[5%] text-white rounded-r-lg"
        >
          <div className={"h-6 w-6 mr-3"}>
            <PaperAirplaneIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
