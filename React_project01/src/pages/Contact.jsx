import React, { useState } from "react";

const Contact = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      setChatMessages([...chatMessages, { text: inputMessage, fromUser: true }]);
      setInputMessage("");
    }
  };

  return (
    <div className="min-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mb-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">Contact Us</h2>
        <p className="text-lg text-center mb-2">Email: <a href="mailto:contact@mywebsite.com" className="text-blue-600 hover:underline">contact@mywebsite.com</a></p>
        <p className="text-lg text-center mb-4">Phone: <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 9876543210</a></p>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Chat UI */}
      <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2 text-center">Live Chat</h3>
        <div className="h-48 overflow-y-auto border rounded-md p-2 bg-gray-50 mb-2">
          {chatMessages.length === 0 ? (
            <p className="text-center text-gray-400">No messages yet.</p>
          ) : (
            chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-1 p-2 rounded-md text-sm ${
                  msg.fromUser ? "bg-yellow-200 text-right ml-auto" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>
        <form onSubmit={handleChatSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
