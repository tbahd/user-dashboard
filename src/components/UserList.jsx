import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user}  />
      ))}
    </ul>
  );
}

export default UserList;
