import React from "react";
import SingleRepo from "./SingleRepo"




const ReposList = ({ repos }) => (
  <React.Fragment>
    <h2>Recent repos</h2>
    <ul>
      {repos.map((repo) => (
        <div>
        <SingleRepo repoName={repo.name} />
        <pre>
          {JSON.stringify(repo, null, 2)}
        </pre>
        </div>
      ))}
    </ul>
  </React.Fragment>
);


export default ReposList;