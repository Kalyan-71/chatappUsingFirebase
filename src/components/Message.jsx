import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {
  
  const profile1 = "https://th.bing.com/th/id/OIP.gP87NSxukkO0EhTsHQXywwHaHa?pid=ImgDet&w=474&h=474&rs=1";
  const profile2 ="https://th.bing.com/th/id/OIP.PVBhON6xaHZB6G06ghSVaQHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3";
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);  
  const ref = useRef();

  useEffect(()=> {
      ref.current?.scrollIntoView({behavior:"smooth"});
  },[message]);


  return (

    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? profile1
              : profile2
          }
          alt=""
        />
        <span>{}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        
      </div>
    </div>
  )
}

export default Message