import { useEffect } from "react";

const User = ({ userInfo }) => {
  const { location, name } = userInfo;

  useEffect(() => {
    console.log("Inside the User Component useEffect");

    const interval = setInterval(() => {
      console.log("Inside the setInterval function of User component");
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h3>Contact:7302466350</h3>
    </div>
  );
};

export default User;
