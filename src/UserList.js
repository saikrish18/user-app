import React, {useState, useEffect} from "react";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(' https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error('Error fetching data:',error));
    },[]);

    return (
        <div className="UserList">
            <h2>UserList</h2>
            <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}

export default UserList;