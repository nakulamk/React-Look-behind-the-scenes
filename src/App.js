import React, { useState } from "react";
import AddUser from "./Components/UserFolder/AddUser";
import UserLIst from "./Components/UserFolder/UserLIst";
// import { useState } from "react";
function App() {
  const [UserList, setUserList] = useState([]);

  const onClickOfSubmitButtonPassDataFromCtoP = (userdata) => {
    setUserList((prevUserlist) => {
      return [...prevUserlist, userdata];
    });
  };
  return (
    <div>
      <AddUser onAdduser={onClickOfSubmitButtonPassDataFromCtoP}></AddUser>
      <UserLIst users={UserList} />
    </div>
  );
}

export default App;
