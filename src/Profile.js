import React from "react";
import FollowingList from "./FollowingList.js";
import Button from "./Button.js";
import ReposList from "./ReposList.js";

export default ({ login, avatar_url, handleLogOut, followers, repos }) => (
  <div className="profile">
    <h2>Hello {login}</h2>
    <img src={avatar_url} alt={`${login}'s avatar'`} />
    <Button value="Log Out" handleClick={handleLogOut} />
    <FollowingList followers={followers} />
    <ReposList repos={repos.filter((repo) => repo.fork)} />
  </div>
);
