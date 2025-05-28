"use client";
import { useVoice } from "@humeai/voice-react";
import { useEffect, useState } from "react";

const Messages = () => {
  const [userInput, setUserInput] = useState("");

  const { messages, status, sendUserInput } = useVoice();

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    sendUserInput(userInput);
    setUserInput("");
  };

  if (status.value !== "connected") return <div>Not connected</div>;

  return (
    <div style={{ height: "500px", border: "1px solid black" }}>
      <div style={{ display: "flex" }}>
        <input
          style={{ flexGrow: 1 }}
          type="text"
          onChange={handleTextInput}
          value={userInput}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
      {messages.map((msg, index) => {
        if (msg.type === "user_message" || msg.type === "assistant_message") {
          return (
            <div key={msg.type + index}>
              {msg.message.role} - {msg.message.content}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Messages;
