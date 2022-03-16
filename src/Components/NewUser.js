import { useState } from "react";
import axios from "axios";
const NewUser = () => {
  const [userData, setUserData] = useState({
    id: "",
    createdAt: "",
    name: "",
  });
  const url = `https://605f7183e96e5c0017408a76.mockapi.io/users`;

  const showUserData = (e) => {
    e.preventDefault();
    axios
      .post(url, userData)
      .then(() => {
        setUserData({
          id: "",
          createdAt: "",
          name: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeUserData = (e) => {
    e.preventDefault();
    let newUserData = {};
    newUserData[e.target.id] = e.target.value;
    let date = new Date();
    newUserData.createdAt = date.toString();
    setUserData(newUserData);
  };

  return (
    <div className="new-user-wrapper">
      <form onSubmit={(e) => showUserData(e)} id="form">
        Vardas, Pavardė:
        <input
          type="text"
          id="name"
          onChange={(e) => changeUserData(e)}
          value={userData.name}
        />
        <button type="submit">Įrašyti</button>
      </form>
    </div>
  );
};

export default NewUser;
