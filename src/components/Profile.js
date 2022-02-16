import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  const { name, age, email } = user;
  return (
    <div style={{color: themeColor, transition: "all 0.5s ease-in-out"}}>
      <h1>Profile page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Profile;
