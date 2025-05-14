
"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

interface Message {
  id: number;
  sender: "teacher" | "parent";
  name: string;
  time: string;
  content: string;
}

const messagesData: Message[] = [
  {
    id: 1,
    sender: "teacher",
    name: "Ms Lee Jane",
    time: "12:04 AM",
    content:
      "Hi Mrs. Moyo! Good afternoon. Thandi had such a lovely day today!",
  },
  {
    id: 2,
    sender: "parent",
    name: "Evan Ndlovu",
    time: "12:15 AM",
    content: "Oh that's great to hear! What was she up to?",
  },
  {
    id: 3,
    sender: "teacher",
    name: "Ms Lee Jane",
    time: "12:04 AM",
    content:
      "She really enjoyed storytime today. We read 'The Very Hungry Caterpillar' and she was so engaged—she even remembered what came after the strawberries!",
  },
  {
    id: 4,
    sender: "parent",
    name: "Evan Ndlovu",
    time: "12:15 AM",
    content:
      "Haha, that's her favorite! She makes me read it almost every night at home.",
  },
  {
    id: 5,
    sender: "teacher",
    name: "Ms Lee Jane",
    time: "12:04 AM",
    content:
      "That makes sense! She also did really well with her shapes during activity time. She matched all of them correctly, even the tricky ones like hexagons.",
  },
  {
    id: 6,
    sender: "parent",
    name: "Evan Ndlovu",
    time: "12:15 AM",
    content: "Wow, I’m so proud of her. Was she okay",
  },
];

export default function Communications() {
  const [messages, setMessages] = useState<Message[]>(messagesData);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "parent",
      name: "Evan Ndlovu",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      content: inputValue,
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="flex min-h-[80vh] rounded-4xl bg-white">
      {/* Sidebar */}
      <div className="w-[300px] bg-white border-r">
        <div className="p-4 text-sm text-gray-500">Groups</div>
        <div className="border-t">
          <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                UE
              </div>
              <div>
                <div className="text-sm font-medium">Upcoming Events</div>
                <div className="text-xs text-gray-400">Ms Lee: Hi guys! I’ve shared yo...</div>
              </div>
            </div>
            <div className="text-xs text-gray-400">12:04</div>
          </div>
        </div>

        <div className="p-4 text-sm text-gray-500">Direct Messages</div>
        {[
          "Garrett Watson",
          "Caroline Santos",
          "Leon Nunez",
          "Oscar Holloway",
          "Ralph Harris",
        ].map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Mr {name}</div>
              <div className="text-xs text-gray-400 truncate">
                Hi Please, change the Check...
              </div>
            </div>
            {i === 0 && <div className="w-2 h-2 bg-red-500 rounded-full" />}
          </div>
        ))}
      </div>

      {/* Main chat area */}
      <div className="flex flex-col flex-1 h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
              LJ
            </div>
            <div>
              <div className="text-sm font-medium">Ms Lee Jane</div>
              <div className="text-xs text-gray-500">Teacher</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Friday, September 8</div>
        </div>

        {/* Scrollable messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "parent" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-sm rounded-2xl px-4 py-2 text-sm shadow ${
                  msg.sender === "teacher"
                    ? "bg-gray-200 text-black"
                    : "bg-blue-600 text-white"
                }`}
              >
                {msg.content}
              </div>
              <div className="text-[10px] text-gray-400 mt-1">
                {msg.name} • {msg.time}
              </div>
            </div>
          ))}
        </div>

        {/* Input field */}
        <div className="p-4 border-t bg-white">
          <div className="flex items-center gap-2 rounded-full border px-4 py-2 bg-gray-100">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              type="text"
              placeholder="Type your message here..."
              className="flex-1 bg-transparent text-sm focus:outline-none"
            />
            <button onClick={handleSend}>
              <SendHorizonal size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
