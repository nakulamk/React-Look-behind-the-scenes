import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
// import Button from "../UI/Button";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [UserName, setUserName] = useState("");
  const [Age, setAge] = useState("");
  const [Error, setError] = useState("");

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
      setError({
        title: "Invalid input.",
        message: "Please enter the vaid name and age.",
      });
      return;
    }
    if (+Age < 1) {
      console.log("invalid age");
      setError({
        title: "Invalid Age input.",
        message: "Please enter the Valid age(>0).",
      });
      return;
    }
    const UserData = {
      id: Math.random().toString(),
      username: UserName,
      age: Age,
    };
    console.log(UserData);
    props.onAdduser(UserData);
    setUserName("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {Error && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onConfrim={errorHandler}
        />
      )}
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
    </div>
  );
};
export default AddUser;
