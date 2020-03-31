import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const OnlineUsers = () => {
  let onlineUsersList = []
  const { loading, error, data } = useSubscription(
    gql`
      subscription getOnlineUsers {
        users {
          id
          name
        }
      }
    `
  );

  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }
  if (data) {
    onlineUsersList = data.users.map(u => (
      <div key={u.id}>{u.name}</div>
    ));
  }

  return (
    <div className="onlineUsersWrapper">
        <div className="sliderHeader">
          Online users - {onlineUsersList.length}
        </div>
    </div>
  );
};

export default OnlineUsers;