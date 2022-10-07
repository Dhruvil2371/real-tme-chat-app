import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const Home = (props) => {
  const [roomName, setRoomName] = useState("");

  const roomNameChangeHandler = (event)=> {
    console.log(event.target.value)
    setRoomName(event.target.value)
  }

  return (
    <div className={classes.home}>
      <input
        className={classes.input}
        type="text"
        placeholder="Room Name..."
        value={roomName}
        onChange={roomNameChangeHandler}
      />
      <NavLink to={roomName} className={classes.span}  > Join Room</NavLink>
    </div>
  );
};

export default Home;
