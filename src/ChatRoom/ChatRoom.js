import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ChatRoom.module.css";
import useChat from "../Hooks/useChat";

const ChatRoom = (props) => {
  const params = useParams();
  const roomId = params.ChatId
  console.log(roomId)
  const [newMsg, setNewMsg] = useState("");
  const {messages, sendMessage} = useChat(roomId)
  let setTimer = false;

    const sendBtnHandler = () => {
        sendMessage(newMsg)
        setNewMsg('')
    }

  const sendMsgHandler = (event) => {
    // if (setTimer) {
    //   clearTimeout(timer);
    // }
    // const timer = setTimeout(() => {
    //   console.log(event.target.value);
    //   setNewMsg(event.target.value);
    // }, 5000);
    // console.log(setTimer)
    // setTimer = true;
    console.log(event.target.value);
      setNewMsg(event.target.value);
  };
console.log(`${classes.message_item} ${
  0 ? classes.my_message : classes.received_message
}`)
  return (
    <div className={classes.main_wrapper}>
      <h1>Room : {params.ChatId}</h1>
      <p>Login page</p>
      <div className={classes.innerdiv}>
        <ol>
        {messages.map((message, i) => (
            <li
              key={i}
              className={`${classes.message_item} ${
                message.ownedByCurrentUser ? classes.my_message : classes.received_message
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        className={classes.text_area}
        placeholder="type your message here..."
        rows="5"
        onChange={sendMsgHandler}
        value={newMsg}
      ></textarea>
      <button className={classes.btn} type="submit" onClick={sendBtnHandler}>
        send
      </button>
    </div>
  );
};

export default ChatRoom;
