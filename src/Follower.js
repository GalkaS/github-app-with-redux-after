import React from "react";


const Follower = ({ avatarUrl, username }) => (
  <li key={username}>
    <img src={avatarUrl} alt={`${username}'s avatar`} />
    <p>{username}</p>
  </li>
);

export default Follower;