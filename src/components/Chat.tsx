"use client";
import {
  PaperAirplaneIcon,
  GlobeEuropeAfricaIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";


export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = async (newMessage: string) => {
    // setMessages([...messages, { content: newMessage, role: 'user' }]);
    if (newMessage !== "") {
    const newMessages = [...messages, { role: "user", content: newMessage }];
    setMessages((prevMsgs) => [
      ...prevMsgs,
      { role: "user", content: newMessage },
    ]);
    const last1Messages = newMessages.slice(-1);


    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [last1Messages],
      }),
    });


      if (response.ok) {
        const data = await response.json();
        const newMessages = [...messages, { content: newMessage, role: 'user' }, { content: data, role: 'assistant' }];
        setMessages(newMessages);
        console.log(data);

      } else {
        console.error('API Error:', response.status, response.statusText);
      }
    }
    };

  return (
    <div>
    <div className={"w-full flex-1  border-zinc-100"}>
      <div
        className={`relative h-screen bg-black justify-center flex flex-row overflow-x-hidden  `}
      >
        <div className="">
        {messages.map(({ content, role }, index) => (
          <div  className={` my-10 flex md:w-[300px] w-[200px] lg:w-[400px] text-white bg-opacity-60  mb-2 ${role === "assistant" ? "bg-[#282A37] mr-[40%] text-left rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"  : " bg-[#0057FF] ml-[40%] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"}` } key={index}>
            <div className="flex p-4 text-base md:gap-2 md:py-6  lg:px-0">
              {/* <div className="w-[40px] h-[40px]">
                {role === "assistant" ?  <GlobeEuropeAfricaIcon />: <></> }
              </div> */}
  
              <div className="flex  flex-col sm:flex-row">
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


              {/* <div className="w-[40px] h-[40px]">
                {role === "assistant" ? <></>: <UserCircleIcon/>  }
              </div> */}
  
              
            </div>
          </div>
          ))}
</div>

     <div className="fixed bottom-0 left-0 right-0 clear-both flex flex-col items-center"> 
      <div
        className={"flex w-full flex-row items-center justify-center"}
      >

        <div className="mx-2 my-4 w-full flex-1 md:mx-4 md:mb-[52px] lg:max-w-2xl xl:max-w-3xl">
          <div
            className="relative flex flex-row rounded-lg border-black/10  sm:mx-4 bg-[#282A37] "
          >
            <input
              aria-label="chat input"
              required
              className="m-0 w-full p-0 py-3 pl-4 pr-12 text-white bg-[#282A37] rounded-md" 
              placeholder="Ask Earth anything!!"
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
              className="bg-[#282A37] text-white rounded-lg"
            >
                <div className={"h-6 w-6 mr-3"}>
                  <PaperAirplaneIcon
                  />
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
    );
  }