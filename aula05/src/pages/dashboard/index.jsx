import React, { useEffect, useState } from "react";
import connection from "../../api";

import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("access_token");

        if (!token) throw new Error();

        connection.defaults.headers.authorization = "Bearer " + token;

        await connection.get("/admin");

        const response = await connection.get("/users");
        const userList = response.data.map((el, i) => {
          return (
            <li key={i}>
              {el.name} - {el.age} - {el.role}
            </li>
          );
        });
        setUsers(userList);
      } catch (error) {
        console.log(error);
        return history.push("/");
      }
    })();
  }, []);

  return <div>{users}</div>;
}

export default Dashboard;
