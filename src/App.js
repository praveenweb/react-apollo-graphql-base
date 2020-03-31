import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

const App = () => {

  const { loading, error, data } = useQuery(GET_USERS, {
    pollInterval: 500,
  });
  if (loading) return "loading...";
  if (error) return `error: ${error.message}`;

  return (
    <div>
      {data.users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
export { GET_USERS };