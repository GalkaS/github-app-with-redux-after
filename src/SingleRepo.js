import React from "react";


const SingleRepo = ({ repoName }) => (
  <li key={repoName}>
    <p>{repoName}</p>
  </li>
);

export default SingleRepo;