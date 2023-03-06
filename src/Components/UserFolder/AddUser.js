import React, { useState } from "react";
import Card from "../UI/Card";
// import Button from "../UI/Button";
import classes from "./AddUser.module.css";
const AddUser = () => {
  const [UserName, setUserName] = useState("");
  const [Age, setAge] = useState("");

  const NameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (UserName.trim().length === 0 || Age.trim().length === 0) {
      console.log("cannot accept the user");
      return;
    }
    if (+Age < 1) {
      console.log("invalid age");
      return;
    }
    const UserData = {
      id: Math.random(),
      username: UserName,
      age: Age,
    };
    console.log(UserData);
    setUserName("");
    setAge("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={NameChangeHandler}
          value={UserName}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={AgeChangeHandler}
          value={Age}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};
export default AddUser;
