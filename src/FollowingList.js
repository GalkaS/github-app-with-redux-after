import React from "react";
import Follower from "./Follower"


const FollowingList = ({ followers }) => (
  <React.Fragment>
    <h2>My followers</h2>
    <ul>
      {followers.map((follower) => (
        <Follower avatarUrl={follower.avatar_url} username={follower.login} />
      ))}
    </ul>
  </React.Fragment>
);


export default FollowingList;