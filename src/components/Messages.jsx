import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

    useEffect(() => {
    if (!data.chatId) return; // Prevent errors if chatId is undefined
  
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      setMessages(doc.exists() ? doc.data().message || [] : []);
    });
  
    return () => {
      unSub();
    };
  }, [data.chatId]);


  return (
    <div className="messages">
      {messages.length > 0 ? (
        messages.map((m) => <Message message={m} key={m.id} />)
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );


};

export default Messages;
