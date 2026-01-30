import { useState } from "react";
import { logInteraction } from "../services/api";

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1️⃣ User ka message chat me dikhao
    const userMessage = {
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);

    // 2️⃣ Backend ko message bhejo
    const result = await logInteraction({
      hcp_name: "Chat User",
      interaction_type: "Chat",
      notes: input,
    });

    // 3️⃣ Backend ka response chat me dikhao
    const aiMessage = {
      sender: "ai",
      text: result.summary || "Interaction processed successfully",
    };

    setMessages((prev) => [...prev, aiMessage]);

    // 4️⃣ Input clear
    setInput("");
  };

  return (
    <div>
      <h2>AI Assistant</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          height: "220px",
          overflowY: "auto",
          marginBottom: "12px",
          borderRadius: "8px",
          background: "#f9fafb",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <strong>{msg.sender === "user" ? "You" : "AI"}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          value={input}
          placeholder="Type interaction details..."
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;
